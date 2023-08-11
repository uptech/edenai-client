/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PaginatedBatchResponse: core.serialization.ObjectSchema<serializers.PaginatedBatchResponse.Raw, EdenAi.PaginatedBatchResponse>;
export declare namespace PaginatedBatchResponse {
    interface Raw {
        total: number;
        current_page: number;
        last_page: number;
        per_page: number;
        From: number;
        to: number;
        prev_page_url?: string | null;
        next_page_url?: string | null;
        requests: serializers.BatchResponseRequest.Raw[];
        status?: serializers.StatusE80Enum.Raw | null;
        created: string;
        updated: string;
    }
}
