/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169866752: core.serialization.ObjectSchema<serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169866752.Raw, EdenAi.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169866752>;
export declare namespace PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169866752 {
    interface Raw {
        items?: serializers.InfosNamedEntityRecognitionDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
