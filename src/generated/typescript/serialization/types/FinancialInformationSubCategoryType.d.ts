/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const FinancialInformationSubCategoryType: core.serialization.Schema<serializers.FinancialInformationSubCategoryType.Raw, EdenAi.FinancialInformationSubCategoryType>;
export declare namespace FinancialInformationSubCategoryType {
    type Raw = "CreditCard" | "CardExpiry" | "BankAccountNumber" | "BankRoutingNumber" | "SwiftCode" | "TaxIdentificationNumber";
}
