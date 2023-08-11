/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ItemCustomClassificationDataClass: core.serialization.ObjectSchema<serializers.ItemCustomClassificationDataClass.Raw, EdenAi.ItemCustomClassificationDataClass>;
export declare namespace ItemCustomClassificationDataClass {
    interface Raw {
        input: string;
        label: string;
        confidence: number;
    }
}
