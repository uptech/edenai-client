/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const FaceMakeup: core.serialization.ObjectSchema<serializers.FaceMakeup.Raw, EdenAi.FaceMakeup>;
export declare namespace FaceMakeup {
    interface Raw {
        eye_make: boolean;
        lip_make: boolean;
    }
}
