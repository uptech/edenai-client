/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as EdenAi from "../../../../../api";
import * as core from "../../../../../core";
export declare const ImagegenerationGenerationRequest: core.serialization.Schema<serializers.ImagegenerationGenerationRequest.Raw, EdenAi.ImagegenerationGenerationRequest>;
export declare namespace ImagegenerationGenerationRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        response_as_dict?: boolean | null;
        attributes_as_list?: boolean | null;
        show_original_response?: boolean | null;
        text: string;
        resolution: serializers.ResolutionEnum.Raw;
        num_images?: number | null;
    }
}
