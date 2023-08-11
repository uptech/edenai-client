/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const AsyncvideoexplicitContentDetectionAsyncResponseModel: core.serialization.ObjectSchema<serializers.AsyncvideoexplicitContentDetectionAsyncResponseModel.Raw, EdenAi.AsyncvideoexplicitContentDetectionAsyncResponseModel>;
export declare namespace AsyncvideoexplicitContentDetectionAsyncResponseModel {
    interface Raw {
        results: serializers.VideoexplicitContentDetectionAsyncModel.Raw;
        error: string;
        public_id: string;
        status: string;
    }
}
