/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImageexplicitContentExplicitContentDataClass94356166808128: core.serialization.ObjectSchema<serializers.PydanticMainImageexplicitContentExplicitContentDataClass94356166808128.Raw, EdenAi.PydanticMainImageexplicitContentExplicitContentDataClass94356166808128>;
export declare namespace PydanticMainImageexplicitContentExplicitContentDataClass94356166808128 {
    interface Raw {
        nsfw_likelihood: number;
        items?: serializers.ExplicitItem.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
