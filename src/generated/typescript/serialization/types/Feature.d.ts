/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const Feature: core.serialization.ObjectSchema<serializers.Feature.Raw, EdenAi.Feature>;
export declare namespace Feature {
    interface Raw {
        name: string;
        fullname?: string | null;
        description?: string | null;
    }
}
