/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImageexplicitContentExplicitContentDataClass94356164718736: core.serialization.ObjectSchema<serializers.PydanticMainImageexplicitContentExplicitContentDataClass94356164718736.Raw, EdenAi.PydanticMainImageexplicitContentExplicitContentDataClass94356164718736>;
export declare namespace PydanticMainImageexplicitContentExplicitContentDataClass94356164718736 {
    interface Raw {
        nsfw_likelihood: number;
        items?: serializers.ExplicitItem.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
