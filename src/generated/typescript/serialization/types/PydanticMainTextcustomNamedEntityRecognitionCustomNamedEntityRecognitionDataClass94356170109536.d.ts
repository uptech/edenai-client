/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextcustomNamedEntityRecognitionCustomNamedEntityRecognitionDataClass94356170109536: core.serialization.ObjectSchema<serializers.PydanticMainTextcustomNamedEntityRecognitionCustomNamedEntityRecognitionDataClass94356170109536.Raw, EdenAi.PydanticMainTextcustomNamedEntityRecognitionCustomNamedEntityRecognitionDataClass94356170109536>;
export declare namespace PydanticMainTextcustomNamedEntityRecognitionCustomNamedEntityRecognitionDataClass94356170109536 {
    interface Raw {
        items?: serializers.InfosCustomNamedEntityRecognitionDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
