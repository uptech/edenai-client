/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164873104: core.serialization.ObjectSchema<serializers.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164873104.Raw, EdenAi.PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164873104>;
export declare namespace PydanticMainTextquestionAnswerQuestionAnswerDataClass94356164873104 {
    interface Raw {
        answers?: string[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
