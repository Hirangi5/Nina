export declare class LinkedInPostClient {
    private client;
    private runtime;
    constructor(client: any, runtime: any);
    start(postImmediately?: boolean): Promise<void>;
    generateNewPost(): Promise<void>;
}
