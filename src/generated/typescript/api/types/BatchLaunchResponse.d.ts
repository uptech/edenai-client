/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "..";
export interface BatchLaunchResponse {
    /** Job ID/name */
    jobId: string;
    /** Number of successfully launched requests */
    nbLaunched: number;
    /** Number of failed_requests */
    nbFailed: number;
    /** Total number of requests sent */
    total: number;
    /** if any requests failed, they will be shown in this list */
    failedRequests: EdenAi.BatchLaunchFailedRequest[];
}
