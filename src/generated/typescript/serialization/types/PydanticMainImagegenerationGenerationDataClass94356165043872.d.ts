/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImagegenerationGenerationDataClass94356165043872: core.serialization.ObjectSchema<serializers.PydanticMainImagegenerationGenerationDataClass94356165043872.Raw, EdenAi.PydanticMainImagegenerationGenerationDataClass94356165043872>;
export declare namespace PydanticMainImagegenerationGenerationDataClass94356165043872 {
    interface Raw {
        items?: serializers.GeneratedImageDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
