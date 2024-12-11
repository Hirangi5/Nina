"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBase = void 0;
const events_1 = require("events");
// @ts-ignore
const linkedin_api_1 = require("linkedin-api");
const eliza_1 = require("@ai16z/eliza");
const eliza_2 = require("@ai16z/eliza");
class RequestQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }
    async add(request) {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    const result = await request();
                    resolve(result);
                }
                catch (error) {
                    reject(error);
                }
            });
            this.processQueue();
        });
    }
    async processQueue() {
        if (this.processing || this.queue.length === 0) {
            return;
        }
        this.processing = true;
        while (this.queue.length > 0) {
            const request = this.queue.shift();
            if (!request)
                continue;
            try {
                await request();
            }
            catch (error) {
                console.error("Error processing request:", error);
                this.queue.unshift(request);
                await this.exponentialBackoff(this.queue.length);
            }
            await this.randomDelay();
        }
        this.processing = false;
    }
    async exponentialBackoff(retryCount) {
        const delay = Math.pow(2, retryCount) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    async randomDelay() {
        const delay = Math.floor(Math.random() * 2000) + 1500;
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}
class ClientBase extends events_1.EventEmitter {
    constructor(runtime) {
        super();
        this.requestQueue = new RequestQueue();
        this.runtime = runtime;
        if (ClientBase._linkedInClient) {
            this.linkedInClient = ClientBase._linkedInClient;
        }
        else {
            this.linkedInClient = new linkedin_api_1.Client();
            ClientBase._linkedInClient = this.linkedInClient;
        }
    }
    async init() {
        const username = this.runtime.getSetting("LINKEDIN_USERNAME");
        const password = this.runtime.getSetting("LINKEDIN_PASSWORD");
        if (!username || !password) {
            throw new Error("LinkedIn credentials not configured");
        }
        eliza_1.elizaLogger.log("Logging into LinkedIn...");
        try {
            await this.linkedInClient.login(username, password);
            this.profile = await this.fetchProfile();
            if (this.profile) {
                eliza_1.elizaLogger.log("LinkedIn profile loaded:", JSON.stringify(this.profile, null, 2));
                this.runtime.character.linkedInProfile = {
                    id: this.profile.id,
                    username: this.profile.username,
                    fullName: this.profile.fullName,
                    headline: this.profile.headline,
                    summary: this.profile.summary,
                };
            }
            else {
                throw new Error("Failed to load LinkedIn profile");
            }
            await this.loadInitialState();
        }
        catch (error) {
            eliza_1.elizaLogger.error("LinkedIn login failed:", error);
            throw error;
        }
    }
    async fetchProfile() {
        const cachedProfile = await this.getCachedProfile();
        if (cachedProfile)
            return cachedProfile;
        try {
            const profile = await this.requestQueue.add(async () => {
                const profileData = await this.linkedInClient.getProfile();
                return {
                    id: profileData.id,
                    username: profileData.username,
                    fullName: profileData.firstName + " " + profileData.lastName,
                    headline: profileData.headline,
                    summary: profileData.summary,
                };
            });
            await this.cacheProfile(profile);
            return profile;
        }
        catch (error) {
            console.error("Error fetching LinkedIn profile:", error);
            return undefined;
        }
    }
    async loadInitialState() {
        await this.populateConnections();
        await this.populateRecentActivity();
    }
    async populateConnections() {
        const connections = await this.requestQueue.add(async () => {
            return await this.linkedInClient.getConnections();
        });
        for (const connection of connections) {
            const roomId = (0, eliza_2.stringToUuid)(`linkedin-connection-${connection.id}`);
            await this.runtime.ensureConnection((0, eliza_2.stringToUuid)(connection.id), roomId, connection.username, connection.fullName, "linkedin");
        }
    }
    async populateRecentActivity() {
        const activities = await this.requestQueue.add(async () => {
            return await this.linkedInClient.getFeedPosts();
        });
        for (const activity of activities) {
            const roomId = (0, eliza_2.stringToUuid)(`linkedin-post-${activity.id}`);
            await this.saveActivity(activity, roomId);
        }
    }
    async saveActivity(activity, roomId) {
        const content = {
            text: activity.text,
            url: activity.url,
            source: "linkedin",
            type: activity.type,
        };
        await this.runtime.messageManager.createMemory({
            id: (0, eliza_2.stringToUuid)(`${activity.id}-${this.runtime.agentId}`),
            userId: activity.authorId === this.profile.id
                ? this.runtime.agentId
                : (0, eliza_2.stringToUuid)(activity.authorId),
            content,
            agentId: this.runtime.agentId,
            roomId,
            embedding: (0, eliza_2.getEmbeddingZeroVector)(),
            createdAt: activity.timestamp,
        });
    }
    async getCachedProfile() {
        return await this.runtime.cacheManager.get(`linkedin/${this.runtime.getSetting("LINKEDIN_USERNAME")}/profile`);
    }
    async cacheProfile(profile) {
        await this.runtime.cacheManager.set(`linkedin/${profile.username}/profile`, profile);
    }
}
exports.ClientBase = ClientBase;
