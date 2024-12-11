import { z } from 'zod';
export declare const linkedInEnvSchema: z.ZodObject<{
    LINKEDIN_USERNAME: z.ZodString;
    LINKEDIN_PASSWORD: z.ZodString;
    LINKEDIN_DRY_RUN: z.ZodEffects<z.ZodString, boolean, string>;
    POST_INTERVAL_MIN: z.ZodOptional<z.ZodString>;
    POST_INTERVAL_MAX: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    LINKEDIN_USERNAME: string;
    LINKEDIN_PASSWORD: string;
    LINKEDIN_DRY_RUN: boolean;
    POST_INTERVAL_MIN?: string | undefined;
    POST_INTERVAL_MAX?: string | undefined;
}, {
    LINKEDIN_USERNAME: string;
    LINKEDIN_PASSWORD: string;
    LINKEDIN_DRY_RUN: string;
    POST_INTERVAL_MIN?: string | undefined;
    POST_INTERVAL_MAX?: string | undefined;
}>;
export declare function validateLinkedInConfig(runtime: any): Promise<{
    LINKEDIN_USERNAME: string;
    LINKEDIN_PASSWORD: string;
    LINKEDIN_DRY_RUN: boolean;
    POST_INTERVAL_MIN?: string | undefined;
    POST_INTERVAL_MAX?: string | undefined;
}>;
