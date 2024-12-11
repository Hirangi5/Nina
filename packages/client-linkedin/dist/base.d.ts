import { EventEmitter } from "events";
import { Client as LinkedInClient } from "linkedin-api";
declare class RequestQueue {
    private queue;
    private processing;
    add<T>(request: () => Promise<T>): Promise<T>;
    private processQueue;
    private exponentialBackoff;
    private randomDelay;
}
export declare class ClientBase extends EventEmitter {
    private static _linkedInClient;
    protected linkedInClient: LinkedInClient;
    protected runtime: any;
    protected profile: any;
    protected requestQueue: RequestQueue;
    constructor(runtime: any);
    init(): Promise<void>;
    fetchProfile(): Promise<any>;
    loadInitialState(): Promise<void>;
    populateConnections(): Promise<void>;
    populateRecentActivity(): Promise<void>;
    private saveActivity;
    private getCachedProfile;
    private cacheProfile;
}
export {};
