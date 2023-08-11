/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const OcrcustomDocumentParsingAsyncCustomDocumentParsingAsyncDataClass: core.serialization.ObjectSchema<serializers.OcrcustomDocumentParsingAsyncCustomDocumentParsingAsyncDataClass.Raw, EdenAi.OcrcustomDocumentParsingAsyncCustomDocumentParsingAsyncDataClass>;
export declare namespace OcrcustomDocumentParsingAsyncCustomDocumentParsingAsyncDataClass {
    interface Raw {
        items?: serializers.CustomDocumentParsingAsyncItem.Raw[] | null;
        original_response?: unknown | null;
        id: string;
        final_status: serializers.FinalStatusEnum.Raw;
        error?: Record<string, unknown> | null;
    }
}
