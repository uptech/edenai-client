/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const EmbeddingDataClass: core.serialization.ObjectSchema<serializers.EmbeddingDataClass.Raw, EdenAi.EmbeddingDataClass>;
export declare namespace EmbeddingDataClass {
    interface Raw {
        embedding: number[];
    }
}
