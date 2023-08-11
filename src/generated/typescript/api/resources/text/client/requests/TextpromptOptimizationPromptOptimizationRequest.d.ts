/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "../../../..";
export interface TextpromptOptimizationPromptOptimizationRequest {
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
    fallbackProviders?: string;
    /**
     * Optional : When set to **true** (default), the response is an object of responses with providers names as keys : <br>
     *                   ``` {'google' : { 'status': 'success', ... }, } ``` <br>
     *                 When set to **false** the response structure is a list of response objects : <br>
     *                    ``` [{'status': 'success', 'provider': 'google' ... }, ] ```. <br>
     *
     */
    responseAsDict?: boolean;
    /**
     * Optional : When set to **false** (default) the structure of the extracted items is list of objects having different attributes : <br>
     *      ```{'items': [{'attribute_1': 'x1','attribute_2': 'y2'}, ... ]}``` <br>
     *      When it is set to **true**, the response contains an object with each attribute as a list : <br>
     *      ```{ 'attribute_1': ['x1','x2', ...], 'attribute_2': [y1, y2, ...]}```
     */
    attributesAsList?: boolean;
    /**
     * Optional : Shows the original response of the provider.<br>
     *         When set to **true**, a new attribute *original_response* will appear in the response object.
     */
    showOriginalResponse?: boolean;
    /** Description of the desired prompt. <span style="white-space: nowrap">`non-empty`</span> */
    text: string;
    /**
     * Select the provider for the prompt optimization
     *
     * * `google` - google
     * * `openai` - openai
     * * `cohere` - cohere
     */
    targetProvider: EdenAi.TargetProviderEnum;
}
