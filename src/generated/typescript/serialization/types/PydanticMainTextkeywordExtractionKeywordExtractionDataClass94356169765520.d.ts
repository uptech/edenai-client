/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextkeywordExtractionKeywordExtractionDataClass94356169765520: core.serialization.ObjectSchema<serializers.PydanticMainTextkeywordExtractionKeywordExtractionDataClass94356169765520.Raw, EdenAi.PydanticMainTextkeywordExtractionKeywordExtractionDataClass94356169765520>;
export declare namespace PydanticMainTextkeywordExtractionKeywordExtractionDataClass94356169765520 {
    interface Raw {
        items?: serializers.InfosKeywordExtractionDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
