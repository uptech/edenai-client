/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTexttopicExtractionTopicExtractionDataClass94356169954064: core.serialization.ObjectSchema<serializers.PydanticMainTexttopicExtractionTopicExtractionDataClass94356169954064.Raw, EdenAi.PydanticMainTexttopicExtractionTopicExtractionDataClass94356169954064>;
export declare namespace PydanticMainTexttopicExtractionTopicExtractionDataClass94356169954064 {
    interface Raw {
        items?: serializers.ExtractedTopic.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
