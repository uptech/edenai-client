/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextsentimentAnalysisSentimentAnalysisDataClass94356169721344: core.serialization.ObjectSchema<serializers.PydanticMainTextsentimentAnalysisSentimentAnalysisDataClass94356169721344.Raw, EdenAi.PydanticMainTextsentimentAnalysisSentimentAnalysisDataClass94356169721344>;
export declare namespace PydanticMainTextsentimentAnalysisSentimentAnalysisDataClass94356169721344 {
    interface Raw {
        general_sentiment: serializers.GeneralSentimentEnum.Raw;
        general_sentiment_rate: number;
        items?: serializers.SegmentSentimentAnalysisDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
