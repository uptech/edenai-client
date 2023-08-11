/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface VideoExplicitContentDetectionAsyncCreateRequest {
    /** It can be one (ex: **'amazon'** or **'google'**) or multiple provider(s) (ex: **'amazon,microsoft,google'**)             that the data will be redirected to in order to get the processed results. <span style="white-space: nowrap">`non-empty`</span> */
    providers: string;
    /**
     * Providers in this list will be used as fallback if the call to provider in `providers` parameter fails.
     *     To use this feature, you must input **only one** provider in the `providers` parameter. but you can put up to 5 fallbacks.
     *
     * They will be tried in the same order they are input, and it will stop to the first provider who doesn't fail.
     *
     *
     * *Doesn't work with async subfeatures.*
     *      <span style="white-space: nowrap">`non-empty`</span>
     */
    fallbackProviders: string;
    /**
     * Optional : Shows the original response of the provider.<br>
     *         When set to **true**, a new attribute *original_response* will appear in the response object.
     */
    showOriginalResponse: boolean;
    /** Webhook receiver should be a valid https URL (ex : https://your.listner.com/endpoint).             After the processing is done, the webhook endpoint will receive a POST request with the result. <span style="white-space: nowrap">`non-empty`</span> */
    webhookReceiver: string;
    /** Json data that contains of additional parameters that will be sent back to the webhook receiver             (ex: api key for security or client's data ID to link the result internally).             Will only be used when webhook_receiver is set. */
    usersWebhookParameters: Record<string, unknown>;
    /** File **URL** to analyse to be used with with *content-type*: **application/json**. */
    fileUrl?: string;
}
