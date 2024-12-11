export declare class LinkedInInteractionClient {
    private client;
    private runtime;
    constructor(client: any, runtime: any);
    start(): Promise<void>;
    handleLinkedInInteractions(): Promise<void>;
    private handleMessage;
    private handleComment;
    private getConversationHistory;
    private getPostCommentHistory;
}
