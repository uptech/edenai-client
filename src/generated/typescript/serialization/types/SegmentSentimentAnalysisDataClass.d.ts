/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const SegmentSentimentAnalysisDataClass: core.serialization.ObjectSchema<serializers.SegmentSentimentAnalysisDataClass.Raw, EdenAi.SegmentSentimentAnalysisDataClass>;
export declare namespace SegmentSentimentAnalysisDataClass {
    interface Raw {
        segment: string;
        sentiment: serializers.SentimentB6EEnum.Raw;
        sentiment_rate: number;
    }
}
