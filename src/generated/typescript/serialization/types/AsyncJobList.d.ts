/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const AsyncJobList: core.serialization.ObjectSchema<serializers.AsyncJobList.Raw, EdenAi.AsyncJobList>;
export declare namespace AsyncJobList {
    interface Raw {
        providers: string;
        nb: number;
        nb_ok: number;
        public_id: string;
        state: serializers.StateEnum.Raw;
        created_at: string;
    }
}
