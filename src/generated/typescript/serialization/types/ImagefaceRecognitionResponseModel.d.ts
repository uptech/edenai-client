/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ImagefaceRecognitionResponseModel: core.serialization.ObjectSchema<serializers.ImagefaceRecognitionResponseModel.Raw, EdenAi.ImagefaceRecognitionResponseModel>;
export declare namespace ImagefaceRecognitionResponseModel {
    interface Raw {
        facepp?: serializers.PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164941712.Raw | null;
        microsoft?: serializers.PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164944656.Raw | null;
        amazon?: serializers.PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164963152.Raw | null;
    }
}
