import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
  spec: Oas;
  core: APICore;
  constructor();
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions): void;
  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]): this;
  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables?: {}): void;
  /**
   * Return paginated response of requests with their status and their
   * responses if the request succeeded or errror if failed
   *
   * @summary Get Batch Job Result
   * @throws FetchError<400, types.BatchRetrieveResponse400>
   * @throws FetchError<403, types.BatchRetrieveResponse403>
   * @throws FetchError<404, types.BatchRetrieveResponse404>
   * @throws FetchError<500, types.BatchRetrieveResponse500>
   */
  batch_retrieve(
    metadata: types.BatchRetrieveMetadataParam
  ): Promise<FetchResponse<200, types.BatchRetrieveResponse200>>;
  /**
   * Launch a async Batch job, given a job name that will be used as its id.
   *
   * Each request should have the same parameters as you would normally pass to a feature.
   *
   *
   * You can also pass an optional paramater `name` to help better identify each requests you
   * send.
   *
   *
   * Example with `text`/`sentiment_analysis`:
   *
   * ```json
   * "requests": [
   *     {
   *         "text": "It's -25 outside and I am so hot.",
   *         "language": "en",
   *         "providers": "google,amazon"
   *     },
   *     {
   *         "name": "mixed",
   *         "text": "Overall I am satisfied with my experience at Amazon, but two areas of
   * major improvement needed.",
   *         "language": "en",
   *         "providers": "google"
   *     },
   *     ...
   * ]
   * ```
   *
   *
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Features</strong></summary>
   *
   *
   *
   * |Feature Name|Subfeature Name|
   * |------------|---------------|
   * |`text`|`generation`|
   * |`text`|`named_entity_recognition`|
   * |`text`|`moderation`|
   * |`text`|`embeddings`|
   * |`text`|`summarize`|
   * |`text`|`chat`|
   * |`text`|`sentiment_analysis`|
   * |`text`|`topic_extraction`|
   * |`image`|`object_detection`|
   * |`text`|`anonymization`|
   * |`text`|`custom_classification`|
   * |`text`|`spell_check`|
   * |`translation`|`automatic_translation`|
   * |`image`|`explicit_content`|
   * |`translation`|`language_detection`|
   * |`text`|`custom_named_entity_recognition`|
   * |`text`|`keyword_extraction`|
   * |`text`|`question_answer`|
   * |`audio`|`text_to_speech`|
   * |`text`|`search`|
   * |`translation`|`document_translation`|
   * |`text`|`code_generation`|
   * |`text`|`syntax_analysis`|
   * |`ocr`|`invoice_parser`|
   * |`ocr`|`resume_parser`|
   * |`ocr`|`receipt_parser`|
   * |`ocr`|`identity_parser`|
   * |`image`|`face_detection`|
   * |`image`|`landmark_detection`|
   * |`image`|`logo_detection`|
   * |`image`|`anonymization`|
   * |`image`|`generation`|
   * |`video`|`text_detection_async`|
   * |`audio`|`speech_to_text_async`|
   *
   * </details>
   *
   *
   *
   * @summary Launch Batch Job
   * @throws FetchError<400, types.BatchCreateResponse400>
   * @throws FetchError<403, types.BatchCreateResponse403>
   * @throws FetchError<404, types.BatchCreateResponse404>
   * @throws FetchError<500, types.BatchCreateResponse500>
   */
  batch_create(
    metadata: types.BatchCreateMetadataParam
  ): Promise<FetchResponse<200, types.BatchCreateResponse200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Speech to Text List Jobs
   */
  audio_speech_to_text_async_retrieve(): Promise<
    FetchResponse<200, types.AudioSpeechToTextAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|0.024 (per 60 seconde)|15 seconde
   * |**google**|`v1p1beta1`|0.024 (per 60 seconde)|1 seconde
   * |**ibm**|`v1`|0.02 (per 60 seconde)|1 seconde
   * |**microsoft**|`v1.0`|0.0168 (per 60 seconde)|1 seconde
   * |**revai**|`v1`|0.02 (per 60 seconde)|15 seconde
   * |**symbl**|`v1`|0.027 (per 60 seconde)|60 seconde
   * |**voci**|`v1`|0.0162 (per 60 seconde)|1 seconde
   * |**voxist**|`v1`|0.0042 (per 15 seconde)|1 seconde
   * |**neuralspace**|`v1`|0.024 (per 60 seconde)|60 seconde
   * |**oneai**|`v0`|0.0067 (per 60 seconde)|1 seconde
   * |**assembly**|`v2`|0.011 (per 60 seconde)|1 seconde
   * |**deepgram - base**|`v1`|0.0169 (per 60 seconde)|1 seconde
   * |**deepgram - enhanced**|`v1`|0.0189 (per 60 seconde)|1 seconde
   * |**deepgram**|`v1`|0.0169 (per 60 seconde)|1 seconde
   * |**openai**|`boto3 (v1.15.18)`|0.006 (per 60 seconde)|1 seconde
   * |**speechmatics - enhanced**|`v2`|0.0316 (per 60 seconde)|1 seconde
   * |**speechmatics - standard**|`v2`|0.0208 (per 60 seconde)|1 seconde
   * |**speechmatics**|`v2`|0.0316 (per 60 seconde)|1 seconde
   * |**gladia**|`v1`|0.0102 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Armenian**|`hy`|
   * |**Assamese**|`as`|
   * |**Azerbaijani**|`az`|
   * |**Bashkir**|`ba`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Central Khmer**|`km`|
   * |**Chinese**|`zh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Esperanto**|`eo`|
   * |**Estonian**|`et`|
   * |**Faroese**|`fo`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hawaiian**|`haw`|
   * |**Hebrew**|`he`|
   * |**Hebrew**|`iw`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Indonesian**|`id`|
   * |**Interlingua (International Auxiliary Language Association)**|`ia`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Korean**|`ko`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lingala**|`ln`|
   * |**Lithuanian**|`lt`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Mandarin Chinese**|`cmn`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Norwegian Nynorsk**|`nn`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Sanskrit**|`sa`|
   * |**Serbian**|`sr`|
   * |**Shona**|`sn`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Tibetan**|`bo`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Wolof**|`wo`|
   * |**Wu Chinese**|`wuu`|
   * |**Yiddish**|`yi`|
   * |**Yoruba**|`yo`|
   * |**Yue Chinese**|`yue`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Afrikaans (South Africa)**|`af-ZA`|
   * |**Albanian (Albania)**|`sq-AL`|
   * |**Amharic (Ethiopia)**|`am-ET`|
   * |**Arabic (Algeria)**|`ar-DZ`|
   * |**Arabic (Bahrain)**|`ar-BH`|
   * |**Arabic (Egypt)**|`ar-EG`|
   * |**Arabic (Iraq)**|`ar-IQ`|
   * |**Arabic (Israel)**|`ar-IL`|
   * |**Arabic (Jordan)**|`ar-JO`|
   * |**Arabic (Kuwait)**|`ar-KW`|
   * |**Arabic (Lebanon)**|`ar-LB`|
   * |**Arabic (Libya)**|`ar-LY`|
   * |**Arabic (Mauritania)**|`ar-MR`|
   * |**Arabic (Montserrat)**|`ar-MS`|
   * |**Arabic (Morocco)**|`ar-MA`|
   * |**Arabic (Oman)**|`ar-OM`|
   * |**Arabic (Palestinian Territories)**|`ar-PS`|
   * |**Arabic (Qatar)**|`ar-QA`|
   * |**Arabic (Saudi Arabia)**|`ar-SA`|
   * |**Arabic (Syria)**|`ar-SY`|
   * |**Arabic (Tunisia)**|`ar-TN`|
   * |**Arabic (United Arab Emirates)**|`ar-AE`|
   * |**Arabic (Yemen)**|`ar-YE`|
   * |**Armenian (Armenia)**|`hy-AM`|
   * |**Assamese (India)**|`as-IN`|
   * |**Azerbaijani (Azerbaijan)**|`az-AZ`|
   * |**Bangla (Bangladesh)**|`bn-BD`|
   * |**Bangla (India)**|`bn-IN`|
   * |**Bashkir (Russia)**|`ba-RU`|
   * |**Basque (Spain)**|`eu-ES`|
   * |**Belarusian (Belarus)**|`be-BY`|
   * |**Bosnian (Bosnia & Herzegovina)**|`bs-BA`|
   * |**Breton (France)**|`br-FR`|
   * |**Bulgarian (Bulgaria)**|`bg-BG`|
   * |**Burmese (Myanmar (Burma))**|`my-MM`|
   * |**Cantonese (China)**|`yue-CN`|
   * |**Cantonese (Traditional, Hong Kong SAR China)**|`yue-Hant-HK`|
   * |**Catalan (Spain)**|`ca-ES`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Hong Kong SAR China)**|`zh-HK`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Croatian (Croatia)**|`hr-HR`|
   * |**Czech (Czechia)**|`cs-CZ`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Belgium)**|`nl-BE`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (Australia)**|`en-AU`|
   * |**English (Canada)**|`en-CA`|
   * |**English (Ghana)**|`en-GH`|
   * |**English (Hong Kong SAR China)**|`en-HK`|
   * |**English (India)**|`en-IN`|
   * |**English (Ireland)**|`en-IE`|
   * |**English (Kenya)**|`en-KE`|
   * |**English (New Zealand)**|`en-NZ`|
   * |**English (Nigeria)**|`en-NG`|
   * |**English (Pakistan)**|`en-PK`|
   * |**English (Philippines)**|`en-PH`|
   * |**English (Singapore)**|`en-SG`|
   * |**English (South Africa)**|`en-ZA`|
   * |**English (Tanzania)**|`en-TZ`|
   * |**English (United Kingdom)**|`en-GB`|
   * |**English (United Kingdom)**|`en-UK`|
   * |**English (United States)**|`en-US`|
   * |**Estonian (Estonia)**|`et-EE`|
   * |**Faroese (Faroe Islands)**|`fo-FO`|
   * |**Filipino (Philippines)**|`fil-PH`|
   * |**Filipino (Philippines)**|`tl-PH`|
   * |**Finnish (Finland)**|`fi-FI`|
   * |**French (Belgium)**|`fr-BE`|
   * |**French (Canada)**|`fr-CA`|
   * |**French (France)**|`fr-FR`|
   * |**French (Switzerland)**|`fr-CH`|
   * |**Galician (Spain)**|`gl-ES`|
   * |**Georgian (Georgia)**|`ka-GE`|
   * |**German (Austria)**|`de-AT`|
   * |**German (Germany)**|`de-DE`|
   * |**German (Switzerland)**|`de-CH`|
   * |**Greek (Greece)**|`el-GR`|
   * |**Gujarati (India)**|`gu-IN`|
   * |**Haitian Creole (Haiti)**|`ht-HT`|
   * |**Hausa (Nigeria)**|`ha-NG`|
   * |**Hawaiian (United States)**|`haw-US`|
   * |**Hebrew (Israel)**|`he-IL`|
   * |**Hebrew (Israel)**|`iw-IL`|
   * |**Hindi (India)**|`hi-IN`|
   * |**Hindi (Latin)**|`hi-Latn`|
   * |**Hungarian (Hungary)**|`hu-HU`|
   * |**Icelandic (Iceland)**|`is-IS`|
   * |**Indonesian (Indonesia)**|`id-ID`|
   * |**Irish (Ireland)**|`ga-IE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Italian (Switzerland)**|`it-CH`|
   * |**Japanese (Japan)**|`ja-JP`|
   * |**Javanese (Indonesia)**|`jv-ID`|
   * |**Kannada (India)**|`kn-IN`|
   * |**Kazakh (Kazakhstan)**|`kk-KZ`|
   * |**Khmer (Cambodia)**|`km-KH`|
   * |**Korean (South Korea)**|`ko-KR`|
   * |**Lao (Laos)**|`lo-LA`|
   * |**Latvian (Latvia)**|`lv-LV`|
   * |**Lingala (Congo - Kinshasa)**|`ln-CD`|
   * |**Lithuanian (Lithuania)**|`lt-LT`|
   * |**Luxembourgish (Luxembourg)**|`lb-LU`|
   * |**Macedonian (North Macedonia)**|`mk-MK`|
   * |**Malagasy (Madagascar)**|`mg-MG`|
   * |**Malay (Malaysia)**|`ms-MY`|
   * |**Malayalam (India)**|`ml-IN`|
   * |**Maltese (Malta)**|`mt-MT`|
   * |**Marathi (India)**|`mr-IN`|
   * |**Mongolian (Mongolia)**|`mn-MN`|
   * |**Māori (New Zealand)**|`mi-NZ`|
   * |**Nepali (Nepal)**|`ne-NP`|
   * |**Norwegian (Norway)**|`no-NO`|
   * |**Norwegian Bokmål (Norway)**|`nb-NO`|
   * |**Norwegian Nynorsk (Norway)**|`nn-NO`|
   * |**Occitan (France)**|`oc-FR`|
   * |**Pashto (Afghanistan)**|`ps-AF`|
   * |**Persian (Iran)**|`fa-IR`|
   * |**Polish (Poland)**|`pl-PL`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Punjabi (India)**|`pa-Guru-IN`|
   * |**Romanian (Romania)**|`ro-RO`|
   * |**Russian (Russia)**|`ru-RU`|
   * |**Sanskrit (India)**|`sa-IN`|
   * |**Serbian (Serbia)**|`sr-RS`|
   * |**Shona (Zimbabwe)**|`sn-ZW`|
   * |**Sindhi (Pakistan)**|`sd-PK`|
   * |**Sinhala (Sri Lanka)**|`si-LK`|
   * |**Slovak (Slovakia)**|`sk-SK`|
   * |**Slovenian (Slovenia)**|`sl-SI`|
   * |**Somali (Somalia)**|`so-SO`|
   * |**Spanish (Argentina)**|`es-AR`|
   * |**Spanish (Bolivia)**|`es-BO`|
   * |**Spanish (Chile)**|`es-CL`|
   * |**Spanish (Colombia)**|`es-CO`|
   * |**Spanish (Costa Rica)**|`es-CR`|
   * |**Spanish (Cuba)**|`es-CU`|
   * |**Spanish (Dominican Republic)**|`es-DO`|
   * |**Spanish (Ecuador)**|`es-EC`|
   * |**Spanish (El Salvador)**|`es-SV`|
   * |**Spanish (Equatorial Guinea)**|`es-GQ`|
   * |**Spanish (Guatemala)**|`es-GT`|
   * |**Spanish (Honduras)**|`es-HN`|
   * |**Spanish (Laos)**|`es-LA`|
   * |**Spanish (Latin America)**|`es-419`|
   * |**Spanish (Mexico)**|`es-MX`|
   * |**Spanish (Nicaragua)**|`es-NI`|
   * |**Spanish (Panama)**|`es-PA`|
   * |**Spanish (Paraguay)**|`es-PY`|
   * |**Spanish (Peru)**|`es-PE`|
   * |**Spanish (Puerto Rico)**|`es-PR`|
   * |**Spanish (Spain)**|`es-ES`|
   * |**Spanish (United States)**|`es-US`|
   * |**Spanish (Uruguay)**|`es-UY`|
   * |**Spanish (Venezuela)**|`es-VE`|
   * |**Sundanese (Indonesia)**|`su-ID`|
   * |**Swahili (Kenya)**|`sw-KE`|
   * |**Swahili (Tanzania)**|`sw-TZ`|
   * |**Swedish (Sweden)**|`sv-SE`|
   * |**Tajik (Tajikistan)**|`tg-TJ`|
   * |**Tamil (India)**|`ta-IN`|
   * |**Tamil (Malaysia)**|`ta-MY`|
   * |**Tamil (Singapore)**|`ta-SG`|
   * |**Tamil (Sri Lanka)**|`ta-LK`|
   * |**Tatar (Russia)**|`tt-RU`|
   * |**Telugu (India)**|`te-IN`|
   * |**Thai (Thailand)**|`th-TH`|
   * |**Tibetan (China)**|`bo-CN`|
   * |**Turkish (Turkey)**|`tr-TR`|
   * |**Turkmen (Turkmenistan)**|`tk-TM`|
   * |**Ukrainian (Ukraine)**|`uk-UA`|
   * |**Urdu (India)**|`ur-IN`|
   * |**Urdu (Pakistan)**|`ur-PK`|
   * |**Uzbek (Uzbekistan)**|`uz-UZ`|
   * |**Vietnamese (Vietnam)**|`vi-VN`|
   * |**Welsh (United Kingdom)**|`cy-GB`|
   * |**Wolof (Senegal)**|`wo-SN`|
   * |**Wu Chinese (China)**|`wuu-CN`|
   * |**Yoruba (Nigeria)**|`yo-NG`|
   * |**Zulu (South Africa)**|`zu-ZA`|
   *
   * </details>
   *
   * @summary Speech to Text Launch Job
   */
  audio_speech_to_text_async_create(
    body: types.AudioSpeechToTextAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.AudioSpeechToTextAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Speech to Text Get Job Results
   * @throws FetchError<400, types.AudioSpeechToTextAsyncRetrieve2Response400>
   * @throws FetchError<403, types.AudioSpeechToTextAsyncRetrieve2Response403>
   * @throws FetchError<404, types.AudioSpeechToTextAsyncRetrieve2Response404>
   * @throws FetchError<500, types.AudioSpeechToTextAsyncRetrieve2Response500>
   */
  audio_speech_to_text_async_retrieve_2(
    metadata: types.AudioSpeechToTextAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.AudioSpeechToTextAsyncRetrieve2Response200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|4.0 (per 1000000 char)|1 char
   * |**amazon - Neural**|`boto3 (v1.15.18)`|16.0 (per 1000000 char)|1 char
   * |**google**|`v1`|4.0 (per 1000000 char)|1 char
   * |**google - Standard**|`v1`|4.0 (per 1000000 char)|1 char
   * |**google - Neural**|`v1`|16.0 (per 1000000 char)|1 char
   * |**google - Wavenet**|`v1`|16.0 (per 1000000 char)|1 char
   * |**google - Studio**|`v1`|0.16 (per 1000 char)|1 char
   * |**ibm**|`v1`|20.0 (per 1000000 char)|1000 char
   * |**microsoft**|`v1.0`|16.0 (per 1000000 char)|1 char
   * |**lovoai**|`v1`|160.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Armenian**|`hy`|
   * |**Azerbaijani**|`az`|
   * |**Basque**|`eu`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Central Khmer**|`km`|
   * |**Chinese**|`zh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Indonesian**|`id`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Korean**|`ko`|
   * |**Lao**|`lo`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Macedonian**|`mk`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Mandarin Chinese**|`cmn`|
   * |**Marathi**|`mr`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Portuguese (Portugal)**|`pt_PT`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Serbian**|`sr`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Spanish**|`es`|
   * |**Standard Arabic**|`arb`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tamil**|`ta`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Turkish**|`tr`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Wu Chinese**|`wuu`|
   * |**Yue Chinese**|`yue`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans (South Africa)**|`af-ZA`|
   * |**Albanian (Albania)**|`sq-AL`|
   * |**Amharic (Ethiopia)**|`am-ET`|
   * |**Arabic (Algeria)**|`ar-DZ`|
   * |**Arabic (Bahrain)**|`ar-BH`|
   * |**Arabic (Egypt)**|`ar-EG`|
   * |**Arabic (Iraq)**|`ar-IQ`|
   * |**Arabic (Jordan)**|`ar-JO`|
   * |**Arabic (Kuwait)**|`ar-KW`|
   * |**Arabic (Lebanon)**|`ar-LB`|
   * |**Arabic (Libya)**|`ar-LY`|
   * |**Arabic (Morocco)**|`ar-MA`|
   * |**Arabic (Oman)**|`ar-OM`|
   * |**Arabic (Pseudo-Accents)**|`ar-XA`|
   * |**Arabic (Qatar)**|`ar-QA`|
   * |**Arabic (Saudi Arabia)**|`ar-SA`|
   * |**Arabic (Syria)**|`ar-SY`|
   * |**Arabic (Tunisia)**|`ar-TN`|
   * |**Arabic (United Arab Emirates)**|`ar-AE`|
   * |**Arabic (Yemen)**|`ar-YE`|
   * |**Armenian (Armenia)**|`hy-AM`|
   * |**Azerbaijani (Azerbaijan)**|`az-AZ`|
   * |**Bangla (Bangladesh)**|`bn-BD`|
   * |**Bangla (India)**|`bn-IN`|
   * |**Basque (Spain)**|`eu-ES`|
   * |**Bosnian (Bosnia & Herzegovina)**|`bs-BA`|
   * |**Bulgarian (Bulgaria)**|`bg-BG`|
   * |**Burmese (Myanmar (Burma))**|`my-MM`|
   * |**Cantonese (China)**|`yue-CN`|
   * |**Cantonese (Hong Kong SAR China)**|`yue-HK`|
   * |**Catalan (Spain)**|`ca-ES`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Hong Kong SAR China)**|`zh-HK`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Croatian (Croatia)**|`hr-HR`|
   * |**Czech (Czechia)**|`cs-CZ`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Belgium)**|`nl-BE`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (Australia)**|`en-AU`|
   * |**English (Canada)**|`en-CA`|
   * |**English (Hong Kong SAR China)**|`en-HK`|
   * |**English (India)**|`en-IN`|
   * |**English (Ireland)**|`en-IE`|
   * |**English (Kenya)**|`en-KE`|
   * |**English (New Zealand)**|`en-NZ`|
   * |**English (Nigeria)**|`en-NG`|
   * |**English (Philippines)**|`en-PH`|
   * |**English (Singapore)**|`en-SG`|
   * |**English (South Africa)**|`en-ZA`|
   * |**English (Tanzania)**|`en-TZ`|
   * |**English (United Kingdom)**|`en-GB`|
   * |**English (United States)**|`en-US`|
   * |**Estonian (Estonia)**|`et-EE`|
   * |**Filipino (Philippines)**|`fil-PH`|
   * |**Finnish (Finland)**|`fi-FI`|
   * |**French (Belgium)**|`fr-BE`|
   * |**French (Canada)**|`fr-CA`|
   * |**French (France)**|`fr-FR`|
   * |**French (Switzerland)**|`fr-CH`|
   * |**Galician (Spain)**|`gl-ES`|
   * |**Georgian (Georgia)**|`ka-GE`|
   * |**German (Austria)**|`de-AT`|
   * |**German (Germany)**|`de-DE`|
   * |**German (Switzerland)**|`de-CH`|
   * |**Greek (Greece)**|`el-GR`|
   * |**Gujarati (India)**|`gu-IN`|
   * |**Hebrew (Israel)**|`he-IL`|
   * |**Hindi (India)**|`hi-IN`|
   * |**Hungarian (Hungary)**|`hu-HU`|
   * |**Icelandic (Iceland)**|`is-IS`|
   * |**Indonesian (Indonesia)**|`id-ID`|
   * |**Irish (Ireland)**|`ga-IE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Japanese (Japan)**|`ja-JP`|
   * |**Javanese (Indonesia)**|`jv-ID`|
   * |**Kannada (India)**|`kn-IN`|
   * |**Kazakh (Kazakhstan)**|`kk-KZ`|
   * |**Khmer (Cambodia)**|`km-KH`|
   * |**Korean (South Korea)**|`ko-KR`|
   * |**Lao (Laos)**|`lo-LA`|
   * |**Latvian (Latvia)**|`lv-LV`|
   * |**Lithuanian (Lithuania)**|`lt-LT`|
   * |**Macedonian (North Macedonia)**|`mk-MK`|
   * |**Malay (Malaysia)**|`ms-MY`|
   * |**Malayalam (India)**|`ml-IN`|
   * |**Maltese (Malta)**|`mt-MT`|
   * |**Mandarin Chinese (China)**|`cmn-CN`|
   * |**Mandarin Chinese (Taiwan)**|`cmn-TW`|
   * |**Marathi (India)**|`mr-IN`|
   * |**Mongolian (Mongolia)**|`mn-MN`|
   * |**Nepali (Nepal)**|`ne-NP`|
   * |**Norwegian Bokmål (Norway)**|`nb-NO`|
   * |**Pashto (Afghanistan)**|`ps-AF`|
   * |**Persian (Iran)**|`fa-IR`|
   * |**Polish (Poland)**|`pl-PL`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Punjabi (India)**|`pa-IN`|
   * |**Romanian (Romania)**|`ro-RO`|
   * |**Russian (Russia)**|`ru-RU`|
   * |**Serbian (Serbia)**|`sr-RS`|
   * |**Sinhala (Sri Lanka)**|`si-LK`|
   * |**Slovak (Slovakia)**|`sk-SK`|
   * |**Slovenian (Slovenia)**|`sl-SI`|
   * |**Somali (Somalia)**|`so-SO`|
   * |**Spanish (Argentina)**|`es-AR`|
   * |**Spanish (Bolivia)**|`es-BO`|
   * |**Spanish (Chile)**|`es-CL`|
   * |**Spanish (Colombia)**|`es-CO`|
   * |**Spanish (Costa Rica)**|`es-CR`|
   * |**Spanish (Cuba)**|`es-CU`|
   * |**Spanish (Dominican Republic)**|`es-DO`|
   * |**Spanish (Ecuador)**|`es-EC`|
   * |**Spanish (El Salvador)**|`es-SV`|
   * |**Spanish (Equatorial Guinea)**|`es-GQ`|
   * |**Spanish (Guatemala)**|`es-GT`|
   * |**Spanish (Honduras)**|`es-HN`|
   * |**Spanish (Laos)**|`es-LA`|
   * |**Spanish (Mexico)**|`es-MX`|
   * |**Spanish (Nicaragua)**|`es-NI`|
   * |**Spanish (Panama)**|`es-PA`|
   * |**Spanish (Paraguay)**|`es-PY`|
   * |**Spanish (Peru)**|`es-PE`|
   * |**Spanish (Puerto Rico)**|`es-PR`|
   * |**Spanish (Spain)**|`es-ES`|
   * |**Spanish (United States)**|`es-US`|
   * |**Spanish (Uruguay)**|`es-UY`|
   * |**Spanish (Venezuela)**|`es-VE`|
   * |**Sundanese (Indonesia)**|`su-ID`|
   * |**Swahili (Kenya)**|`sw-KE`|
   * |**Swahili (Tanzania)**|`sw-TZ`|
   * |**Swedish (Sweden)**|`sv-SE`|
   * |**Tamil (India)**|`ta-IN`|
   * |**Tamil (Malaysia)**|`ta-MY`|
   * |**Tamil (Singapore)**|`ta-SG`|
   * |**Tamil (Sri Lanka)**|`ta-LK`|
   * |**Telugu (India)**|`te-IN`|
   * |**Thai (Thailand)**|`th-TH`|
   * |**Turkish (Turkey)**|`tr-TR`|
   * |**Ukrainian (Ukraine)**|`uk-UA`|
   * |**Urdu (India)**|`ur-IN`|
   * |**Urdu (Pakistan)**|`ur-PK`|
   * |**Uzbek (Uzbekistan)**|`uz-UZ`|
   * |**Vietnamese (Vietnam)**|`vi-VN`|
   * |**Welsh (United Kingdom)**|`cy-GB`|
   * |**Wu Chinese (China)**|`wuu-CN`|
   * |**Zulu (South Africa)**|`zu-ZA`|
   *
   * </details>
   *
   * @summary Text to Speech
   * @throws FetchError<400, types.AudioTextToSpeechCreateResponse400>
   * @throws FetchError<403, types.AudioTextToSpeechCreateResponse403>
   * @throws FetchError<404, types.AudioTextToSpeechCreateResponse404>
   * @throws FetchError<500, types.AudioTextToSpeechCreateResponse500>
   */
  audio_text_to_speech_create(
    body: types.AudioTextToSpeechCreateBodyParam
  ): Promise<FetchResponse<200, types.AudioTextToSpeechCreateResponse200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Text To Speech list jobs
   */
  audio_text_to_speech_async_retrieve(): Promise<
    FetchResponse<200, types.AudioTextToSpeechAsyncRetrieveResponse200>
  >;
  /**
   * <strong style='color: #ac3737'>No Provider Available</strong>
   *
   *
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Armenian**|`hy`|
   * |**Azerbaijani**|`az`|
   * |**Basque**|`eu`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Central Khmer**|`km`|
   * |**Chinese**|`zh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Indonesian**|`id`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kazakh**|`kk`|
   * |**Korean**|`ko`|
   * |**Lao**|`lo`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Macedonian**|`mk`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Marathi**|`mr`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Persian**|`fa`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Serbian**|`sr`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tamil**|`ta`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Turkish**|`tr`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Wu Chinese**|`wuu`|
   * |**Xhosa**|`xh`|
   * |**Yue Chinese**|`yue`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans (South Africa)**|`af-ZA`|
   * |**Albanian (Albania)**|`sq-AL`|
   * |**Amharic (Ethiopia)**|`am-ET`|
   * |**Arabic (Algeria)**|`ar-DZ`|
   * |**Arabic (Bahrain)**|`ar-BH`|
   * |**Arabic (Egypt)**|`ar-EG`|
   * |**Arabic (Iraq)**|`ar-IQ`|
   * |**Arabic (Jordan)**|`ar-JO`|
   * |**Arabic (Kuwait)**|`ar-KW`|
   * |**Arabic (Lebanon)**|`ar-LB`|
   * |**Arabic (Libya)**|`ar-LY`|
   * |**Arabic (Morocco)**|`ar-MA`|
   * |**Arabic (Oman)**|`ar-OM`|
   * |**Arabic (Qatar)**|`ar-QA`|
   * |**Arabic (Saudi Arabia)**|`ar-SA`|
   * |**Arabic (Tunisia)**|`ar-TN`|
   * |**Arabic (United Arab Emirates)**|`ar-AE`|
   * |**Armenian (Armenia)**|`hy-AM`|
   * |**Azerbaijani (Azerbaijan)**|`az-AZ`|
   * |**Bangla (India)**|`bn-IN`|
   * |**Basque (Spain)**|`eu-ES`|
   * |**Bosnian (Bosnia & Herzegovina)**|`bs-BA`|
   * |**Burmese (Myanmar (Burma))**|`my-MM`|
   * |**Cantonese (China)**|`yue-CN`|
   * |**Catalan (Spain)**|`ca-ES`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (China)**|`zh-CN-henan`|
   * |**Chinese (China)**|`zh-CN-shandong`|
   * |**Chinese (China)**|`zh-CN-sichuan`|
   * |**Chinese (Hong Kong SAR China)**|`zh-HK`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Croatian (Croatia)**|`hr-HR`|
   * |**Czech (Czechia)**|`cs-CZ`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Belgium)**|`nl-BE`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (Australia)**|`en-AU`|
   * |**English (Canada)**|`en-CA`|
   * |**English (Curaçao)**|`en-AN`|
   * |**English (Hong Kong SAR China)**|`en-HK`|
   * |**English (India)**|`en-IN`|
   * |**English (Ireland)**|`en-IE`|
   * |**English (Kenya)**|`en-KE`|
   * |**English (New Zealand)**|`en-NZ`|
   * |**English (Nigeria)**|`en-NG`|
   * |**English (Philippines)**|`en-PH`|
   * |**English (Singapore)**|`en-SG`|
   * |**English (South Africa)**|`en-ZA`|
   * |**English (Tanzania)**|`en-TZ`|
   * |**English (United Kingdom)**|`en-GB`|
   * |**English (United States)**|`en-US`|
   * |**Estonian (Estonia)**|`et-EE`|
   * |**Filipino (Philippines)**|`fil-PH`|
   * |**Finnish (Finland)**|`fi-FI`|
   * |**French (Belgium)**|`fr-BE`|
   * |**French (Canada)**|`fr-CA`|
   * |**French (France)**|`fr-FR`|
   * |**French (Switzerland)**|`fr-CH`|
   * |**Galician (Spain)**|`gl-ES`|
   * |**Georgian (Georgia)**|`ka-GE`|
   * |**German (Austria)**|`de-AT`|
   * |**German (Germany)**|`de-DE`|
   * |**German (Switzerland)**|`de-CH`|
   * |**Hebrew (Israel)**|`he-IL`|
   * |**Hindi (India)**|`hi-IN`|
   * |**Hungarian (Hungary)**|`hu-HU`|
   * |**Icelandic (Iceland)**|`is-IS`|
   * |**Indonesian (Indonesia)**|`id-ID`|
   * |**Irish (Ireland)**|`ga-IE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Japanese (Japan)**|`ja-JP`|
   * |**Javanese (Indonesia)**|`jv-ID`|
   * |**Kazakh (Kazakhstan)**|`kk-KZ`|
   * |**Khmer (Cambodia)**|`km-KH`|
   * |**Korean (South Korea)**|`ko-KR`|
   * |**Lao (Laos)**|`lo-LA`|
   * |**Latvian (Latvia)**|`lv-LV`|
   * |**Lithuanian (Lithuania)**|`lt-LT`|
   * |**Macedonian (North Macedonia)**|`mk-MK`|
   * |**Malay (Malaysia)**|`ms-MY`|
   * |**Malayalam (India)**|`ml-IN`|
   * |**Maltese (Malta)**|`mt-MT`|
   * |**Marathi (India)**|`mr-IN`|
   * |**Mongolian (Mongolia)**|`mn-MN`|
   * |**Nepali (Nepal)**|`ne-NP`|
   * |**Norwegian Bokmål (Norway)**|`nb-NO`|
   * |**Pashto (Afghanistan)**|`ps-AF`|
   * |**Persian (Iran)**|`fa-IR`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Romanian (Romania)**|`ro-RO`|
   * |**Russian (Russia)**|`ru-RU`|
   * |**Serbian (Serbia)**|`sr-RS`|
   * |**Sinhala (Sri Lanka)**|`si-LK`|
   * |**Slovak (Slovakia)**|`sk-SK`|
   * |**Slovenian (Slovenia)**|`sl-SI`|
   * |**Somali (Somalia)**|`so-SO`|
   * |**Spanish (Argentina)**|`es-AR`|
   * |**Spanish (Bolivia)**|`es-BO`|
   * |**Spanish (Chile)**|`es-CL`|
   * |**Spanish (Colombia)**|`es-CO`|
   * |**Spanish (Costa Rica)**|`es-CR`|
   * |**Spanish (Cuba)**|`es-CU`|
   * |**Spanish (Ecuador)**|`es-EC`|
   * |**Spanish (El Salvador)**|`es-SV`|
   * |**Spanish (Equatorial Guinea)**|`es-GQ`|
   * |**Spanish (Guatemala)**|`es-GT`|
   * |**Spanish (Mexico)**|`es-MX`|
   * |**Spanish (Nicaragua)**|`es-NI`|
   * |**Spanish (Panama)**|`es-PA`|
   * |**Spanish (Paraguay)**|`es-PY`|
   * |**Spanish (Puerto Rico)**|`es-PR`|
   * |**Spanish (Spain)**|`es-ES`|
   * |**Spanish (United States)**|`es-US`|
   * |**Spanish (Uruguay)**|`es-UY`|
   * |**Spanish (Venezuela)**|`es-VE`|
   * |**Sundanese (Indonesia)**|`su-ID`|
   * |**Swahili (Kenya)**|`sw-KE`|
   * |**Swahili (Tanzania)**|`sw-TZ`|
   * |**Swedish (Sweden)**|`sv-SE`|
   * |**Tamil (India)**|`ta-IN`|
   * |**Tamil (Malaysia)**|`ta-MY`|
   * |**Tamil (Singapore)**|`ta-SG`|
   * |**Telugu (India)**|`te-IN`|
   * |**Thai (Thailand)**|`th-TH`|
   * |**Turkish (Turkey)**|`tr-TR`|
   * |**Ukrainian (Ukraine)**|`uk-UA`|
   * |**Urdu (India)**|`ur-IN`|
   * |**Urdu (Pakistan)**|`ur-PK`|
   * |**Uzbek (United Kingdom)**|`uz-UK`|
   * |**Vietnamese (Vietnam)**|`vi-VN`|
   * |**Welsh (United Kingdom)**|`cy-GB`|
   * |**Wu Chinese (China)**|`wuu-CN`|
   * |**Xhosa (South Africa)**|`xh-ZA`|
   * |**Zulu (South Africa)**|`zu-ZA`|
   *
   * </details>
   *
   * @summary Text to Speech launch job
   */
  audio_text_to_speech_async_create(
    body: types.AudioTextToSpeechAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.AudioTextToSpeechAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Text To Speech Get Job Results
   * @throws FetchError<400, types.AudioTextToSpeechAsyncRetrieve2Response400>
   * @throws FetchError<403, types.AudioTextToSpeechAsyncRetrieve2Response403>
   * @throws FetchError<404, types.AudioTextToSpeechAsyncRetrieve2Response404>
   * @throws FetchError<500, types.AudioTextToSpeechAsyncRetrieve2Response500>
   */
  audio_text_to_speech_async_retrieve_2(
    metadata: types.AudioTextToSpeechAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.AudioTextToSpeechAsyncRetrieve2Response200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**api4ai**|`v1.0.0`|25.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Anonymization
   * @throws FetchError<400, types.ImageAnonymizationCreateResponse400>
   * @throws FetchError<403, types.ImageAnonymizationCreateResponse403>
   * @throws FetchError<404, types.ImageAnonymizationCreateResponse404>
   * @throws FetchError<500, types.ImageAnonymizationCreateResponse500>
   */
  image_anonymization_create(
    body: types.ImageAnonymizationCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageAnonymizationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000 file)|1 file
   * |**clarifai**|`8.0.0`|2.0 (per 1000 file)|1 file
   * |**google**|`v1`|1.5 (per 1000 file)|1 file
   * |**microsoft**|`v3.2`|1.0 (per 1000 file)|1 file
   * |**sentisight**|`v3.3.1`|1.0 (per 1000 file)|1 file
   * |**picpurify**|`v1.1`|2.0 (per 1000 file)|1 file
   * |**api4ai**|`v1.0.0`|0.75 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Explicit Content Detection
   * @throws FetchError<400, types.ImageExplicitContentCreateResponse400>
   * @throws FetchError<403, types.ImageExplicitContentCreateResponse403>
   * @throws FetchError<404, types.ImageExplicitContentCreateResponse404>
   * @throws FetchError<500, types.ImageExplicitContentCreateResponse500>
   */
  image_explicit_content_create(
    body: types.ImageExplicitContentCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageExplicitContentCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**base64**|`latest`|0.25 (per 1 request)|1 request
   * |**facepp**|`v3`|2.0 (per 1000 request)|1 request
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Comparison
   * @throws FetchError<400, types.ImageFaceCompareCreateResponse400>
   * @throws FetchError<403, types.ImageFaceCompareCreateResponse403>
   * @throws FetchError<404, types.ImageFaceCompareCreateResponse404>
   * @throws FetchError<500, types.ImageFaceCompareCreateResponse500>
   */
  image_face_compare_create(
    body: types.ImageFaceCompareCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageFaceCompareCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000 file)|1 file
   * |**clarifai**|`8.0.0`|2.0 (per 1000 file)|1 file
   * |**google**|`v1`|1.5 (per 1000 file)|1 file
   * |**microsoft**|`v3.2`|1.0 (per 1000 file)|1 file
   * |**api4ai**|`v1.0.0`|0.75 (per 1000 file)|1 file
   * |**picpurify**|`v1.1`|1.2 (per 1000 file)|1 file
   * |**skybiometry**|`v1`|1.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Detection
   * @throws FetchError<400, types.ImageFaceDetectionCreateResponse400>
   * @throws FetchError<403, types.ImageFaceDetectionCreateResponse403>
   * @throws FetchError<404, types.ImageFaceDetectionCreateResponse404>
   * @throws FetchError<500, types.ImageFaceDetectionCreateResponse500>
   */
  image_face_detection_create(
    body: types.ImageFaceDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageFaceDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|1.0 (per 1000 file)|1 file
   * |**microsoft**|`Face API - v1.0`|1.0 (per 1000 file)|1 file
   * |**facepp**|`v3`|0.6 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Recognition - Add Face
   * @throws FetchError<400, types.ImageFaceRecognitionAddFaceCreateResponse400>
   * @throws FetchError<403, types.ImageFaceRecognitionAddFaceCreateResponse403>
   * @throws FetchError<404, types.ImageFaceRecognitionAddFaceCreateResponse404>
   * @throws FetchError<500, types.ImageFaceRecognitionAddFaceCreateResponse500>
   */
  image_face_recognition_add_face_create(
    body: types.ImageFaceRecognitionAddFaceCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageFaceRecognitionAddFaceCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|free|-
   * |**microsoft**|`Face API - v1.0`|free|-
   * |**facepp**|`v3`|0.1 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Recognition - Delete Face
   * @throws FetchError<400, types.ImageFaceRecognitionDeleteFaceCreateResponse400>
   * @throws FetchError<403, types.ImageFaceRecognitionDeleteFaceCreateResponse403>
   * @throws FetchError<404, types.ImageFaceRecognitionDeleteFaceCreateResponse404>
   * @throws FetchError<500, types.ImageFaceRecognitionDeleteFaceCreateResponse500>
   */
  image_face_recognition_delete_face_create(
    body: types.ImageFaceRecognitionDeleteFaceCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageFaceRecognitionDeleteFaceCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|free|-
   * |**microsoft**|`Face API - v1.0`|free|-
   * |**facepp**|`v3`|0.1 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Recognition - List Faces
   * @throws FetchError<400, types.ImageFaceRecognitionListFacesRetrieveResponse400>
   * @throws FetchError<403, types.ImageFaceRecognitionListFacesRetrieveResponse403>
   * @throws FetchError<404, types.ImageFaceRecognitionListFacesRetrieveResponse404>
   * @throws FetchError<500, types.ImageFaceRecognitionListFacesRetrieveResponse500>
   */
  image_face_recognition_list_faces_retrieve(
    metadata: types.ImageFaceRecognitionListFacesRetrieveMetadataParam
  ): Promise<FetchResponse<200, types.ImageFaceRecognitionListFacesRetrieveResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|1.0 (per 1000 file)|1 file
   * |**microsoft**|`Face API - v1.0`|1.0 (per 1000 file)|1 file
   * |**facepp**|`v3`|2.0 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Recognition - Recognize Face
   * @throws FetchError<400, types.ImageFaceRecognitionRecognizeCreateResponse400>
   * @throws FetchError<403, types.ImageFaceRecognitionRecognizeCreateResponse403>
   * @throws FetchError<404, types.ImageFaceRecognitionRecognizeCreateResponse404>
   * @throws FetchError<500, types.ImageFaceRecognitionRecognizeCreateResponse500>
   */
  image_face_recognition_recognize_create(
    body: types.ImageFaceRecognitionRecognizeCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageFaceRecognitionRecognizeCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Resolution|Price|Billing unit|
   * |----|-------|------|-----|------------|
   * |**deepai**|`v1Beta`|-|0.05 (per 1 request)|1 request
   * |**openai**|`v1Beta`|`256x256`|0.016 (per 1 image)|1 image
   * |**openai**|`v1Beta`|`512x512`|0.018 (per 1 image)|1 image
   * |**openai**|`v1Beta`|`1024x1024`|0.02 (per 1 image)|1 image
   * |**stabilityai**|`v1Beta`|`512x512`|0.004 (per 1 image)|1 image
   * |**stabilityai**|`v1Beta`|`1024x1024`|0.032 (per 1 image)|1 image
   *
   *
   * </details>
   *
   *
   *
   * @summary Image generation
   * @throws FetchError<400, types.ImageGenerationCreateResponse400>
   * @throws FetchError<403, types.ImageGenerationCreateResponse403>
   * @throws FetchError<404, types.ImageGenerationCreateResponse404>
   * @throws FetchError<500, types.ImageGenerationCreateResponse500>
   */
  image_generation_create(
    body: types.ImageGenerationCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageGenerationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**google**|`v1`|1.5 (per 1000 file)|1 file
   * |**microsoft**|`v3.2`|1.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Landmark Detection
   * @throws FetchError<400, types.ImageLandmarkDetectionCreateResponse400>
   * @throws FetchError<403, types.ImageLandmarkDetectionCreateResponse403>
   * @throws FetchError<404, types.ImageLandmarkDetectionCreateResponse404>
   * @throws FetchError<500, types.ImageLandmarkDetectionCreateResponse500>
   */
  image_landmark_detection_create(
    body: types.ImageLandmarkDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageLandmarkDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**google**|`v1`|1.5 (per 1000 file)|1 file
   * |**microsoft**|`v3.2`|1.0 (per 1000 file)|1 file
   * |**smartclick**|`v3.2`|0.5 (per 1000 file)|1 file
   * |**api4ai**|`v1.0.0`|0.25 (per 1000 file)|1 file
   * |**clarifai**|`8.0.0`|2.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Logo Detection
   * @throws FetchError<400, types.ImageLogoDetectionCreateResponse400>
   * @throws FetchError<403, types.ImageLogoDetectionCreateResponse403>
   * @throws FetchError<404, types.ImageLogoDetectionCreateResponse404>
   * @throws FetchError<500, types.ImageLogoDetectionCreateResponse500>
   */
  image_logo_detection_create(
    body: types.ImageLogoDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageLogoDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000 file)|1 file
   * |**api4ai**|`1.9.2`|0.5 (per 1000 file)|1 file
   * |**clarifai**|`8.0.0`|2.0 (per 1000 file)|1 file
   * |**google**|`v1`|2.25 (per 1000 file)|1 file
   * |**microsoft**|`v3.2`|1.0 (per 1000 file)|1 file
   * |**sentisight**|`v3.3.1`|1.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Object Detection
   * @throws FetchError<400, types.ImageObjectDetectionCreateResponse400>
   * @throws FetchError<403, types.ImageObjectDetectionCreateResponse403>
   * @throws FetchError<404, types.ImageObjectDetectionCreateResponse404>
   * @throws FetchError<500, types.ImageObjectDetectionCreateResponse500>
   */
  image_object_detection_create(
    body: types.ImageObjectDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageObjectDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**sentisight**|`v3.3.1`|free|-
   *
   *
   * </details>
   *
   *
   *
   * @summary Search - Delete phase
   * @throws FetchError<400, types.ImageSearchDeleteImageCreateResponse400>
   * @throws FetchError<403, types.ImageSearchDeleteImageCreateResponse403>
   * @throws FetchError<404, types.ImageSearchDeleteImageCreateResponse404>
   * @throws FetchError<500, types.ImageSearchDeleteImageCreateResponse500>
   */
  image_search_delete_image_create(
    body: types.ImageSearchDeleteImageCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageSearchDeleteImageCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**sentisight**|`v3.3.1`|free|-
   *
   *
   * </details>
   *
   *
   *
   * @summary Search - get image
   * @throws FetchError<400, types.ImageSearchGetImageRetrieveResponse400>
   * @throws FetchError<403, types.ImageSearchGetImageRetrieveResponse403>
   * @throws FetchError<404, types.ImageSearchGetImageRetrieveResponse404>
   * @throws FetchError<500, types.ImageSearchGetImageRetrieveResponse500>
   */
  image_search_get_image_retrieve(
    metadata: types.ImageSearchGetImageRetrieveMetadataParam
  ): Promise<FetchResponse<200, types.ImageSearchGetImageRetrieveResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**sentisight**|`v3.3.1`|free|-
   *
   *
   * </details>
   *
   *
   *
   * @summary Search - list all images
   * @throws FetchError<400, types.ImageSearchGetImagesRetrieveResponse400>
   * @throws FetchError<403, types.ImageSearchGetImagesRetrieveResponse403>
   * @throws FetchError<404, types.ImageSearchGetImagesRetrieveResponse404>
   * @throws FetchError<500, types.ImageSearchGetImagesRetrieveResponse500>
   */
  image_search_get_images_retrieve(
    metadata: types.ImageSearchGetImagesRetrieveMetadataParam
  ): Promise<FetchResponse<200, types.ImageSearchGetImagesRetrieveResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**sentisight**|`v3.3.1`|1.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Search - launch similarity
   * @throws FetchError<400, types.ImageSearchLaunchSimilarityCreateResponse400>
   * @throws FetchError<403, types.ImageSearchLaunchSimilarityCreateResponse403>
   * @throws FetchError<404, types.ImageSearchLaunchSimilarityCreateResponse404>
   * @throws FetchError<500, types.ImageSearchLaunchSimilarityCreateResponse500>
   */
  image_search_launch_similarity_create(
    body: types.ImageSearchLaunchSimilarityCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageSearchLaunchSimilarityCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**sentisight**|`v3.3.1`|1.0 (per 1000 file)|1 file
   *
   *
   * </details>
   *
   *
   *
   * @summary Search - Upload Phase
   * @throws FetchError<400, types.ImageSearchUploadImageCreateResponse400>
   * @throws FetchError<403, types.ImageSearchUploadImageCreateResponse403>
   * @throws FetchError<404, types.ImageSearchUploadImageCreateResponse404>
   * @throws FetchError<500, types.ImageSearchUploadImageCreateResponse500>
   */
  image_search_upload_image_create(
    body: types.ImageSearchUploadImageCreateBodyParam
  ): Promise<FetchResponse<200, types.ImageSearchUploadImageCreateResponse200>>;
  /**
   * List Provider and features relations : You can get a list of *all providers* for a
   * *feature* or *all features* for a *given provider*.
   *
   * You can have the detailed information on the **pricing**, **supported languages** as
   * well as the **models** for providers who propose different models (eg: voice models
   * available for a text to speech provider).
   *
   * Example : If you want the detailed list of all providers that can analyse the sentiment
   * of a text written in french, you'd need to set `feature__name=text`,
   * `subfeature__name=sentiment_analysis` and `languages=fr`.
   *
   * Which will look like the following :
   *
   *
   * ```bash
   * curl --request GET
   * https://api.edenai.run/v2/info/provider_subfeatures?subfeature__name=sentiment_analysis&feature__name=text&languages=fr
   * ```
   *
   * @summary List Providers Subfeatures
   */
  info_provider_subfeatures_list(
    metadata?: types.InfoProviderSubfeaturesListMetadataParam
  ): Promise<FetchResponse<200, types.InfoProviderSubfeaturesListResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**base64**|`latest`|0.25 (per 1 page)|1 page
   * |**veryfi**|`v8`|0.16 (per 1 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Bank Check Parsing
   * @throws FetchError<400, types.OcrBankCheckParsingCreateResponse400>
   * @throws FetchError<403, types.OcrBankCheckParsingCreateResponse403>
   * @throws FetchError<404, types.OcrBankCheckParsingCreateResponse404>
   * @throws FetchError<500, types.OcrBankCheckParsingCreateResponse500>
   */
  ocr_bank_check_parsing_create(
    body: types.OcrBankCheckParsingCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrBankCheckParsingCreateResponse200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Custom Document Parsing List Job
   */
  ocr_custom_document_parsing_async_retrieve(): Promise<
    FetchResponse<200, types.OcrCustomDocumentParsingAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|15.0 (per 1000 page)|1 page
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**English**|`en`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Italian**|`it`|
   * |**Portuguese**|`pt`|
   * |**Spanish**|`es`|
   *
   * </details>
   *
   * @summary Custom Document Parsing Launch Job
   */
  ocr_custom_document_parsing_async_create(
    body: types.OcrCustomDocumentParsingAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrCustomDocumentParsingAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Custom Document Parsing Get Job Results
   * @throws FetchError<400, types.OcrCustomDocumentParsingAsyncRetrieve2Response400>
   * @throws FetchError<403, types.OcrCustomDocumentParsingAsyncRetrieve2Response403>
   * @throws FetchError<404, types.OcrCustomDocumentParsingAsyncRetrieve2Response404>
   * @throws FetchError<500, types.OcrCustomDocumentParsingAsyncRetrieve2Response500>
   */
  ocr_custom_document_parsing_async_retrieve_2(
    metadata: types.OcrCustomDocumentParsingAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.OcrCustomDocumentParsingAsyncRetrieve2Response200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|0.05 (per 1 page)|1 page
   * |**base64**|`latest`|0.25 (per 1 page)|1 page
   *
   *
   * </details>
   *
   *
   *
   * @summary Data Extraction
   * @throws FetchError<400, types.OcrDataExtractionCreateResponse400>
   * @throws FetchError<403, types.OcrDataExtractionCreateResponse403>
   * @throws FetchError<404, types.OcrDataExtractionCreateResponse404>
   * @throws FetchError<500, types.OcrDataExtractionCreateResponse500>
   */
  ocr_data_extraction_create(
    body: types.OcrDataExtractionCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrDataExtractionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|0.025 (per 1 page)|1 page
   * |**base64**|`latest`|0.2 (per 1 page)|1 page
   * |**microsoft**|`rest API 3.0`|0.05 (per 1 page)|1 page
   * |**mindee**|`v2`|0.1 (per 1 page)|1 page
   * |**klippa**|`v1`|0.1 (per 1 file)|1 file
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**English**|`en`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Italian**|`it`|
   * |**Portuguese**|`pt`|
   * |**Spanish**|`es`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**English (United States)**|`en-US`|
   * |**French (France)**|`fr-FR`|
   * |**German (Germany)**|`de-DE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Spanish (Spain)**|`es-ES`|
   *
   * </details>
   *
   * @summary Identity Parser
   * @throws FetchError<400, types.OcrIdentityParserCreateResponse400>
   * @throws FetchError<403, types.OcrIdentityParserCreateResponse403>
   * @throws FetchError<404, types.OcrIdentityParserCreateResponse404>
   * @throws FetchError<500, types.OcrIdentityParserCreateResponse500>
   */
  ocr_identity_parser_create(
    body: types.OcrIdentityParserCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrIdentityParserCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**affinda**|`affinda 1.0.2`|0.08 (per 1 page)|1 page
   * |**base64**|`latest`|0.25 (per 1 page)|1 page
   * |**dataleon**|`v3.1.0`|0.05 (per 1 page)|1 page
   * |**microsoft**|`v2.1-preview.3`|0.05 (per 1 page)|1 page
   * |**mindee**|`v2`|0.1 (per 1 page)|1 page
   * |**amazon**|`boto3 1.26.8`|0.01 (per 1 page)|1 page
   * |**google**|`DocumentAI v1 beta3`|0.01 (per 1 page)|10 page
   * |**klippa**|`v1`|0.1 (per 1 file)|1 file
   * |**veryfi**|`v8`|0.16 (per 1 file)|1 file
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Catalan**|`ca`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Italian**|`it`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**English (United States)**|`en-US`|
   * |**French (France)**|`fr-FR`|
   * |**German (Germany)**|`de-DE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Spanish (Spain)**|`es-ES`|
   *
   * </details>
   *
   * @summary Invoice Parser
   * @throws FetchError<400, types.OcrInvoiceParserCreateResponse400>
   * @throws FetchError<403, types.OcrInvoiceParserCreateResponse403>
   * @throws FetchError<404, types.OcrInvoiceParserCreateResponse404>
   * @throws FetchError<500, types.OcrInvoiceParserCreateResponse500>
   */
  ocr_invoice_parser_create(
    body: types.OcrInvoiceParserCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrInvoiceParserCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.5 (per 1000 page)|1 page
   * |**clarifai**|`8.0.0`|2.0 (per 1000 page)|1 page
   * |**google**|`v1`|1.5 (per 1000 page)|1 page
   * |**microsoft**|`v3.2`|1.0 (per 1000 page)|1 page
   * |**sentisight**|`v3.3.1`|1.0 (per 1000 file)|1 file
   * |**api4ai**|`v1.0.0`|3.0 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Abaza**|`abq`|
   * |**Adyghe**|`ady`|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Angika**|`anp`|
   * |**Arabic**|`ar`|
   * |**Assamese**|`as`|
   * |**Asturian**|`ast`|
   * |**Avaric**|`av`|
   * |**Awadhi**|`awa`|
   * |**Azerbaijani**|`az`|
   * |**Bagheli**|`bfy`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bhojpuri**|`bho`|
   * |**Bihari languages**|`bh`|
   * |**Bislama**|`bi`|
   * |**Bodo (India)**|`brx`|
   * |**Bosnian**|`bs`|
   * |**Braj**|`bra`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Bundeli**|`bns`|
   * |**Buriat**|`bua`|
   * |**Camling**|`rab`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Chamorro**|`ch`|
   * |**Chechen**|`ce`|
   * |**Chhattisgarhi**|`hne`|
   * |**Chinese**|`zh`|
   * |**Cornish**|`kw`|
   * |**Corsican**|`co`|
   * |**Crimean Tatar**|`crh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dargwa**|`dar`|
   * |**Dari**|`prs`|
   * |**Dhimal**|`dhi`|
   * |**Dogri (macrolanguage)**|`doi`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Erzya**|`myv`|
   * |**Estonian**|`et`|
   * |**Faroese**|`fo`|
   * |**Fijian**|`fj`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Friulian**|`fur`|
   * |**Gagauz**|`gag`|
   * |**Galician**|`gl`|
   * |**German**|`de`|
   * |**Gilbertese**|`gil`|
   * |**Goan Konkani**|`gom`|
   * |**Gondi**|`gon`|
   * |**Gurung**|`gvr`|
   * |**Haitian**|`ht`|
   * |**Halbi**|`hlb`|
   * |**Hani**|`hni`|
   * |**Haryanvi**|`bgc`|
   * |**Hawaiian**|`haw`|
   * |**Hindi**|`hi`|
   * |**Hmong Daw**|`mww`|
   * |**Ho**|`hoc`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Inari Sami**|`smn`|
   * |**Indonesian**|`id`|
   * |**Ingush**|`inh`|
   * |**Interlingua (International Auxiliary Language Association)**|`ia`|
   * |**Inuktitut**|`iu`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Jaunsari**|`jns`|
   * |**Javanese**|`jv`|
   * |**K'iche'**|`quc`|
   * |**Kabardian**|`kbd`|
   * |**Kabuverdianu**|`kea`|
   * |**Kachin**|`kac`|
   * |**Kalaallisut**|`kl`|
   * |**Kangri**|`xnr`|
   * |**Kara-Kalpak**|`kaa`|
   * |**Karachay-Balkar**|`krc`|
   * |**Kashubian**|`csb`|
   * |**Kazakh**|`kk`|
   * |**Khaling**|`klr`|
   * |**Khasi**|`kha`|
   * |**Kirghiz**|`ky`|
   * |**Korean**|`ko`|
   * |**Korku**|`kfq`|
   * |**Koryak**|`kpy`|
   * |**Kosraean**|`kos`|
   * |**Kumarbhag Paharia**|`kmj`|
   * |**Kumyk**|`kum`|
   * |**Kurdish**|`ku`|
   * |**Kurukh**|`kru`|
   * |**Kölsch**|`ksh`|
   * |**Lak**|`lbe`|
   * |**Lakota**|`lkt`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lezghian**|`lez`|
   * |**Lithuanian**|`lt`|
   * |**Lower Sorbian**|`dsb`|
   * |**Lule Sami**|`smj`|
   * |**Luxembourgish**|`lb`|
   * |**Mahasu Pahari**|`bfz`|
   * |**Maithili**|`mai`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Maltese**|`mt`|
   * |**Manx**|`gv`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Marshallese**|`mh`|
   * |**Mongolian**|`mn`|
   * |**Neapolitan**|`nap`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Newari**|`new`|
   * |**Niuean**|`niu`|
   * |**Nogai**|`nog`|
   * |**Northern Sami**|`se`|
   * |**Norwegian**|`no`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Old English (ca. 450-1100)**|`ang`|
   * |**Ossetian**|`os`|
   * |**Pali**|`pi`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Romansh**|`rm`|
   * |**Russian**|`ru`|
   * |**Sadri**|`sck`|
   * |**Samoan**|`sm`|
   * |**Sanskrit**|`sa`|
   * |**Santali**|`sat`|
   * |**Scots**|`sco`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Sherpa**|`xsr`|
   * |**Sirmauri**|`srx`|
   * |**Skolt Sami**|`sms`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Southern Sami**|`sma`|
   * |**Spanish**|`es`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tabassaran**|`tab`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tatar**|`tt`|
   * |**Tetum**|`tet`|
   * |**Thangmi**|`thf`|
   * |**Tonga (Tonga Islands)**|`to`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Tuvinian**|`tyv`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Upper Sorbian**|`hsb`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Volapük**|`vo`|
   * |**Walser**|`wae`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Yucateco**|`yua`|
   * |**Zhuang**|`za`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Arabic (Pseudo-Accents)**|`ar-XA`|
   * |**Belarusian**|`be-cyrl`|
   * |**Belarusian (Latin)**|`be-latn`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (United States)**|`en-US`|
   * |**Finnish (Finland)**|`fi-FI`|
   * |**French (France)**|`fr-FR`|
   * |**German (Germany)**|`de-DE`|
   * |**Hungarian (Hungary)**|`hu-HU`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Japanese (Japan)**|`ja-JP`|
   * |**Kara-Kalpak (Cyrillic)**|`kaa-Cyrl`|
   * |**Kazakh**|`kk-cyrl`|
   * |**Kazakh (Latin)**|`kk-latn`|
   * |**Korean (South Korea)**|`ko-KR`|
   * |**Kurdish (Arabic)**|`ku-arab`|
   * |**Kurdish (Latin)**|`ku-latn`|
   * |**Polish**|`pl-PO`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Region: Czechia**|`cz-CZ`|
   * |**Region: Greece**|`gr-GR`|
   * |**Russian (Russia)**|`ru-RU`|
   * |**Serbian (Cyrillic, Montenegro)**|`sr-Cyrl-ME`|
   * |**Serbian (Latin)**|`sr-latn`|
   * |**Serbian (Latin, Montenegro)**|`sr-Latn-ME`|
   * |**Serbian (Montenegro)**|`sr-ME`|
   * |**Spanish (Spain)**|`es-ES`|
   * |**Swedish (Sweden)**|`sv-SE`|
   * |**Turkish (Turkey)**|`tr-TR`|
   * |**Uzbek (Arabic)**|`uz-arab`|
   * |**Uzbek (Cyrillic)**|`uz-cyrl`|
   *
   * </details>
   *
   * @summary OCR
   * @throws FetchError<400, types.OcrOcrCreateResponse400>
   * @throws FetchError<403, types.OcrOcrCreateResponse403>
   * @throws FetchError<404, types.OcrOcrCreateResponse404>
   * @throws FetchError<500, types.OcrOcrCreateResponse500>
   */
  ocr_ocr_create(
    body: types.OcrOcrCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrOcrCreateResponse200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Ocr Async List Job
   */
  ocr_ocr_async_retrieve(): Promise<FetchResponse<200, types.OcrOcrAsyncRetrieveResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.5 (per 1000 page)|1 page
   *
   *
   * </details>
   *
   *
   *
   * @summary Ocr Async Launch Job
   */
  ocr_ocr_async_create(
    body: types.OcrOcrAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrOcrAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Ocr Async Get Job Results
   * @throws FetchError<400, types.OcrOcrAsyncRetrieve2Response400>
   * @throws FetchError<403, types.OcrOcrAsyncRetrieve2Response403>
   * @throws FetchError<404, types.OcrOcrAsyncRetrieve2Response404>
   * @throws FetchError<500, types.OcrOcrAsyncRetrieve2Response500>
   */
  ocr_ocr_async_retrieve_2(
    metadata: types.OcrOcrAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.OcrOcrAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary OCR Tables List Job
   */
  ocr_ocr_tables_async_retrieve(): Promise<
    FetchResponse<200, types.OcrOcrTablesAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|15.0 (per 1000 page)|1 page
   * |**google**|`DocumentAI v1 beta3`|65.0 (per 1000 page)|1 page
   * |**microsoft**|`rest API 3.0`|50.0 (per 1000 page)|1 page
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Angika**|`anp`|
   * |**Arabic**|`ar`|
   * |**Asturian**|`ast`|
   * |**Awadhi**|`awa`|
   * |**Azerbaijani**|`az`|
   * |**Bagheli**|`bfy`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bhojpuri**|`bho`|
   * |**Bislama**|`bi`|
   * |**Bodo (India)**|`brx`|
   * |**Bosnian**|`bs`|
   * |**Braj**|`bra`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Bundeli**|`bns`|
   * |**Buriat**|`bua`|
   * |**Camling**|`rab`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Chamorro**|`ch`|
   * |**Chhattisgarhi**|`hne`|
   * |**Chinese**|`zh`|
   * |**Cornish**|`kw`|
   * |**Corsican**|`co`|
   * |**Crimean Tatar**|`crh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dari**|`prs`|
   * |**Dhimal**|`dhi`|
   * |**Dogri (macrolanguage)**|`doi`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Erzya**|`myv`|
   * |**Estonian**|`et`|
   * |**Faroese**|`fo`|
   * |**Fijian**|`fj`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Friulian**|`fur`|
   * |**Gagauz**|`gag`|
   * |**Galician**|`gl`|
   * |**German**|`de`|
   * |**Gilbertese**|`gil`|
   * |**Gondi**|`gon`|
   * |**Gurung**|`gvr`|
   * |**Haitian**|`ht`|
   * |**Halbi**|`hlb`|
   * |**Hani**|`hni`|
   * |**Haryanvi**|`bgc`|
   * |**Hawaiian**|`haw`|
   * |**Hindi**|`hi`|
   * |**Hmong Daw**|`mww`|
   * |**Ho**|`hoc`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Inari Sami**|`smn`|
   * |**Indonesian**|`id`|
   * |**Interlingua (International Auxiliary Language Association)**|`ia`|
   * |**Inuktitut**|`iu`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Jaunsari**|`jns`|
   * |**Javanese**|`jv`|
   * |**K'iche'**|`quc`|
   * |**Kabuverdianu**|`kea`|
   * |**Kachin**|`kac`|
   * |**Kalaallisut**|`kl`|
   * |**Kangri**|`xnr`|
   * |**Kara-Kalpak**|`kaa`|
   * |**Karachay-Balkar**|`krc`|
   * |**Kashubian**|`csb`|
   * |**Kazakh**|`kk`|
   * |**Khaling**|`klr`|
   * |**Khasi**|`kha`|
   * |**Kirghiz**|`ky`|
   * |**Korean**|`ko`|
   * |**Korku**|`kfq`|
   * |**Koryak**|`kpy`|
   * |**Kosraean**|`kos`|
   * |**Kumarbhag Paharia**|`kmj`|
   * |**Kumyk**|`kum`|
   * |**Kurdish**|`ku`|
   * |**Kurukh**|`kru`|
   * |**Kölsch**|`ksh`|
   * |**Lakota**|`lkt`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Lower Sorbian**|`dsb`|
   * |**Lule Sami**|`smj`|
   * |**Luxembourgish**|`lb`|
   * |**Mahasu Pahari**|`bfz`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Maltese**|`mt`|
   * |**Manx**|`gv`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Mongolian**|`mn`|
   * |**Neapolitan**|`nap`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Niuean**|`niu`|
   * |**Nogai**|`nog`|
   * |**Northern Sami**|`se`|
   * |**Norwegian**|`no`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Ossetian**|`os`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Romansh**|`rm`|
   * |**Russian**|`ru`|
   * |**Sadri**|`sck`|
   * |**Samoan**|`sm`|
   * |**Sanskrit**|`sa`|
   * |**Santali**|`sat`|
   * |**Scots**|`sco`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Sherpa**|`xsr`|
   * |**Sirmauri**|`srx`|
   * |**Skolt Sami**|`sms`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Southern Sami**|`sma`|
   * |**Spanish**|`es`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tatar**|`tt`|
   * |**Tetum**|`tet`|
   * |**Thangmi**|`thf`|
   * |**Tonga (Tonga Islands)**|`to`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Tuvinian**|`tyv`|
   * |**Uighur**|`ug`|
   * |**Upper Sorbian**|`hsb`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Volapük**|`vo`|
   * |**Walser**|`wae`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Yucateco**|`yua`|
   * |**Zhuang**|`za`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Belarusian**|`be-Cyrl`|
   * |**Belarusian (Latin)**|`be-Latn`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**Kara-Kalpak (Cyrillic)**|`kaa-Cyrl`|
   * |**Kazakh**|`kk-Cyrl`|
   * |**Kazakh (Latin)**|`kk-Latn`|
   * |**Kurdish (Arabic)**|`ku-Arab`|
   * |**Kurdish (Latin)**|`ku-Latn`|
   * |**Serbian (Cyrillic)**|`sr-Cyrl`|
   * |**Serbian (Cyrillic, Montenegro)**|`sr-Cyrl-ME`|
   * |**Serbian (Latin)**|`sr-Latn`|
   * |**Serbian (Latin, Montenegro)**|`sr-Latn-ME`|
   * |**Serbian (Montenegro)**|`sr-ME`|
   * |**Uzbek (Arabic)**|`uz-Arab`|
   * |**Uzbek (Cyrillic)**|`uz-cyrl`|
   *
   * </details>
   *
   * @summary OCR Tables Launch Job
   */
  ocr_ocr_tables_async_create(
    body: types.OcrOcrTablesAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrOcrTablesAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary OCR Tables Get Job Results
   * @throws FetchError<400, types.OcrOcrTablesAsyncRetrieve2Response400>
   * @throws FetchError<403, types.OcrOcrTablesAsyncRetrieve2Response403>
   * @throws FetchError<404, types.OcrOcrTablesAsyncRetrieve2Response404>
   * @throws FetchError<500, types.OcrOcrTablesAsyncRetrieve2Response500>
   */
  ocr_ocr_tables_async_retrieve_2(
    metadata: types.OcrOcrTablesAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.OcrOcrTablesAsyncRetrieve2Response200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**base64**|`latest`|0.25 (per 1 page)|1 page
   * |**dataleon**|`v3.1.0`|0.025 (per 1 page)|1 page
   * |**microsoft**|`rest API 3.0`|0.05 (per 1 page)|1 page
   * |**mindee**|`v2`|0.1 (per 1 page)|1 page
   * |**tabscanner**|`latest`|0.08 (per 1 page)|1 page
   * |**google**|`DocumentAI v1 beta3`|0.01 (per 1 page)|10 page
   * |**klippa**|`v1`|0.1 (per 1 file)|1 file
   * |**veryfi**|`v8`|0.08 (per 1 file)|1 file
   * |**amazon**|`boto3 1.26.8`|0.01 (per 1 page)|1 page
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Catalan**|`ca`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Italian**|`it`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   * |**Turkish**|`tr`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Catalan (Spain)**|`ca-ES`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (United Kingdom)**|`en-GB`|
   * |**English (United States)**|`en-US`|
   * |**French (Canada)**|`fr-CA`|
   * |**French (France)**|`fr-FR`|
   * |**French (Switzerland)**|`fr-CH`|
   * |**German (Germany)**|`de-DE`|
   * |**German (Switzerland)**|`de-CH`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Italian (Switzerland)**|`it-CH`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Spanish (Spain)**|`es-ES`|
   *
   * </details>
   *
   * @summary Receipt Parser
   * @throws FetchError<400, types.OcrReceiptParserCreateResponse400>
   * @throws FetchError<403, types.OcrReceiptParserCreateResponse403>
   * @throws FetchError<404, types.OcrReceiptParserCreateResponse404>
   * @throws FetchError<500, types.OcrReceiptParserCreateResponse500>
   */
  ocr_receipt_parser_create(
    body: types.OcrReceiptParserCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrReceiptParserCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**affinda**|`affinda 1.0.2`|0.07 (per 1 file)|1 file
   * |**hireability**|`hireability 1.0.0`|0.05 (per 1 file)|1 file
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Arabic**|`ar`|
   * |**English**|`en`|
   * |**French**|`fr`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   *
   * </details>
   *
   * @summary Resume Parser
   * @throws FetchError<400, types.OcrResumeParserCreateResponse400>
   * @throws FetchError<403, types.OcrResumeParserCreateResponse403>
   * @throws FetchError<404, types.OcrResumeParserCreateResponse404>
   * @throws FetchError<500, types.OcrResumeParserCreateResponse500>
   */
  ocr_resume_parser_create(
    body: types.OcrResumeParserCreateBodyParam
  ): Promise<FetchResponse<200, types.OcrResumeParserCreateResponse200>>;
  /**
   * Workflow let you create a pipeline of subfeature by inputing an entry data, letting it
   * pass through all the subfeatures and retreiving the result
   *
   *
   * **Note**: You can try Workflow on our [developer
   * portal](https://app.edenai.run/bricks/workflows) and a `description` snippet will
   * automatically get generated as you build your workflow
   *
   * **Example:**
   *
   * Schema: ocr --> automatic_translation --> summarize
   * In this workflow we pass a file as input, ocr parse the text, pass it to translate, and
   * summarize will return a summary of the translated text
   *
   * **Inputs:**
   *
   * Depending on the first subfeature you have three choice for the inital input data:
   * `file`, `text` or `texts`.
   *
   * To create a workflow you have to pass an object to the `description` parameter, the
   * object should look like this:
   *
   *
   * ```
   * [
   *   {
   *     "feature": "ocr",
   *     "subfeature": "ocr",
   *     "params": {
   *       "language": "auto-detect",
   *       "providers": "google"
   *     }
   *   },
   *   {
   *     "feature": "translation",
   *     "subfeature": "automatic_translation",
   *     "params": {
   *       "source_language": "auto-detect",
   *       "target_language": "fr",
   *       "providers": "google"
   *     }
   *   },
   *   {
   *     "feature": "text",
   *     "subfeature": "summarize",
   *     "params": {
   *       "providers": "openai"
   *     }
   *   }
   * ]
   * ```
   *
   * - `description` should be a list of *nodes* each node representing a subfeature.Inside
   * each node, enter the desired feature and subfeature and its params. `params` are the
   * parameters you should normally send to the subfeature as if you were doing a direct call
   * but with a few constraints:
   *     + `providers` should take only one provider name, if you input multiple providers,
   * the response of all the other providers will be ignored
   *     + `file`, `text`, `texts` shouldn't be present in `params` as these are initial
   * inputs
   *
   * **Important!**: description should be sent as a string since the content-type is a
   * form-data
   *
   * - `return_only_last` allows you to chose wether you want a list of all the response
   * returned by each providers or just getting the last response. If set to `true` the
   * response will be the last subfeature result, if set to `false` the reponse will be a
   * list of all subfeature results.
   *
   *
   * @summary Launch a Workflow
   */
  pipeline_create(
    body: types.PipelineCreateBodyParam
  ): Promise<FetchResponse<200, types.PipelineCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**originalityai**|`v1`|0.01 (per 400 char)|400 char
   * |**sapling**|`v1`|0.005 (per 1000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   *
   * </details>
   *
   * @summary AI Content Detection
   * @throws FetchError<400, types.TextAiDetectionCreateResponse400>
   * @throws FetchError<403, types.TextAiDetectionCreateResponse403>
   * @throws FetchError<404, types.TextAiDetectionCreateResponse404>
   * @throws FetchError<500, types.TextAiDetectionCreateResponse500>
   */
  text_ai_detection_create(
    body: types.TextAiDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextAiDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**emvista**|`v1.0`|3.0 (per 1000000 char)|1 char
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
   * |**microsoft**|`v3.1`|0.25 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Arabic**|`ar`|
   * |**Chinese**|`zh`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Hindi**|`hi`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Korean**|`ko`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Norwegian**|`no`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Russian**|`ru`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   *
   * </details>
   *
   * @summary Anonymization
   * @throws FetchError<400, types.TextAnonymizationCreateResponse400>
   * @throws FetchError<403, types.TextAnonymizationCreateResponse403>
   * @throws FetchError<404, types.TextAnonymizationCreateResponse404>
   * @throws FetchError<500, types.TextAnonymizationCreateResponse500>
   */
  text_anonymization_create(
    body: types.TextAnonymizationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextAnonymizationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai - gpt-3.5-turbo**|`v1Beta`|0.002 (per 1000 token)|1 token
   * |**openai - gpt-4-32k-0314**|`v1Beta`|0.12 (per 1000 token)|1 token
   * |**openai - gpt-4-0314**|`v1Beta`|0.06 (per 1000 token)|1 token
   * |**openai - gpt-4**|`v1Beta`|0.06 (per 1000 token)|1 token
   * |**openai - gpt-3.5-turbo-0301**|`v1Beta`|0.002 (per 1000 token)|1 token
   * |**openai - gpt-4-32k**|`v1Beta`|0.12 (per 1000 token)|1 token
   * |**openai**|`v1Beta`|0.12 (per 1000 token)|1 token
   * |**google**|`v1`|0.5 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Chat
   * @throws FetchError<400, types.TextChatCreateResponse400>
   * @throws FetchError<403, types.TextChatCreateResponse403>
   * @throws FetchError<404, types.TextChatCreateResponse404>
   * @throws FetchError<500, types.TextChatCreateResponse500>
   */
  text_chat_create(
    body: types.TextChatCreateBodyParam
  ): Promise<FetchResponse<200, types.TextChatCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai**|`v1`|2.0 (per 1000000 token)|1 token
   * |**google**|`v1`|0.5 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Code Generation
   * @throws FetchError<400, types.TextCodeGenerationCreateResponse400>
   * @throws FetchError<403, types.TextCodeGenerationCreateResponse403>
   * @throws FetchError<404, types.TextCodeGenerationCreateResponse404>
   * @throws FetchError<500, types.TextCodeGenerationCreateResponse500>
   */
  text_code_generation_create(
    body: types.TextCodeGenerationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextCodeGenerationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**cohere**|`2022-12-06`|2.0 (per 1000 request)|1 request
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   *
   *
   * </details>
   *
   *
   *
   * @summary Custom Text Classification
   * @throws FetchError<400, types.TextCustomClassificationCreateResponse400>
   * @throws FetchError<403, types.TextCustomClassificationCreateResponse403>
   * @throws FetchError<404, types.TextCustomClassificationCreateResponse404>
   * @throws FetchError<500, types.TextCustomClassificationCreateResponse500>
   */
  text_custom_classification_create(
    body: types.TextCustomClassificationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextCustomClassificationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**cohere**|`2022-12-06`|2.0 (per 1000 request)|1 request
   *
   *
   * </details>
   *
   *
   *
   * @summary Custom Named Entity Recognition
   * @throws FetchError<400, types.TextCustomNamedEntityRecognitionCreateResponse400>
   * @throws FetchError<403, types.TextCustomNamedEntityRecognitionCreateResponse403>
   * @throws FetchError<404, types.TextCustomNamedEntityRecognitionCreateResponse404>
   * @throws FetchError<500, types.TextCustomNamedEntityRecognitionCreateResponse500>
   */
  text_custom_named_entity_recognition_create(
    body: types.TextCustomNamedEntityRecognitionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextCustomNamedEntityRecognitionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**google**|`v1`|0.1 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Embeddings
   * @throws FetchError<400, types.TextEmbeddingsCreateResponse400>
   * @throws FetchError<403, types.TextEmbeddingsCreateResponse403>
   * @throws FetchError<404, types.TextEmbeddingsCreateResponse404>
   * @throws FetchError<500, types.TextEmbeddingsCreateResponse500>
   */
  text_embeddings_create(
    body: types.TextEmbeddingsCreateBodyParam
  ): Promise<FetchResponse<200, types.TextEmbeddingsCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 1.26.8`|1.0 (per 1000000 char)|300 char
   * |**google**|`v1`|2.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**English**|`en`|
   * |**Japanese**|`ja`|
   * |**Spanish**|`es`|
   *
   * </details>
   *
   * @summary Entity Sentiment
   * @throws FetchError<400, types.TextEntitySentimentCreateResponse400>
   * @throws FetchError<403, types.TextEntitySentimentCreateResponse403>
   * @throws FetchError<404, types.TextEntitySentimentCreateResponse404>
   * @throws FetchError<500, types.TextEntitySentimentCreateResponse500>
   */
  text_entity_sentiment_create(
    body: types.TextEntitySentimentCreateBodyParam
  ): Promise<FetchResponse<200, types.TextEntitySentimentCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**cohere**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - command**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - command-light**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - command-nightly**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - command-light-nightly**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - base**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**cohere - base-light**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**openai - text-ada-001**|`v1`|0.4 (per 1000000 token)|1 token
   * |**openai - text-curie-001**|`v1`|2.0 (per 1000000 token)|1 token
   * |**openai - text-davinci-002**|`v1`|20.0 (per 1000000 token)|1 token
   * |**openai - text-davinci-003**|`v1`|20.0 (per 1000000 token)|1 token
   * |**openai - text-babbage-001**|`v1`|0.5 (per 1000000 token)|1 token
   * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
   * |**google**|`v1`|1.0 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Generation
   * @throws FetchError<400, types.TextGenerationCreateResponse400>
   * @throws FetchError<403, types.TextGenerationCreateResponse403>
   * @throws FetchError<404, types.TextGenerationCreateResponse404>
   * @throws FetchError<500, types.TextGenerationCreateResponse500>
   */
  text_generation_create(
    body: types.TextGenerationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextGenerationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
   * |**ibm**|`v1 (2021-08-01)`|0.3 (per 1000000 char)|10000 char
   * |**microsoft**|`v3.1`|1.0 (per 1000000 char)|1000 char
   * |**emvista**|`v1.0`|1.0 (per 1000000 char)|1000 char
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**tenstorrent**|`v1.0.0`|0.7 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Arabic**|`ar`|
   * |**Bulgarian**|`bg`|
   * |**Catalan**|`ca`|
   * |**Chinese**|`zh`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Indonesian**|`id`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Korean**|`ko`|
   * |**Latvian**|`lv`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   * |**Turkish**|`tr`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   *
   * </details>
   *
   * @summary Keyword Extraction
   * @throws FetchError<400, types.TextKeywordExtractionCreateResponse400>
   * @throws FetchError<403, types.TextKeywordExtractionCreateResponse403>
   * @throws FetchError<404, types.TextKeywordExtractionCreateResponse404>
   * @throws FetchError<500, types.TextKeywordExtractionCreateResponse500>
   */
  text_keyword_extraction_create(
    body: types.TextKeywordExtractionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextKeywordExtractionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**microsoft**|`v1.0`|1.0 (per 1000 request)|1 request
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**clarifai**|`8.0.0`|1.2 (per 1000 request)|1 request
   * |**google**|`v1`|5.0 (per 1000000 char)|100 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Aragonese**|`an`|
   * |**Armenian**|`hy`|
   * |**Assamese**|`as`|
   * |**Asturian**|`ast`|
   * |**Azerbaijani**|`az`|
   * |**Bashkir**|`ba`|
   * |**Basque**|`eu`|
   * |**Bavarian**|`bar`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bishnupriya**|`bpy`|
   * |**Bosnian**|`bs`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Central Khmer**|`km`|
   * |**Central Kurdish**|`ckb`|
   * |**Chechen**|`ce`|
   * |**Cherokee**|`chr`|
   * |**Chinese**|`zh`|
   * |**Chuvash**|`cv`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Fulah**|`ff`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Ido**|`io`|
   * |**Igbo**|`ig`|
   * |**Indonesian**|`id`|
   * |**Inuktitut**|`iu`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Kinyarwanda**|`rw`|
   * |**Kirghiz**|`ky`|
   * |**Konkani (macrolanguage)**|`kok`|
   * |**Korean**|`ko`|
   * |**Lahnda**|`lah`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Lombard**|`lmo`|
   * |**Low German**|`nds`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Minangkabau**|`min`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Norwegian Nynorsk**|`nn`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Oriya (macrolanguage)**|`or`|
   * |**Panjabi**|`pa`|
   * |**Pedi**|`nso`|
   * |**Persian**|`fa`|
   * |**Piemontese**|`pms`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Quechua**|`qu`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Scots**|`sco`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Serbo-Croatian**|`sh`|
   * |**Sicilian**|`scn`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**South Azerbaijani**|`azb`|
   * |**Southern Sotho**|`st`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Tigrinya**|`ti`|
   * |**Tswana**|`tn`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Volapük**|`vo`|
   * |**Waray (Philippines)**|`war`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Wolof**|`wo`|
   * |**Xhosa**|`xh`|
   * |**Yoruba**|`yo`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**Low German (Netherlands)**|`nds-NL`|
   *
   * </details>
   *
   * @summary Moderation
   * @throws FetchError<400, types.TextModerationCreateResponse400>
   * @throws FetchError<403, types.TextModerationCreateResponse403>
   * @throws FetchError<404, types.TextModerationCreateResponse404>
   * @throws FetchError<500, types.TextModerationCreateResponse500>
   */
  text_moderation_create(
    body: types.TextModerationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextModerationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
   * |**google**|`v1`|1.0 (per 1000000 char)|1000 char
   * |**ibm**|`v1 (2021-08-01)`|0.3 (per 1000000 char)|10000 char
   * |**lettria**|`v5.5.2`|2.0 (per 1000000 char)|1000 char
   * |**microsoft**|`v3.1`|1.0 (per 1000000 char)|1000 char
   * |**neuralspace**|`v1`|0.007 (per 1 request)|1 request
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**tenstorrent**|`v1.0.0`|1.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Arabic**|`ar`|
   * |**Aragonese**|`an`|
   * |**Armenian**|`hy`|
   * |**Assamese**|`as`|
   * |**Azerbaijani**|`az`|
   * |**Bashkir**|`ba`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Chechen**|`ce`|
   * |**Chinese**|`zh`|
   * |**Chuvash**|`cv`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Estonian**|`et`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Haitian**|`ht`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Indonesian**|`id`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Kirghiz**|`ky`|
   * |**Korean**|`ko`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Marathi**|`mr`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Serbian**|`sr`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Turkish**|`tr`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Yoruba**|`yo`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**English (United States)**|`en-US`|
   * |**French (France)**|`fr-FR`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   *
   * </details>
   *
   * @summary Named Entity Recognition
   * @throws FetchError<400, types.TextNamedEntityRecognitionCreateResponse400>
   * @throws FetchError<403, types.TextNamedEntityRecognitionCreateResponse403>
   * @throws FetchError<404, types.TextNamedEntityRecognitionCreateResponse404>
   * @throws FetchError<500, types.TextNamedEntityRecognitionCreateResponse500>
   */
  text_named_entity_recognition_create(
    body: types.TextNamedEntityRecognitionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextNamedEntityRecognitionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**originalityai**|`v1`|0.01 (per 400 char)|400 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Plagia Detection
   * @throws FetchError<400, types.TextPlagiaDetectionCreateResponse400>
   * @throws FetchError<403, types.TextPlagiaDetectionCreateResponse403>
   * @throws FetchError<404, types.TextPlagiaDetectionCreateResponse404>
   * @throws FetchError<500, types.TextPlagiaDetectionCreateResponse500>
   */
  text_plagia_detection_create(
    body: types.TextPlagiaDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextPlagiaDetectionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai**|`v3.0.0`|0.24 (per 1000 token)|1 token
   *
   *
   * </details>
   *
   *
   *
   * @summary Prompt Optimization
   * @throws FetchError<400, types.TextPromptOptimizationCreateResponse400>
   * @throws FetchError<403, types.TextPromptOptimizationCreateResponse403>
   * @throws FetchError<404, types.TextPromptOptimizationCreateResponse404>
   * @throws FetchError<500, types.TextPromptOptimizationCreateResponse500>
   */
  text_prompt_optimization_create(
    body: types.TextPromptOptimizationCreateBodyParam
  ): Promise<FetchResponse<200, types.TextPromptOptimizationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**huggingface**|`v1`|0.02 (per 1000 char)|1 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**tenstorrent**|`v1.0.0`|10.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   *
   *
   * @summary Question Answer
   * @throws FetchError<400, types.TextQuestionAnswerCreateResponse400>
   * @throws FetchError<403, types.TextQuestionAnswerCreateResponse403>
   * @throws FetchError<404, types.TextQuestionAnswerCreateResponse404>
   * @throws FetchError<500, types.TextQuestionAnswerCreateResponse500>
   */
  text_question_answer_create(
    body: types.TextQuestionAnswerCreateBodyParam
  ): Promise<FetchResponse<200, types.TextQuestionAnswerCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   *
   *
   * </details>
   *
   *
   *
   * @summary Search
   * @throws FetchError<400, types.TextSearchCreateResponse400>
   * @throws FetchError<403, types.TextSearchCreateResponse403>
   * @throws FetchError<404, types.TextSearchCreateResponse404>
   * @throws FetchError<500, types.TextSearchCreateResponse500>
   */
  text_search_create(
    body: types.TextSearchCreateBodyParam
  ): Promise<FetchResponse<200, types.TextSearchCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
   * |**connexun**|`v1.0`|2.0 (per 1000 request)|1 request
   * |**google**|`v1`|1.0 (per 1000000 char)|1000 char
   * |**ibm**|`v1 (2021-08-01)`|0.3 (per 1000000 char)|10000 char
   * |**lettria**|`v5.5.2`|2.0 (per 1000000 char)|1000 char
   * |**microsoft**|`v3.1`|1.0 (per 1000000 char)|1000 char
   * |**emvista**|`v1.0`|3.0 (per 1000000 char)|1000 char
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**tenstorrent**|`v1.1.0`|0.7 (per 1000000 char)|1000 char
   * |**sapling**|`v1`|20.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Arabic**|`ar`|
   * |**Bengali**|`bn`|
   * |**Chinese**|`zh`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Hindi**|`hi`|
   * |**Indonesian**|`id`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Korean**|`ko`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Norwegian**|`no`|
   * |**Panjabi**|`pa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   * |**Tamil**|`ta`|
   * |**Thai**|`th`|
   * |**Turkish**|`tr`|
   * |**Ukrainian**|`uk`|
   * |**Vietnamese**|`vi`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**English (United States)**|`en-US`|
   * |**French (France)**|`fr-FR`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   *
   * </details>
   *
   * @summary Sentiment Analysis
   * @throws FetchError<400, types.TextSentimentAnalysisCreateResponse400>
   * @throws FetchError<403, types.TextSentimentAnalysisCreateResponse403>
   * @throws FetchError<404, types.TextSentimentAnalysisCreateResponse404>
   * @throws FetchError<500, types.TextSentimentAnalysisCreateResponse500>
   */
  text_sentiment_analysis_create(
    body: types.TextSentimentAnalysisCreateBodyParam
  ): Promise<FetchResponse<200, types.TextSentimentAnalysisCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**microsoft**|`v7`|0.3 (per 1000 request)|1 request
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**prowritingaid**|`v1.0`|10.0 (per 1000 request)|1 request
   * |**cohere**|`2022-12-06`|2.5 (per 1000000 char)|1000 char
   * |**sapling**|`v1`|2.0 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Armenian**|`hy`|
   * |**Azerbaijani**|`az`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Central Khmer**|`km`|
   * |**Chinese**|`zh`|
   * |**Corsican**|`co`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Esperanto**|`eo`|
   * |**Estonian**|`et`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hawaiian**|`haw`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hmong**|`hmn`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Igbo**|`ig`|
   * |**Indonesian**|`id`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Kinyarwanda**|`rw`|
   * |**Kirghiz**|`ky`|
   * |**Korean**|`ko`|
   * |**Kurdish**|`ku`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Nyanja**|`ny`|
   * |**Oriya (macrolanguage)**|`or`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Samoan**|`sm`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Shona**|`sn`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Southern Sotho**|`st`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Xhosa**|`xh`|
   * |**Yiddish**|`yi`|
   * |**Yoruba**|`yo`|
   * |**Zulu**|`zu`|
   * |**jp**|`jp`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Simplified)**|`zh-hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-hant`|
   * |**English (United Kingdom)**|`en-gb`|
   * |**Portuguese (Brazil)**|`pt-br`|
   * |**Portuguese (Portugal)**|`pt-pt`|
   *
   * </details>
   *
   * @summary Spell Check
   * @throws FetchError<400, types.TextSpellCheckCreateResponse400>
   * @throws FetchError<403, types.TextSpellCheckCreateResponse403>
   * @throws FetchError<404, types.TextSpellCheckCreateResponse404>
   * @throws FetchError<500, types.TextSpellCheckCreateResponse500>
   */
  text_spell_check_create(
    body: types.TextSpellCheckCreateBodyParam
  ): Promise<FetchResponse<200, types.TextSpellCheckCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**connexun**|`v1.0`|2.0 (per 1000 request)|1 request
   * |**microsoft**|`v3.1`|2.0 (per 1000000 char)|1000 char
   * |**openai**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**openai - text-ada-001**|`v3.0.0`|0.4 (per 1000000 token)|1 token
   * |**openai - text-babbage-001**|`v3.0.0`|0.5 (per 1000000 token)|1 token
   * |**openai - text-curie-001**|`v3.0.0`|2.0 (per 1000000 token)|1 token
   * |**openai - text-davinci-002**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**openai - text-davinci-003**|`v3.0.0`|20.0 (per 1000000 token)|1 token
   * |**emvista**|`v1.0`|1.0 (per 1000000 char)|1000 char
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**cohere**|`2022-12-06`|5.0 (per 2000000 char)|2000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Abkhazian**|`ab`|
   * |**Acoli**|`ach`|
   * |**Afar**|`aa`|
   * |**Afrikaans**|`af`|
   * |**Akan**|`ak`|
   * |**Albanian**|`sq`|
   * |**American Sign Language**|`ase`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Aragonese**|`an`|
   * |**Argentine Sign Language**|`aed`|
   * |**Armenian**|`hy`|
   * |**Assamese**|`as`|
   * |**Avaric**|`av`|
   * |**Avestan**|`ae`|
   * |**Aymara**|`ay`|
   * |**Azerbaijani**|`az`|
   * |**Bambara**|`bm`|
   * |**Bashkir**|`ba`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bemba (Zambia)**|`bem`|
   * |**Bengali**|`bn`|
   * |**Berber languages**|`ber`|
   * |**Bihari languages**|`bh`|
   * |**Bislama**|`bi`|
   * |**Bosnian**|`bs`|
   * |**Brazilian Sign Language**|`bzs`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Celtic languages**|`cel`|
   * |**Central Bikol**|`bcl`|
   * |**Central Khmer**|`km`|
   * |**Chamorro**|`ch`|
   * |**Chechen**|`ce`|
   * |**Chilean Sign Language**|`csg`|
   * |**Chinese**|`zh`|
   * |**Church Slavic**|`cu`|
   * |**Chuukese**|`chk`|
   * |**Chuvash**|`cv`|
   * |**Colombian Sign Language**|`csn`|
   * |**Congo Swahili**|`swc`|
   * |**Cornish**|`kw`|
   * |**Corsican**|`co`|
   * |**Cree**|`cr`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dhivehi**|`dv`|
   * |**Dutch**|`nl`|
   * |**Dzongkha**|`dz`|
   * |**Efik**|`efi`|
   * |**English**|`en`|
   * |**Esperanto**|`eo`|
   * |**Estonian**|`et`|
   * |**Ewe**|`ee`|
   * |**Faroese**|`fo`|
   * |**Fijian**|`fj`|
   * |**Finnish**|`fi`|
   * |**Finnish Sign Language**|`fse`|
   * |**Fon**|`fon`|
   * |**French**|`fr`|
   * |**Fulah**|`ff`|
   * |**Ga**|`gaa`|
   * |**Galician**|`gl`|
   * |**Ganda**|`lg`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gilbertese**|`gil`|
   * |**Guarani**|`gn`|
   * |**Gujarati**|`gu`|
   * |**Gun**|`guw`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hebrew**|`he`|
   * |**Herero**|`hz`|
   * |**Hiligaynon**|`hil`|
   * |**Hindi**|`hi`|
   * |**Hiri Motu**|`ho`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Ido**|`io`|
   * |**Igbo**|`ig`|
   * |**Iloko**|`ilo`|
   * |**Indonesian**|`id`|
   * |**Interlingua (International Auxiliary Language Association)**|`ia`|
   * |**Interlingue**|`ie`|
   * |**Inuktitut**|`iu`|
   * |**Inupiaq**|`ik`|
   * |**Irish**|`ga`|
   * |**Isoko**|`iso`|
   * |**Isthmus Zapotec**|`zai`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kabyle**|`kab`|
   * |**Kalaallisut**|`kl`|
   * |**Kannada**|`kn`|
   * |**Kanuri**|`kr`|
   * |**Kaonde**|`kqn`|
   * |**Kashmiri**|`ks`|
   * |**Kazakh**|`kk`|
   * |**Kikuyu**|`ki`|
   * |**Kinyarwanda**|`rw`|
   * |**Kirghiz**|`ky`|
   * |**Komi**|`kv`|
   * |**Kongo**|`kg`|
   * |**Korean**|`ko`|
   * |**Kuanyama**|`kj`|
   * |**Kurdish**|`ku`|
   * |**Kwangali**|`kwn`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Limburgan**|`li`|
   * |**Lingala**|`ln`|
   * |**Lithuanian**|`lt`|
   * |**Lozi**|`loz`|
   * |**Luba-Katanga**|`lu`|
   * |**Luba-Lulua**|`lua`|
   * |**Lunda**|`lun`|
   * |**Luo (Kenya and Tanzania)**|`luo`|
   * |**Lushai**|`lus`|
   * |**Luvale**|`lue`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Manx**|`gv`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Marshallese**|`mh`|
   * |**Mexican Sign Language**|`mfs`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Morisyen**|`mfe`|
   * |**Mossi**|`mos`|
   * |**Nauru**|`na`|
   * |**Navajo**|`nv`|
   * |**Ndonga**|`ng`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Niuean**|`niu`|
   * |**North Ndebele**|`nd`|
   * |**Northern Sami**|`se`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Norwegian Nynorsk**|`nn`|
   * |**Nyaneka**|`nyk`|
   * |**Nyanja**|`ny`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Ojibwa**|`oj`|
   * |**Oriya (macrolanguage)**|`or`|
   * |**Oromo**|`om`|
   * |**Ossetian**|`os`|
   * |**Pali**|`pi`|
   * |**Pangasinan**|`pag`|
   * |**Panjabi**|`pa`|
   * |**Papiamento**|`pap`|
   * |**Pedi**|`nso`|
   * |**Persian**|`fa`|
   * |**Peruvian Sign Language**|`prl`|
   * |**Pijin**|`pis`|
   * |**Pohnpeian**|`pon`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Quechua**|`qu`|
   * |**Romance languages**|`roa`|
   * |**Romanian**|`ro`|
   * |**Romansh**|`rm`|
   * |**Rundi**|`rn`|
   * |**Russian**|`ru`|
   * |**Ruund**|`rnd`|
   * |**Samoan**|`sm`|
   * |**San Salvador Kongo**|`kwy`|
   * |**Sango**|`sg`|
   * |**Sanskrit**|`sa`|
   * |**Sardinian**|`sc`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Seselwa Creole French**|`crs`|
   * |**Shona**|`sn`|
   * |**Sichuan Yi**|`ii`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**South Ndebele**|`nr`|
   * |**Southern Sotho**|`st`|
   * |**Spanish**|`es`|
   * |**Spanish Sign Language**|`ssp`|
   * |**Sranan Tongo**|`srn`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swati**|`ss`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tahitian**|`ty`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Tetela**|`tll`|
   * |**Tetun Dili**|`tdt`|
   * |**Thai**|`th`|
   * |**Tibetan**|`bo`|
   * |**Tigrinya**|`ti`|
   * |**Tiv**|`tiv`|
   * |**Tok Pisin**|`tpi`|
   * |**Tonga (Tonga Islands)**|`to`|
   * |**Tonga (Zambia)**|`toi`|
   * |**Tsonga**|`ts`|
   * |**Tswana**|`tn`|
   * |**Tumbuka**|`tum`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Tuvalu**|`tvl`|
   * |**Twi**|`tw`|
   * |**Tzotzil**|`tzo`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Umbundu**|`umb`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Venda**|`ve`|
   * |**Venezuelan Sign Language**|`vsl`|
   * |**Vietnamese**|`vi`|
   * |**Volapük**|`vo`|
   * |**Wallisian**|`wls`|
   * |**Walloon**|`wa`|
   * |**Waray (Philippines)**|`war`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Wolaytta**|`wal`|
   * |**Wolof**|`wo`|
   * |**Xhosa**|`xh`|
   * |**Yapese**|`yap`|
   * |**Yiddish**|`yi`|
   * |**Yoruba**|`yo`|
   * |**Yucateco**|`yua`|
   * |**Yue Chinese**|`yue`|
   * |**Zande (individual language)**|`zne`|
   * |**Zhuang**|`za`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Brazil)**|`pt-br`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Portuguese (Portugal)**|`pt-pt`|
   *
   * </details>
   *
   * @summary Summarize
   * @throws FetchError<400, types.TextSummarizeCreateResponse400>
   * @throws FetchError<403, types.TextSummarizeCreateResponse403>
   * @throws FetchError<404, types.TextSummarizeCreateResponse404>
   * @throws FetchError<500, types.TextSummarizeCreateResponse500>
   */
  text_summarize_create(
    body: types.TextSummarizeCreateBodyParam
  ): Promise<FetchResponse<200, types.TextSummarizeCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|0.5 (per 1000000 char)|300 char
   * |**google**|`v1`|0.5 (per 1000000 char)|1000 char
   * |**ibm**|`v1 (2021-08-01)`|0.3 (per 1000000 char)|10000 char
   * |**lettria**|`v5.5.2`|2.0 (per 1000000 char)|1000 char
   * |**emvista**|`v1.0`|1.0 (per 1000000 char)|1 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Arabic**|`ar`|
   * |**Chinese**|`zh`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Korean**|`ko`|
   * |**Norwegian**|`no`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Slovak**|`sk`|
   * |**Spanish**|`es`|
   * |**Swedish**|`sv`|
   * |**Turkish**|`tr`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**English (United States)**|`en-US`|
   * |**French (France)**|`fr-FR`|
   *
   * </details>
   *
   * @summary Syntax Analysis
   * @throws FetchError<400, types.TextSyntaxAnalysisCreateResponse400>
   * @throws FetchError<403, types.TextSyntaxAnalysisCreateResponse403>
   * @throws FetchError<404, types.TextSyntaxAnalysisCreateResponse404>
   * @throws FetchError<500, types.TextSyntaxAnalysisCreateResponse500>
   */
  text_syntax_analysis_create(
    body: types.TextSyntaxAnalysisCreateBodyParam
  ): Promise<FetchResponse<200, types.TextSyntaxAnalysisCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**google**|`v1`|2.0 (per 1000000 char)|1000 char
   * |**ibm**|`v1 (2021-08-01)`|0.3 (per 1000000 char)|10000 char
   * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
   * |**tenstorrent**|`v1.0.0`|2.0 (per 1000000 char)|1000 char
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Arabic**|`ar`|
   * |**Chinese**|`zh`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**French**|`fr`|
   * |**German**|`de`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Korean**|`ko`|
   * |**Portuguese**|`pt`|
   * |**Russian**|`ru`|
   * |**Spanish**|`es`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   *
   * </details>
   *
   * @summary Topic Extraction
   * @throws FetchError<400, types.TextTopicExtractionCreateResponse400>
   * @throws FetchError<403, types.TextTopicExtractionCreateResponse403>
   * @throws FetchError<404, types.TextTopicExtractionCreateResponse404>
   * @throws FetchError<500, types.TextTopicExtractionCreateResponse500>
   */
  text_topic_extraction_create(
    body: types.TextTopicExtractionCreateBodyParam
  ): Promise<FetchResponse<200, types.TextTopicExtractionCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|15.0 (per 1000000 char)|1 char
   * |**google**|`v3`|20.0 (per 1000000 char)|1 char
   * |**ibm**|`v3 (2018-05-01)`|20.0 (per 1000000 char)|1000 char
   * |**microsoft**|`v3.0`|10.0 (per 1000000 char)|1 char
   * |**neuralspace**|`v1`|7.0 (per 1000 request)|1 request
   * |**phedone**|`-`|4.0 (per 1000000 char)|1000 char
   * |**deepl**|`v2`|20.0 (per 1000000 char)|1 char
   * |**modernmt**|`1.2.8`|8.0 (per 1000000 char)|1 char
   * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Abkhazian**|`ab`|
   * |**Acoli**|`ach`|
   * |**Afar**|`aa`|
   * |**Afrikaans**|`af`|
   * |**Akan**|`ak`|
   * |**Albanian**|`sq`|
   * |**American Sign Language**|`ase`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Aragonese**|`an`|
   * |**Argentine Sign Language**|`aed`|
   * |**Armenian**|`hy`|
   * |**Assamese**|`as`|
   * |**Avaric**|`av`|
   * |**Avestan**|`ae`|
   * |**Aymara**|`ay`|
   * |**Azerbaijani**|`az`|
   * |**Bambara**|`bm`|
   * |**Bashkir**|`ba`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bemba (Zambia)**|`bem`|
   * |**Bengali**|`bn`|
   * |**Berber languages**|`ber`|
   * |**Bihari languages**|`bh`|
   * |**Bislama**|`bi`|
   * |**Bosnian**|`bs`|
   * |**Brazilian Sign Language**|`bzs`|
   * |**Breton**|`br`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Celtic languages**|`cel`|
   * |**Central Bikol**|`bcl`|
   * |**Central Khmer**|`km`|
   * |**Chamorro**|`ch`|
   * |**Chechen**|`ce`|
   * |**Chilean Sign Language**|`csg`|
   * |**Chinese**|`zh`|
   * |**Church Slavic**|`cu`|
   * |**Chuukese**|`chk`|
   * |**Chuvash**|`cv`|
   * |**Colombian Sign Language**|`csn`|
   * |**Congo Swahili**|`swc`|
   * |**Cornish**|`kw`|
   * |**Corsican**|`co`|
   * |**Cree**|`cr`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dari**|`prs`|
   * |**Dhivehi**|`dv`|
   * |**Dutch**|`nl`|
   * |**Dzongkha**|`dz`|
   * |**Efik**|`efi`|
   * |**English**|`en`|
   * |**Esperanto**|`eo`|
   * |**Estonian**|`et`|
   * |**Ewe**|`ee`|
   * |**Faroese**|`fo`|
   * |**Fijian**|`fj`|
   * |**Filipino**|`fil`|
   * |**Finnish**|`fi`|
   * |**Finnish Sign Language**|`fse`|
   * |**Fon**|`fon`|
   * |**French**|`fr`|
   * |**Fulah**|`ff`|
   * |**Ga**|`gaa`|
   * |**Galician**|`gl`|
   * |**Ganda**|`lg`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gilbertese**|`gil`|
   * |**Guarani**|`gn`|
   * |**Gujarati**|`gu`|
   * |**Gun**|`guw`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hawaiian**|`haw`|
   * |**Hebrew**|`he`|
   * |**Herero**|`hz`|
   * |**Hiligaynon**|`hil`|
   * |**Hindi**|`hi`|
   * |**Hiri Motu**|`ho`|
   * |**Hmong**|`hmn`|
   * |**Hmong Daw**|`mww`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Ido**|`io`|
   * |**Igbo**|`ig`|
   * |**Iloko**|`ilo`|
   * |**Indonesian**|`id`|
   * |**Interlingua (International Auxiliary Language Association)**|`ia`|
   * |**Interlingue**|`ie`|
   * |**Inuinnaqtun**|`ikt`|
   * |**Inuktitut**|`iu`|
   * |**Inupiaq**|`ik`|
   * |**Irish**|`ga`|
   * |**Isoko**|`iso`|
   * |**Isthmus Zapotec**|`zai`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kabyle**|`kab`|
   * |**Kalaallisut**|`kl`|
   * |**Kannada**|`kn`|
   * |**Kanuri**|`kr`|
   * |**Kaonde**|`kqn`|
   * |**Kashmiri**|`ks`|
   * |**Kazakh**|`kk`|
   * |**Kikuyu**|`ki`|
   * |**Kinyarwanda**|`rw`|
   * |**Kirghiz**|`ky`|
   * |**Klingon**|`tlh`|
   * |**Komi**|`kv`|
   * |**Kongo**|`kg`|
   * |**Korean**|`ko`|
   * |**Kuanyama**|`kj`|
   * |**Kurdish**|`ku`|
   * |**Kwangali**|`kwn`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Limburgan**|`li`|
   * |**Lingala**|`ln`|
   * |**Literary Chinese**|`lzh`|
   * |**Lithuanian**|`lt`|
   * |**Lozi**|`loz`|
   * |**Luba-Katanga**|`lu`|
   * |**Luba-Lulua**|`lua`|
   * |**Lunda**|`lun`|
   * |**Luo (Kenya and Tanzania)**|`luo`|
   * |**Lushai**|`lus`|
   * |**Luvale**|`lue`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Manx**|`gv`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Marshallese**|`mh`|
   * |**Mexican Sign Language**|`mfs`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Morisyen**|`mfe`|
   * |**Mossi**|`mos`|
   * |**Nauru**|`na`|
   * |**Navajo**|`nv`|
   * |**Ndonga**|`ng`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Niuean**|`niu`|
   * |**North Ndebele**|`nd`|
   * |**Northern Kurdish**|`kmr`|
   * |**Northern Sami**|`se`|
   * |**Norwegian**|`no`|
   * |**Norwegian Bokmål**|`nb`|
   * |**Norwegian Nynorsk**|`nn`|
   * |**Nyaneka**|`nyk`|
   * |**Nyanja**|`ny`|
   * |**Occitan (post 1500)**|`oc`|
   * |**Ojibwa**|`oj`|
   * |**Oriya (macrolanguage)**|`or`|
   * |**Oromo**|`om`|
   * |**Ossetian**|`os`|
   * |**Pali**|`pi`|
   * |**Pangasinan**|`pag`|
   * |**Panjabi**|`pa`|
   * |**Papiamento**|`pap`|
   * |**Pedi**|`nso`|
   * |**Persian**|`fa`|
   * |**Peruvian Sign Language**|`prl`|
   * |**Pijin**|`pis`|
   * |**Pohnpeian**|`pon`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Quechua**|`qu`|
   * |**Querétaro Otomi**|`otq`|
   * |**Romance languages**|`roa`|
   * |**Romanian**|`ro`|
   * |**Romansh**|`rm`|
   * |**Rundi**|`rn`|
   * |**Russian**|`ru`|
   * |**Ruund**|`rnd`|
   * |**Samoan**|`sm`|
   * |**San Salvador Kongo**|`kwy`|
   * |**Sango**|`sg`|
   * |**Sanskrit**|`sa`|
   * |**Sardinian**|`sc`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Serbo-Croatian**|`sh`|
   * |**Seselwa Creole French**|`crs`|
   * |**Shona**|`sn`|
   * |**Sichuan Yi**|`ii`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**South Ndebele**|`nr`|
   * |**Southern Sotho**|`st`|
   * |**Spanish**|`es`|
   * |**Spanish Sign Language**|`ssp`|
   * |**Sranan Tongo**|`srn`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swati**|`ss`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tahitian**|`ty`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Tetela**|`tll`|
   * |**Tetun Dili**|`tdt`|
   * |**Thai**|`th`|
   * |**Tibetan**|`bo`|
   * |**Tigrinya**|`ti`|
   * |**Tiv**|`tiv`|
   * |**Tok Pisin**|`tpi`|
   * |**Tonga (Tonga Islands)**|`to`|
   * |**Tonga (Zambia)**|`toi`|
   * |**Tsonga**|`ts`|
   * |**Tswana**|`tn`|
   * |**Tumbuka**|`tum`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Tuvalu**|`tvl`|
   * |**Twi**|`tw`|
   * |**Tzotzil**|`tzo`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Umbundu**|`umb`|
   * |**Upper Sorbian**|`hsb`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Venda**|`ve`|
   * |**Venezuelan Sign Language**|`vsl`|
   * |**Vietnamese**|`vi`|
   * |**Volapük**|`vo`|
   * |**Wallisian**|`wls`|
   * |**Walloon**|`wa`|
   * |**Waray (Philippines)**|`war`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Wolaytta**|`wal`|
   * |**Wolof**|`wo`|
   * |**Xhosa**|`xh`|
   * |**Yapese**|`yap`|
   * |**Yiddish**|`yi`|
   * |**Yoruba**|`yo`|
   * |**Yucateco**|`yua`|
   * |**Yue Chinese**|`yue`|
   * |**Zande (individual language)**|`zne`|
   * |**Zhuang**|`za`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Arabic (Argentina)**|`ar-AR`|
   * |**Bangla (Bangladesh)**|`bn-BD`|
   * |**Basque (Spain)**|`eu-ES`|
   * |**Bosnian (Bosnia & Herzegovina)**|`bs-BA`|
   * |**Bulgarian (Bulgaria)**|`bg-BG`|
   * |**Catalan (Spain)**|`ca-ES`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Simplified)**|`zh-Hans`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   * |**Chinese (Traditional)**|`zh-Hant`|
   * |**Croatian (Croatia)**|`hr-HR`|
   * |**Czech (Czechia)**|`cs-CZ`|
   * |**Danish (Denmark)**|`da-DK`|
   * |**Dutch (Netherlands)**|`nl-NL`|
   * |**English (United Kingdom)**|`en-GB`|
   * |**English (United States)**|`en-US`|
   * |**Estonian (Estonia)**|`et-EE`|
   * |**Finnish (Finland)**|`fi-FI`|
   * |**French (Canada)**|`fr-CA`|
   * |**French (France)**|`fr-FR`|
   * |**German (Germany)**|`de-DE`|
   * |**Greek (Greece)**|`el-GR`|
   * |**Gujarati (India)**|`gu-IN`|
   * |**Hebrew (Israel)**|`he-IL`|
   * |**Hindi (India)**|`hi-IN`|
   * |**Hungarian (Hungary)**|`hu-HU`|
   * |**Indonesian (Indonesia)**|`id-ID`|
   * |**Inuktitut (Latin)**|`iu-Latn`|
   * |**Irish (Ireland)**|`ga-IE`|
   * |**Italian (Italy)**|`it-IT`|
   * |**Japanese (Japan)**|`ja-JP`|
   * |**Kannada (India)**|`kn-IN`|
   * |**Klingon (Klingon (KLI pIqaD))**|`tlh-Piqd`|
   * |**Klingon (Latin)**|`tlh-Latn`|
   * |**Korean (South Korea)**|`ko-KR`|
   * |**Latvian (Latvia)**|`lv-LV`|
   * |**Lithuanian (Lithuania)**|`lt-LT`|
   * |**Malay (Malaysia)**|`ms-MY`|
   * |**Malayalam (India)**|`ml-IN`|
   * |**Maltese (Malta)**|`mt-MT`|
   * |**Marathi (India)**|`mr-IN`|
   * |**Mongolian (Cyrillic)**|`mn-Cyrl`|
   * |**Mongolian (Mongolian)**|`mn-Mong`|
   * |**Nepali (Nepal)**|`ne-NP`|
   * |**Norwegian Bokmål (Norway)**|`nb-NO`|
   * |**Persian (Afghanistan)**|`fa-AF`|
   * |**Polish (Poland)**|`pl-PL`|
   * |**Portuguese (Brazil)**|`pt-BR`|
   * |**Portuguese (Portugal)**|`pt-PT`|
   * |**Punjabi (India)**|`pa-IN`|
   * |**Romanian (Romania)**|`ro-RO`|
   * |**Russian (Russia)**|`ru-RU`|
   * |**Serbian (Cyrillic)**|`sr-Cyrl`|
   * |**Serbian (Latin)**|`sr-Latn`|
   * |**Serbian (Montenegro)**|`sr-ME`|
   * |**Serbian (Serbia)**|`sr-RS`|
   * |**Sinhala (Sri Lanka)**|`si-LK`|
   * |**Slovak (Slovakia)**|`sk-SK`|
   * |**Slovenian (Slovenia)**|`sl-SI`|
   * |**Spanish (Latin America)**|`es-419`|
   * |**Spanish (Mexico)**|`es-MX`|
   * |**Spanish (Spain)**|`es-ES`|
   * |**Swedish (Sweden)**|`sv-SE`|
   * |**Tamil (India)**|`ta-IN`|
   * |**Telugu (India)**|`te-IN`|
   * |**Thai (Thailand)**|`th-TH`|
   * |**Turkish (Turkey)**|`tr-TR`|
   * |**Ukrainian (Ukraine)**|`uk-UA`|
   * |**Urdu (Pakistan)**|`ur-PK`|
   * |**Vietnamese (Vietnam)**|`vi-VN`|
   * |**Welsh (United Kingdom)**|`cy-GB`|
   *
   * </details>
   *
   * @summary Automatic Translation
   * @throws FetchError<400, types.TranslationAutomaticTranslationCreateResponse400>
   * @throws FetchError<403, types.TranslationAutomaticTranslationCreateResponse403>
   * @throws FetchError<404, types.TranslationAutomaticTranslationCreateResponse404>
   * @throws FetchError<500, types.TranslationAutomaticTranslationCreateResponse500>
   */
  translation_automatic_translation_create(
    body: types.TranslationAutomaticTranslationCreateBodyParam
  ): Promise<FetchResponse<200, types.TranslationAutomaticTranslationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**deepl**|`v2`|2.0 (per 20 page)|20 page
   * |**google**|`v3`|0.08 (per 1 page)|1 page
   *
   *
   * </details>
   *
   * <details><summary>Supported Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Afrikaans**|`af`|
   * |**Albanian**|`sq`|
   * |**Amharic**|`am`|
   * |**Arabic**|`ar`|
   * |**Armenian**|`hy`|
   * |**Azerbaijani**|`az`|
   * |**Basque**|`eu`|
   * |**Belarusian**|`be`|
   * |**Bengali**|`bn`|
   * |**Bosnian**|`bs`|
   * |**Bulgarian**|`bg`|
   * |**Burmese**|`my`|
   * |**Catalan**|`ca`|
   * |**Cebuano**|`ceb`|
   * |**Central Khmer**|`km`|
   * |**Chinese**|`zh`|
   * |**Corsican**|`co`|
   * |**Croatian**|`hr`|
   * |**Czech**|`cs`|
   * |**Danish**|`da`|
   * |**Dutch**|`nl`|
   * |**English**|`en`|
   * |**Esperanto**|`eo`|
   * |**Estonian**|`et`|
   * |**Finnish**|`fi`|
   * |**French**|`fr`|
   * |**Galician**|`gl`|
   * |**Georgian**|`ka`|
   * |**German**|`de`|
   * |**Gujarati**|`gu`|
   * |**Haitian**|`ht`|
   * |**Hausa**|`ha`|
   * |**Hawaiian**|`haw`|
   * |**Hebrew**|`he`|
   * |**Hindi**|`hi`|
   * |**Hmong**|`hmn`|
   * |**Hungarian**|`hu`|
   * |**Icelandic**|`is`|
   * |**Igbo**|`ig`|
   * |**Indonesian**|`id`|
   * |**Irish**|`ga`|
   * |**Italian**|`it`|
   * |**Japanese**|`ja`|
   * |**Javanese**|`jv`|
   * |**Kannada**|`kn`|
   * |**Kazakh**|`kk`|
   * |**Kinyarwanda**|`rw`|
   * |**Kirghiz**|`ky`|
   * |**Korean**|`ko`|
   * |**Kurdish**|`ku`|
   * |**Lao**|`lo`|
   * |**Latin**|`la`|
   * |**Latvian**|`lv`|
   * |**Lithuanian**|`lt`|
   * |**Luxembourgish**|`lb`|
   * |**Macedonian**|`mk`|
   * |**Malagasy**|`mg`|
   * |**Malay (macrolanguage)**|`ms`|
   * |**Malayalam**|`ml`|
   * |**Maltese**|`mt`|
   * |**Maori**|`mi`|
   * |**Marathi**|`mr`|
   * |**Modern Greek (1453-)**|`el`|
   * |**Mongolian**|`mn`|
   * |**Nepali (macrolanguage)**|`ne`|
   * |**Norwegian**|`no`|
   * |**Nyanja**|`ny`|
   * |**Oriya (macrolanguage)**|`or`|
   * |**Panjabi**|`pa`|
   * |**Persian**|`fa`|
   * |**Polish**|`pl`|
   * |**Portuguese**|`pt`|
   * |**Pushto**|`ps`|
   * |**Romanian**|`ro`|
   * |**Russian**|`ru`|
   * |**Samoan**|`sm`|
   * |**Scottish Gaelic**|`gd`|
   * |**Serbian**|`sr`|
   * |**Shona**|`sn`|
   * |**Sindhi**|`sd`|
   * |**Sinhala**|`si`|
   * |**Slovak**|`sk`|
   * |**Slovenian**|`sl`|
   * |**Somali**|`so`|
   * |**Southern Sotho**|`st`|
   * |**Spanish**|`es`|
   * |**Sundanese**|`su`|
   * |**Swahili (macrolanguage)**|`sw`|
   * |**Swedish**|`sv`|
   * |**Tagalog**|`tl`|
   * |**Tajik**|`tg`|
   * |**Tamil**|`ta`|
   * |**Tatar**|`tt`|
   * |**Telugu**|`te`|
   * |**Thai**|`th`|
   * |**Turkish**|`tr`|
   * |**Turkmen**|`tk`|
   * |**Uighur**|`ug`|
   * |**Ukrainian**|`uk`|
   * |**Urdu**|`ur`|
   * |**Uzbek**|`uz`|
   * |**Vietnamese**|`vi`|
   * |**Welsh**|`cy`|
   * |**Western Frisian**|`fy`|
   * |**Xhosa**|`xh`|
   * |**Yiddish**|`yi`|
   * |**Yoruba**|`yo`|
   * |**Zulu**|`zu`|
   *
   * </details><details><summary>Supported Detailed Languages</summary>
   *
   *
   *
   *
   *
   * |Name|Value|
   * |----|-----|
   * |**Auto detection**|`auto-detect`|
   * |**Chinese (China)**|`zh-CN`|
   * |**Chinese (Taiwan)**|`zh-TW`|
   *
   * </details>
   *
   * @summary Document Translation
   * @throws FetchError<400, types.TranslationDocumentTranslationCreateResponse400>
   * @throws FetchError<403, types.TranslationDocumentTranslationCreateResponse403>
   * @throws FetchError<404, types.TranslationDocumentTranslationCreateResponse404>
   * @throws FetchError<500, types.TranslationDocumentTranslationCreateResponse500>
   */
  translation_document_translation_create(
    body: types.TranslationDocumentTranslationCreateBodyParam
  ): Promise<FetchResponse<200, types.TranslationDocumentTranslationCreateResponse200>>;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
   * |**google**|`v1`|20.0 (per 1000000 char)|1 char
   * |**ibm**|`v1 (2021-08-01)`|20.0 (per 1000000 char)|1000 char
   * |**microsoft**|`v3.1`|1.0 (per 1000000 char)|1000 char
   * |**neuralspace**|`v1`|7.0 (per 1000 request)|1 request
   * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
   * |**modernmt**|`1.1.0`|8.0 (per 1000000 char)|1 char
   * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
   *
   *
   * </details>
   *
   *
   *
   * @summary Language Detection
   * @throws FetchError<400, types.TranslationLanguageDetectionCreateResponse400>
   * @throws FetchError<403, types.TranslationLanguageDetectionCreateResponse403>
   * @throws FetchError<404, types.TranslationLanguageDetectionCreateResponse404>
   * @throws FetchError<500, types.TranslationLanguageDetectionCreateResponse500>
   */
  translation_language_detection_create(
    body: types.TranslationLanguageDetectionCreateBodyParam
  ): Promise<FetchResponse<200, types.TranslationLanguageDetectionCreateResponse200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Video Explicit Content Detection List Jobs
   */
  video_explicit_content_detection_async_retrieve(): Promise<
    FetchResponse<200, types.VideoExplicitContentDetectionAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3`|0.1 (per 60 seconde)|60 seconde
   * |**google**|`Video intelligence v1`|0.1 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Video Explicit Content Detection Launch Job
   */
  video_explicit_content_detection_async_create(
    body: types.VideoExplicitContentDetectionAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoExplicitContentDetectionAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Video Explicit Content Detection Get Job Results
   * @throws FetchError<400, types.VideoExplicitContentDetectionAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoExplicitContentDetectionAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoExplicitContentDetectionAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoExplicitContentDetectionAsyncRetrieve2Response500>
   */
  video_explicit_content_detection_async_retrieve_2(
    metadata: types.VideoExplicitContentDetectionAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoExplicitContentDetectionAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Face Detection List Jobs
   */
  video_face_detection_async_retrieve(): Promise<
    FetchResponse<200, types.VideoFaceDetectionAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3`|0.1 (per 60 seconde)|60 seconde
   * |**google**|`Video intelligence v1`|0.1 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Face Detection Launch Job
   */
  video_face_detection_async_create(
    body: types.VideoFaceDetectionAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoFaceDetectionAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Face Detection Get Job Results
   * @throws FetchError<400, types.VideoFaceDetectionAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoFaceDetectionAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoFaceDetectionAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoFaceDetectionAsyncRetrieve2Response500>
   */
  video_face_detection_async_retrieve_2(
    metadata: types.VideoFaceDetectionAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoFaceDetectionAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Label Detection List Jobs
   */
  video_label_detection_async_retrieve(): Promise<
    FetchResponse<200, types.VideoLabelDetectionAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3`|0.1 (per 60 seconde)|60 seconde
   * |**google**|`Video intelligence v1`|0.1 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Label Detection Launch Job
   */
  video_label_detection_async_create(
    body: types.VideoLabelDetectionAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoLabelDetectionAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Label Detection Get Job Results
   * @throws FetchError<400, types.VideoLabelDetectionAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoLabelDetectionAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoLabelDetectionAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoLabelDetectionAsyncRetrieve2Response500>
   */
  video_label_detection_async_retrieve_2(
    metadata: types.VideoLabelDetectionAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoLabelDetectionAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Video Logo Detection List Jobs
   */
  video_logo_detection_async_retrieve(): Promise<
    FetchResponse<200, types.VideoLogoDetectionAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**google**|`Video intelligence v1`|0.15 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Video Logo Detection Launch Job
   */
  video_logo_detection_async_create(
    body: types.VideoLogoDetectionAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoLogoDetectionAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Video Logo Detection Get Job Results
   * @throws FetchError<400, types.VideoLogoDetectionAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoLogoDetectionAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoLogoDetectionAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoLogoDetectionAsyncRetrieve2Response500>
   */
  video_logo_detection_async_retrieve_2(
    metadata: types.VideoLogoDetectionAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoLogoDetectionAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Video Object Tracking List Jobs
   */
  video_object_tracking_async_retrieve(): Promise<
    FetchResponse<200, types.VideoObjectTrackingAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**google**|`Video intelligence v1`|0.15 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Video Object Tracking Launch Job
   */
  video_object_tracking_async_create(
    body: types.VideoObjectTrackingAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoObjectTrackingAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Video Object Tracking Get Job Results
   * @throws FetchError<400, types.VideoObjectTrackingAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoObjectTrackingAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoObjectTrackingAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoObjectTrackingAsyncRetrieve2Response500>
   */
  video_object_tracking_async_retrieve_2(
    metadata: types.VideoObjectTrackingAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoObjectTrackingAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Person Tracking List Jobs
   */
  video_person_tracking_async_retrieve(): Promise<
    FetchResponse<200, types.VideoPersonTrackingAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3`|0.1 (per 60 seconde)|60 seconde
   * |**google**|`Video intelligence v1`|0.1 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Person Tracking Launch Job
   */
  video_person_tracking_async_create(
    body: types.VideoPersonTrackingAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoPersonTrackingAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Person Tracking Get Job Results
   * @throws FetchError<400, types.VideoPersonTrackingAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoPersonTrackingAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoPersonTrackingAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoPersonTrackingAsyncRetrieve2Response500>
   */
  video_person_tracking_async_retrieve_2(
    metadata: types.VideoPersonTrackingAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoPersonTrackingAsyncRetrieve2Response200>>;
  /**
   * Get a list of all jobs launched for this feature. You'll then be able to use the ID of
   * each one to get its status and results.<br>
   *                         Please note that a **job status doesn't get updated until a get
   * request** is sent.
   *
   * @summary Text Detection List Jobs
   */
  video_text_detection_async_retrieve(): Promise<
    FetchResponse<200, types.VideoTextDetectionAsyncRetrieveResponse200>
  >;
  /**
   * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available
   * Providers</strong></summary>
   *
   *
   *
   * |Name|Version|Price|Billing unit|
   * |----|-------|-----|------------|
   * |**amazon**|`boto3`|0.1 (per 60 seconde)|60 seconde
   * |**google**|`Video intelligence v1`|0.15 (per 60 seconde)|1 seconde
   *
   *
   * </details>
   *
   *
   *
   * @summary Text Detection Launch Job
   */
  video_text_detection_async_create(
    body: types.VideoTextDetectionAsyncCreateBodyParam
  ): Promise<FetchResponse<200, types.VideoTextDetectionAsyncCreateResponse200>>;
  /**
   * Get the status and results of an async job given its ID.
   *
   * @summary Text Detection Get Job Results
   * @throws FetchError<400, types.VideoTextDetectionAsyncRetrieve2Response400>
   * @throws FetchError<403, types.VideoTextDetectionAsyncRetrieve2Response403>
   * @throws FetchError<404, types.VideoTextDetectionAsyncRetrieve2Response404>
   * @throws FetchError<500, types.VideoTextDetectionAsyncRetrieve2Response500>
   */
  video_text_detection_async_retrieve_2(
    metadata: types.VideoTextDetectionAsyncRetrieve2MetadataParam
  ): Promise<FetchResponse<200, types.VideoTextDetectionAsyncRetrieve2Response200>>;
}
declare const createSDK: SDK;
export = createSDK;
