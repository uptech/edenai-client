/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "..";
export interface InfosInvoiceParserDataClass {
    customerInformation?: EdenAi.CustomerInformationInvoice;
    merchantInformation?: EdenAi.MerchantInformationInvoice;
    invoiceNumber?: string;
    invoiceTotal?: number;
    invoiceSubtotal?: number;
    gratuity?: number;
    amountDue?: number;
    previousUnpaidBalance?: number;
    discount?: number;
    taxes?: EdenAi.TaxesInvoice[];
    serviceCharge?: number;
    paymentTerm?: string;
    purchaseOrder?: string;
    date?: string;
    dueDate?: string;
    serviceDate?: string;
    serviceDueDate?: string;
    poNumber?: string;
    locale?: EdenAi.LocaleInvoice;
    bankInformations?: EdenAi.BankInvoice;
    itemLines?: EdenAi.ItemLinesInvoice[];
}
