/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextanonymizationAnonymizationDataClass94356170034512: core.serialization.ObjectSchema<serializers.PydanticMainTextanonymizationAnonymizationDataClass94356170034512.Raw, EdenAi.PydanticMainTextanonymizationAnonymizationDataClass94356170034512>;
export declare namespace PydanticMainTextanonymizationAnonymizationDataClass94356170034512 {
    interface Raw {
        result: string;
        entities?: serializers.AnonymizationEntity.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
