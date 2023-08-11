/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextentitySentimentResponseModel: core.serialization.ObjectSchema<serializers.TextentitySentimentResponseModel.Raw, EdenAi.TextentitySentimentResponseModel>;
export declare namespace TextentitySentimentResponseModel {
    interface Raw {
        google?: serializers.PydanticMainTextentitySentimentEntitySentimentDataClass94356170249424.Raw | null;
        amazon?: serializers.PydanticMainTextentitySentimentEntitySentimentDataClass94356170252160.Raw | null;
    }
}
