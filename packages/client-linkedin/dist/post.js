"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInPostClient = void 0;
const eliza_1 = require("@ai16z/eliza");
const linkedInPostTemplate = `{{timeline}}

# Knowledge
{{knowledge}}

About {{agentName}} (LinkedIn Profile):
{{bio}}
{{headline}}
{{summary}}
{{postDirections}}

{{providers}}

{{recentPosts}}

{{characterPostExamples}}

# Task: Generate a professional LinkedIn post in the voice and style of {{agentName}}
Write a post that is {{adjective}} about {{topic}}, from the perspective of {{agentName}}. 
The post should be professional and industry-relevant.
Do not add commentary or acknowledge this request, just write the post.
Keep the tone professional but engaging.`;
class LinkedInPostClient {
    constructor(client, runtime) {
        this.client = client;
        this.runtime = runtime;
    }
    async start(postImmediately = false) {
        if (!this.client.profile) {
            await this.client.init();
        }
        const generateNewPostLoop = async () => {
            const lastPost = await this.runtime.cacheManager.get(`linkedin/${this.runtime.getSetting('LINKEDIN_USERNAME')}/lastPost`);
            const lastPostTimestamp = lastPost?.timestamp ?? 0;
            const minHours = parseInt(this.runtime.getSetting('POST_INTERVAL_MIN')) || 24;
            const maxHours = parseInt(this.runtime.getSetting('POST_INTERVAL_MAX')) || 72;
            const randomHours = Math.floor(Math.random() * (maxHours - minHours + 1)) + minHours;
            const delay = randomHours * 60 * 60 * 1000;
            if (Date.now() > lastPostTimestamp + delay) {
                await this.generateNewPost();
            }
            setTimeout(() => {
                generateNewPostLoop();
            }, delay);
            eliza_1.elizaLogger.log(`Next LinkedIn post scheduled in ${randomHours} hours`);
        };
        if (postImmediately) {
            await this.generateNewPost();
        }
        generateNewPostLoop();
    }
    async generateNewPost() {
        eliza_1.elizaLogger.log('Generating new LinkedIn post');
        try {
            const recentPosts = await this.client.linkedInClient.getFeedPosts();
            const formattedPosts = recentPosts.map((post) => {
                return `Post ID: ${post.id}
Author: ${post.author.name}
Date: ${new Date(post.timestamp).toDateString()}

${post.text}
---`;
            }).join('\n\n');
            const topics = this.runtime.character.topics.join(', ');
            const state = await this.runtime.composeState({
                userId: this.runtime.agentId,
                roomId: (0, eliza_1.stringToUuid)('linkedin_generate_room'),
                agentId: this.runtime.agentId,
                content: {
                    text: topics,
                    action: ''
                }
            }, {
                timeline: formattedPosts,
                headline: this.client.profile.headline,
                summary: this.client.profile.summary
            });
            const context = (0, eliza_1.composeContext)({
                state,
                template: this.runtime.character.templates?.linkedInPostTemplate || linkedInPostTemplate
            });
            eliza_1.elizaLogger.debug('Generate post prompt:\n' + context);
            const newPostContent = await (0, eliza_1.generateText)({
                runtime: this.runtime,
                context,
                modelClass: eliza_1.ModelClass.SMALL
            });
            if (this.runtime.getSetting('LINKEDIN_DRY_RUN') === 'true') {
                eliza_1.elizaLogger.info(`Dry run: would have posted: ${newPostContent}`);
                return;
            }
            try {
                eliza_1.elizaLogger.log(`Posting new LinkedIn post:\n${newPostContent}`);
                const result = await this.client.requestQueue.add(async () => await this.client.linkedInClient.createPost(newPostContent));
                await this.runtime.cacheManager.set(`linkedin/${this.client.profile.username}/lastPost`, {
                    id: result.id,
                    timestamp: Date.now()
                });
                const roomId = (0, eliza_1.stringToUuid)(`linkedin-post-${result.id}`);
                await this.runtime.messageManager.createMemory({
                    id: (0, eliza_1.stringToUuid)(`${result.id}-${this.runtime.agentId}`),
                    userId: this.runtime.agentId,
                    content: {
                        text: newPostContent,
                        url: result.url,
                        source: 'linkedin'
                    },
                    agentId: this.runtime.agentId,
                    roomId,
                    createdAt: Date.now()
                });
                eliza_1.elizaLogger.log(`LinkedIn post created: ${result.url}`);
            }
            catch (error) {
                eliza_1.elizaLogger.error('Error creating LinkedIn post:', error);
            }
        }
        catch (error) {
            eliza_1.elizaLogger.error('Error generating new LinkedIn post:', error);
        }
    }
}
exports.LinkedInPostClient = LinkedInPostClient;
