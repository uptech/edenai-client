/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const SpeechDiarization: core.serialization.ObjectSchema<serializers.SpeechDiarization.Raw, EdenAi.SpeechDiarization>;
export declare namespace SpeechDiarization {
    interface Raw {
        total_speakers: number;
        entries?: serializers.SpeechDiarizationEntry.Raw[] | null;
        error_message?: string | null;
    }
}
