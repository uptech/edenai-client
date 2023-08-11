/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const LandmarkLocation: core.serialization.ObjectSchema<serializers.LandmarkLocation.Raw, EdenAi.LandmarkLocation>;
export declare namespace LandmarkLocation {
    interface Raw {
        lat_lng: serializers.LandmarkLatLng.Raw;
    }
}
