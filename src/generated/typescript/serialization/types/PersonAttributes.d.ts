/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PersonAttributes: core.serialization.ObjectSchema<serializers.PersonAttributes.Raw, EdenAi.PersonAttributes>;
export declare namespace PersonAttributes {
    interface Raw {
        upper_cloths?: serializers.UpperCloth.Raw[] | null;
        lower_cloths?: serializers.LowerCloth.Raw[] | null;
    }
}
