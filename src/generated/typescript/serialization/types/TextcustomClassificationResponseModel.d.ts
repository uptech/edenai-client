/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextcustomClassificationResponseModel: core.serialization.ObjectSchema<serializers.TextcustomClassificationResponseModel.Raw, EdenAi.TextcustomClassificationResponseModel>;
export declare namespace TextcustomClassificationResponseModel {
    interface Raw {
        openai?: serializers.PydanticMainTextcustomClassificationCustomClassificationDataClass94356169830288.Raw | null;
        cohere?: serializers.PydanticMainTextcustomClassificationCustomClassificationDataClass94356169957136.Raw | null;
    }
}
