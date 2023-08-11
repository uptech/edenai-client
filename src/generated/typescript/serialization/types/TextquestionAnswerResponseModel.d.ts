/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextquestionAnswerResponseModel: core.serialization.ObjectSchema<serializers.TextquestionAnswerResponseModel.Raw, EdenAi.TextquestionAnswerResponseModel>;
export declare namespace TextquestionAnswerResponseModel {
    interface Raw {
        tenstorrent?: serializers.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356169943264.Raw | null;
        openai?: serializers.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164871216.Raw | null;
        huggingface?: serializers.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164872160.Raw | null;
        "eden-ai"?: serializers.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164873104.Raw | null;
    }
}
