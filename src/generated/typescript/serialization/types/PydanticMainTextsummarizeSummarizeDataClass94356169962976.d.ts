/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextsummarizeSummarizeDataClass94356169962976: core.serialization.ObjectSchema<serializers.PydanticMainTextsummarizeSummarizeDataClass94356169962976.Raw, EdenAi.PydanticMainTextsummarizeSummarizeDataClass94356169962976>;
export declare namespace PydanticMainTextsummarizeSummarizeDataClass94356169962976 {
    interface Raw {
        result: string;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
