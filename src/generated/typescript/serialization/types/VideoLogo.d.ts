/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const VideoLogo: core.serialization.ObjectSchema<serializers.VideoLogo.Raw, EdenAi.VideoLogo>;
export declare namespace VideoLogo {
    interface Raw {
        timestamp: number;
        bounding_box: serializers.VideoLogoBoundingBox.Raw;
        confidence: number;
    }
}
