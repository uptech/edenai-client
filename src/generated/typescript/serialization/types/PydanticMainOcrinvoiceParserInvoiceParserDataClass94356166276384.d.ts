/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainOcrinvoiceParserInvoiceParserDataClass94356166276384: core.serialization.ObjectSchema<serializers.PydanticMainOcrinvoiceParserInvoiceParserDataClass94356166276384.Raw, EdenAi.PydanticMainOcrinvoiceParserInvoiceParserDataClass94356166276384>;
export declare namespace PydanticMainOcrinvoiceParserInvoiceParserDataClass94356166276384 {
    interface Raw {
        extracted_data?: serializers.InfosInvoiceParserDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
