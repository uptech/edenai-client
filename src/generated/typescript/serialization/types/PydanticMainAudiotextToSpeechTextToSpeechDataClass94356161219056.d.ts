/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainAudiotextToSpeechTextToSpeechDataClass94356161219056: core.serialization.ObjectSchema<serializers.PydanticMainAudiotextToSpeechTextToSpeechDataClass94356161219056.Raw, EdenAi.PydanticMainAudiotextToSpeechTextToSpeechDataClass94356161219056>;
export declare namespace PydanticMainAudiotextToSpeechTextToSpeechDataClass94356161219056 {
    interface Raw {
        audio: string;
        voice_type: number;
        audio_resource_url: string;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
