/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextsyntaxAnalysisSyntaxAnalysisDataClass94356169771216: core.serialization.ObjectSchema<serializers.PydanticMainTextsyntaxAnalysisSyntaxAnalysisDataClass94356169771216.Raw, EdenAi.PydanticMainTextsyntaxAnalysisSyntaxAnalysisDataClass94356169771216>;
export declare namespace PydanticMainTextsyntaxAnalysisSyntaxAnalysisDataClass94356169771216 {
    interface Raw {
        items?: serializers.InfosSyntaxAnalysisDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
