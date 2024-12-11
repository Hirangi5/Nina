import { ClientBase } from './base';
import { LinkedInPostClient } from './post';
import { LinkedInInteractionClient } from './interactions';
declare class LinkedInManager {
    client: ClientBase;
    post: LinkedInPostClient;
    interaction: LinkedInInteractionClient;
    constructor(runtime: any);
}
export declare const LinkedInClientInterface: {
    start(runtime: any): Promise<LinkedInManager>;
    stop(runtime: any): Promise<void>;
};
export default LinkedInClientInterface;
