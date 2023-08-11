/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as EdenAi from "../../../../../api";
import * as core from "../../../../../core";
export declare const TextchatChatRequest: core.serialization.Schema<serializers.TextchatChatRequest.Raw, EdenAi.TextchatChatRequest>;
export declare namespace TextchatChatRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        response_as_dict?: boolean | null;
        attributes_as_list?: boolean | null;
        show_original_response?: boolean | null;
        settings?: Record<string, string | null | undefined> | null;
        text?: string | null;
        chatbot_global_action?: string | null;
        previous_history?: Record<string, unknown>[] | null;
        temperature?: number | null;
        max_tokens?: number | null;
    }
}
