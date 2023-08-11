/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ObjectTrack: core.serialization.ObjectSchema<serializers.ObjectTrack.Raw, EdenAi.ObjectTrack>;
export declare namespace ObjectTrack {
    interface Raw {
        description: string;
        confidence: number;
        frames?: serializers.ObjectFrame.Raw[] | null;
    }
}
