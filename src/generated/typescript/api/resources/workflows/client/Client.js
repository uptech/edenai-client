"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflows = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const form_data_1 = __importDefault(require("form-data"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class Workflows {
    constructor(_options) {
        this._options = _options;
    }
    /**
     *
     * Workflow let you create a pipeline of subfeature by inputing an entry data, letting it pass through all the subfeatures and retreiving the result
     *
     *
     * **Note**: You can try Workflow on our [developer portal](https://app.edenai.run/bricks/workflows) and a `description` snippet will automatically get generated as you build your workflow
     *
     * **Example:**
     *
     * Schema: ocr --> automatic_translation --> summarize
     * In this workflow we pass a file as input, ocr parse the text, pass it to translate, and summarize will return a summary of the translated text
     *
     * **Inputs:**
     *
     * Depending on the first subfeature you have three choice for the inital input data: `file`, `text` or `texts`.
     *
     * To create a workflow you have to pass an object to the `description` parameter, the object should look like this:
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
     * - `description` should be a list of *nodes* each node representing a subfeature.Inside each node, enter the desired feature and subfeature and its params. `params` are the parameters you should normally send to the subfeature as if you were doing a direct call but with a few constraints:
     *     + `providers` should take only one provider name, if you input multiple providers, the response of all the other providers will be ignored
     *     + `file`, `text`, `texts` shouldn't be present in `params` as these are initial inputs
     *
     * **Important!**: description should be sent as a string since the content-type is a form-data
     *
     * - `return_only_last` allows you to chose wether you want a list of all the response returned by each providers or just getting the last response. If set to `true` the response will be the last subfeature result, if set to `false` the reponse will be a list of all subfeature results.
     *
     */
    pipelineCreate(file, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _request = new form_data_1.default();
            _request.append("description", request.description);
            _request.append("text", request.text);
            _request.append("texts", request.texts);
            _request.append("file", file);
            _request.append("return_only_last", request.returnOnlyLast.toString());
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.EdenAiEnvironment.Default, "pipeline"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "Content-Length": (yield core.getFormDataContentLength(_request)).toString(),
                },
                contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
                body: _request,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.WorklowResponseType.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.EdenAiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.EdenAiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.EdenAiTimeoutError();
                case "unknown":
                    throw new errors.EdenAiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    _getAuthorizationHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = yield core.Supplier.get(this._options.token);
            if (bearer != null) {
                return `Bearer ${bearer}`;
            }
            return undefined;
        });
    }
}
exports.Workflows = Workflows;
