/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as EdenAi from "../../../../../api";
import * as core from "../../../../../core";
export declare const TextcustomClassificationCustomClassificationRequest: core.serialization.Schema<serializers.TextcustomClassificationCustomClassificationRequest.Raw, EdenAi.TextcustomClassificationCustomClassificationRequest>;
export declare namespace TextcustomClassificationCustomClassificationRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        response_as_dict?: boolean | null;
        attributes_as_list?: boolean | null;
        show_original_response?: boolean | null;
        texts: string[];
        labels: string[];
        examples: string[][];
    }
}
