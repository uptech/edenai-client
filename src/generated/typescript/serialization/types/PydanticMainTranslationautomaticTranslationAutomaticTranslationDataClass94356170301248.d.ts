/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTranslationautomaticTranslationAutomaticTranslationDataClass94356170301248: core.serialization.ObjectSchema<serializers.PydanticMainTranslationautomaticTranslationAutomaticTranslationDataClass94356170301248.Raw, EdenAi.PydanticMainTranslationautomaticTranslationAutomaticTranslationDataClass94356170301248>;
export declare namespace PydanticMainTranslationautomaticTranslationAutomaticTranslationDataClass94356170301248 {
    interface Raw {
        text: string;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
