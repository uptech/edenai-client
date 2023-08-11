/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PersonalInformationSubCategoryType: core.serialization.Schema<serializers.PersonalInformationSubCategoryType.Raw, EdenAi.PersonalInformationSubCategoryType>;
export declare namespace PersonalInformationSubCategoryType {
    type Raw = "Name" | "Age" | "Email" | "Phone" | "PersonType";
}
