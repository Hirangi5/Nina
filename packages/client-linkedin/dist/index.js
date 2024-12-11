"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInClientInterface = void 0;
const eliza_1 = require("@ai16z/eliza");
const base_1 = require("./base");
const post_1 = require("./post");
const interactions_1 = require("./interactions");
const environment_1 = require("./environment");
class LinkedInManager {
    constructor(runtime) {
        this.client = new base_1.ClientBase(runtime);
        this.post = new post_1.LinkedInPostClient(this.client, runtime);
        this.interaction = new interactions_1.LinkedInInteractionClient(this.client, runtime);
    }
}
exports.LinkedInClientInterface = {
    async start(runtime) {
        await (0, environment_1.validateLinkedInConfig)(runtime);
        eliza_1.elizaLogger.log('LinkedIn client started');
        const manager = new LinkedInManager(runtime);
        await manager.client.init();
        await manager.post.start();
        await manager.interaction.start();
        return manager;
    },
    async stop(runtime) {
        eliza_1.elizaLogger.warn('LinkedIn client stop not implemented yet');
    }
};
exports.default = exports.LinkedInClientInterface;
