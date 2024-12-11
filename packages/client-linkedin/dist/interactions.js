"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInInteractionClient = void 0;
const eliza_1 = require("@ai16z/eliza");
const linkedInMessageTemplate = `{{timeline}}

# Knowledge
{{knowledge}}

About {{agentName}} (LinkedIn Profile):
{{bio}}
{{headline}}
{{summary}}
{{postDirections}}

{{providers}}

Recent interactions:
{{recentInteractions}}

# Task: Generate a professional response in the voice and style of {{agentName}}
Current Message:
{{currentMessage}}

Conversation History:
{{conversationHistory}}

{{actions}}

# Task: Generate a response in the voice and style of {{agentName}}. Include an action, if appropriate. {{actionNames}}:` + eliza_1.messageCompletionFooter;
const linkedInShouldRespondTemplate = `# INSTRUCTIONS: Determine if {{agentName}} should respond to the message and participate in the conversation.

Response options are RESPOND, IGNORE and STOP.

{{agentName}} should:
- RESPOND to messages that are directly addressed to them
- RESPOND to professional networking opportunities
- RESPOND to industry-relevant discussions
- IGNORE messages that are irrelevant to their professional focus
- IGNORE spam or promotional content
- STOP if the conversation is concluded
- STOP if asked to stop

Recent interactions:
{{recentInteractions}}

Current Message:
{{currentMessage}}

Conversation History:
{{conversationHistory}}

# INSTRUCTIONS: Respond with [RESPOND] if {{agentName}} should respond, [IGNORE] if {{agentName}} should not respond, or [STOP] if {{agentName}} should end the conversation.` + eliza_1.shouldRespondFooter;
class LinkedInInteractionClient {
    constructor(client, runtime) {
        this.client = client;
        this.runtime = runtime;
    }
    async start() {
        const handleLinkedInInteractionsLoop = () => {
            this.handleLinkedInInteractions();
            setTimeout(handleLinkedInInteractionsLoop, (Math.floor(Math.random() * (15 - 5 + 1)) + 5) * 60 * 1000);
        };
        handleLinkedInInteractionsLoop();
    }
    async handleLinkedInInteractions() {
        eliza_1.elizaLogger.log('Checking LinkedIn interactions');
        try {
            // Check messages
            const messages = await this.client.linkedInClient.getMessages();
            for (const message of messages) {
                await this.handleMessage(message);
            }
            // Check post comments
            const posts = await this.client.linkedInClient.getFeedPosts();
            for (const post of posts) {
                if (post.authorId === this.client.profile.id) {
                    const comments = await this.client.linkedInClient.getPostComments(post.id);
                    for (const comment of comments) {
                        await this.handleComment(comment, post);
                    }
                }
            }
        }
        catch (error) {
            eliza_1.elizaLogger.error('Error handling LinkedIn interactions:', error);
        }
    }
    async handleMessage(message) {
        if (message.senderId === this.client.profile.id) {
            return;
        }
        const roomId = (0, eliza_1.stringToUuid)(`linkedin-conversation-${message.conversationId}`);
        const state = await this.runtime.composeState({
            userId: (0, eliza_1.stringToUuid)(message.senderId),
            roomId,
            agentId: this.runtime.agentId,
            content: {
                text: message.text,
                action: ''
            }
        }, {
            currentMessage: message.text,
            conversationHistory: await this.getConversationHistory(message.conversationId)
        });
        const shouldRespondContext = (0, eliza_1.composeContext)({
            state,
            template: this.runtime.character.templates?.linkedInShouldRespondTemplate || linkedInShouldRespondTemplate
        });
        const shouldRespond = await (0, eliza_1.generateShouldRespond)({
            runtime: this.runtime,
            context: shouldRespondContext,
            modelClass: eliza_1.ModelClass.MEDIUM
        });
        if (shouldRespond !== 'RESPOND') {
            eliza_1.elizaLogger.log('Not responding to message');
            return;
        }
        const responseContext = (0, eliza_1.composeContext)({
            state,
            template: this.runtime.character.templates?.linkedInMessageTemplate || linkedInMessageTemplate
        });
        const response = await (0, eliza_1.generateMessageResponse)({
            runtime: this.runtime,
            context: responseContext,
            modelClass: eliza_1.ModelClass.MEDIUM
        });
        if (response.text) {
            try {
                await this.client.linkedInClient.sendMessage(message.conversationId, response.text);
                await this.runtime.messageManager.createMemory({
                    id: (0, eliza_1.stringToUuid)(`${Date.now()}-${this.runtime.agentId}`),
                    userId: this.runtime.agentId,
                    content: {
                        text: response.text,
                        source: 'linkedin',
                        action: response.action
                    },
                    agentId: this.runtime.agentId,
                    roomId,
                    createdAt: Date.now()
                });
            }
            catch (error) {
                eliza_1.elizaLogger.error('Error sending LinkedIn message:', error);
            }
        }
    }
    async handleComment(comment, post) {
        if (comment.authorId === this.client.profile.id) {
            return;
        }
        const roomId = (0, eliza_1.stringToUuid)(`linkedin-post-${post.id}`);
        const state = await this.runtime.composeState({
            userId: (0, eliza_1.stringToUuid)(comment.authorId),
            roomId,
            agentId: this.runtime.agentId,
            content: {
                text: comment.text,
                action: ''
            }
        }, {
            currentMessage: comment.text,
            conversationHistory: await this.getPostCommentHistory(post.id)
        });
        const shouldRespondContext = (0, eliza_1.composeContext)({
            state,
            template: this.runtime.character.templates?.linkedInShouldRespondTemplate || linkedInShouldRespondTemplate
        });
        const shouldRespond = await (0, eliza_1.generateShouldRespond)({
            runtime: this.runtime,
            context: shouldRespondContext,
            modelClass: eliza_1.ModelClass.MEDIUM
        });
        if (shouldRespond !== 'RESPOND') {
            eliza_1.elizaLogger.log('Not responding to comment');
            return;
        }
        const responseContext = (0, eliza_1.composeContext)({
            state,
            template: this.runtime.character.templates?.linkedInMessageTemplate || linkedInMessageTemplate
        });
        const response = await (0, eliza_1.generateMessageResponse)({
            runtime: this.runtime,
            context: responseContext,
            modelClass: eliza_1.ModelClass.MEDIUM
        });
        if (response.text) {
            try {
                await this.client.linkedInClient.replyToComment(post.id, comment.id, response.text);
                await this.runtime.messageManager.createMemory({
                    id: (0, eliza_1.stringToUuid)(`${Date.now()}-${this.runtime.agentId}`),
                    userId: this.runtime.agentId,
                    content: {
                        text: response.text,
                        source: 'linkedin',
                        action: response.action
                    },
                    agentId: this.runtime.agentId,
                    roomId,
                    createdAt: Date.now()
                });
            }
            catch (error) {
                eliza_1.elizaLogger.error('Error replying to LinkedIn comment:', error);
            }
        }
    }
    async getConversationHistory(conversationId) {
        const messages = await this.client.linkedInClient.getConversationMessages(conversationId);
        return messages.map((msg) => `${msg.senderName} (${new Date(msg.timestamp).toLocaleString()}): ${msg.text}`).join('\n\n');
    }
    async getPostCommentHistory(postId) {
        const comments = await this.client.linkedInClient.getPostComments(postId);
        return comments.map((comment) => `${comment.authorName} (${new Date(comment.timestamp).toLocaleString()}): ${comment.text}`).join('\n\n');
    }
}
exports.LinkedInInteractionClient = LinkedInInteractionClient;
