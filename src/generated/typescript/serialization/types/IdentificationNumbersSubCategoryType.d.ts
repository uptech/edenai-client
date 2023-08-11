/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const IdentificationNumbersSubCategoryType: core.serialization.Schema<serializers.IdentificationNumbersSubCategoryType.Raw, EdenAi.IdentificationNumbersSubCategoryType>;
export declare namespace IdentificationNumbersSubCategoryType {
    type Raw = "SocialSecurityNumber" | "NationalIdentificationNumber" | "NationalHealthService" | "ResidentRegistrationNumber" | "DriverLicenseNumber" | "PassportNumber";
}
