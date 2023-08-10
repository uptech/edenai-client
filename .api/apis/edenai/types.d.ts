import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type AudioSpeechToTextAsyncCreateBodyParam = FromSchema<
  typeof schemas.AudioSpeechToTextAsyncCreate.body
>;
export type AudioSpeechToTextAsyncCreateResponse200 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncCreate.response)['200']
>;
export type AudioSpeechToTextAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.AudioSpeechToTextAsyncRetrieve2.metadata
>;
export type AudioSpeechToTextAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve2.response)['200']
>;
export type AudioSpeechToTextAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve2.response)['400']
>;
export type AudioSpeechToTextAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve2.response)['403']
>;
export type AudioSpeechToTextAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve2.response)['404']
>;
export type AudioSpeechToTextAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve2.response)['500']
>;
export type AudioSpeechToTextAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.AudioSpeechToTextAsyncRetrieve.response)['200']
>;
export type AudioTextToSpeechAsyncCreateBodyParam = FromSchema<
  typeof schemas.AudioTextToSpeechAsyncCreate.body
>;
export type AudioTextToSpeechAsyncCreateResponse200 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncCreate.response)['200']
>;
export type AudioTextToSpeechAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.AudioTextToSpeechAsyncRetrieve2.metadata
>;
export type AudioTextToSpeechAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve2.response)['200']
>;
export type AudioTextToSpeechAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve2.response)['400']
>;
export type AudioTextToSpeechAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve2.response)['403']
>;
export type AudioTextToSpeechAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve2.response)['404']
>;
export type AudioTextToSpeechAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve2.response)['500']
>;
export type AudioTextToSpeechAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.AudioTextToSpeechAsyncRetrieve.response)['200']
>;
export type AudioTextToSpeechCreateBodyParam = FromSchema<
  typeof schemas.AudioTextToSpeechCreate.body
>;
export type AudioTextToSpeechCreateResponse200 = FromSchema<
  (typeof schemas.AudioTextToSpeechCreate.response)['200']
>;
export type AudioTextToSpeechCreateResponse400 = FromSchema<
  (typeof schemas.AudioTextToSpeechCreate.response)['400']
>;
export type AudioTextToSpeechCreateResponse403 = FromSchema<
  (typeof schemas.AudioTextToSpeechCreate.response)['403']
>;
export type AudioTextToSpeechCreateResponse404 = FromSchema<
  (typeof schemas.AudioTextToSpeechCreate.response)['404']
>;
export type AudioTextToSpeechCreateResponse500 = FromSchema<
  (typeof schemas.AudioTextToSpeechCreate.response)['500']
>;
export type BatchCreateMetadataParam = FromSchema<typeof schemas.BatchCreate.metadata>;
export type BatchCreateResponse200 = FromSchema<(typeof schemas.BatchCreate.response)['200']>;
export type BatchCreateResponse400 = FromSchema<(typeof schemas.BatchCreate.response)['400']>;
export type BatchCreateResponse403 = FromSchema<(typeof schemas.BatchCreate.response)['403']>;
export type BatchCreateResponse404 = FromSchema<(typeof schemas.BatchCreate.response)['404']>;
export type BatchCreateResponse500 = FromSchema<(typeof schemas.BatchCreate.response)['500']>;
export type BatchRetrieveMetadataParam = FromSchema<typeof schemas.BatchRetrieve.metadata>;
export type BatchRetrieveResponse200 = FromSchema<(typeof schemas.BatchRetrieve.response)['200']>;
export type BatchRetrieveResponse400 = FromSchema<(typeof schemas.BatchRetrieve.response)['400']>;
export type BatchRetrieveResponse403 = FromSchema<(typeof schemas.BatchRetrieve.response)['403']>;
export type BatchRetrieveResponse404 = FromSchema<(typeof schemas.BatchRetrieve.response)['404']>;
export type BatchRetrieveResponse500 = FromSchema<(typeof schemas.BatchRetrieve.response)['500']>;
export type ImageAnonymizationCreateBodyParam = FromSchema<
  typeof schemas.ImageAnonymizationCreate.body
>;
export type ImageAnonymizationCreateResponse200 = FromSchema<
  (typeof schemas.ImageAnonymizationCreate.response)['200']
>;
export type ImageAnonymizationCreateResponse400 = FromSchema<
  (typeof schemas.ImageAnonymizationCreate.response)['400']
>;
export type ImageAnonymizationCreateResponse403 = FromSchema<
  (typeof schemas.ImageAnonymizationCreate.response)['403']
>;
export type ImageAnonymizationCreateResponse404 = FromSchema<
  (typeof schemas.ImageAnonymizationCreate.response)['404']
>;
export type ImageAnonymizationCreateResponse500 = FromSchema<
  (typeof schemas.ImageAnonymizationCreate.response)['500']
>;
export type ImageExplicitContentCreateBodyParam = FromSchema<
  typeof schemas.ImageExplicitContentCreate.body
>;
export type ImageExplicitContentCreateResponse200 = FromSchema<
  (typeof schemas.ImageExplicitContentCreate.response)['200']
>;
export type ImageExplicitContentCreateResponse400 = FromSchema<
  (typeof schemas.ImageExplicitContentCreate.response)['400']
>;
export type ImageExplicitContentCreateResponse403 = FromSchema<
  (typeof schemas.ImageExplicitContentCreate.response)['403']
>;
export type ImageExplicitContentCreateResponse404 = FromSchema<
  (typeof schemas.ImageExplicitContentCreate.response)['404']
>;
export type ImageExplicitContentCreateResponse500 = FromSchema<
  (typeof schemas.ImageExplicitContentCreate.response)['500']
>;
export type ImageFaceCompareCreateBodyParam = FromSchema<
  typeof schemas.ImageFaceCompareCreate.body
>;
export type ImageFaceCompareCreateResponse200 = FromSchema<
  (typeof schemas.ImageFaceCompareCreate.response)['200']
>;
export type ImageFaceCompareCreateResponse400 = FromSchema<
  (typeof schemas.ImageFaceCompareCreate.response)['400']
>;
export type ImageFaceCompareCreateResponse403 = FromSchema<
  (typeof schemas.ImageFaceCompareCreate.response)['403']
>;
export type ImageFaceCompareCreateResponse404 = FromSchema<
  (typeof schemas.ImageFaceCompareCreate.response)['404']
>;
export type ImageFaceCompareCreateResponse500 = FromSchema<
  (typeof schemas.ImageFaceCompareCreate.response)['500']
>;
export type ImageFaceDetectionCreateBodyParam = FromSchema<
  typeof schemas.ImageFaceDetectionCreate.body
>;
export type ImageFaceDetectionCreateResponse200 = FromSchema<
  (typeof schemas.ImageFaceDetectionCreate.response)['200']
>;
export type ImageFaceDetectionCreateResponse400 = FromSchema<
  (typeof schemas.ImageFaceDetectionCreate.response)['400']
>;
export type ImageFaceDetectionCreateResponse403 = FromSchema<
  (typeof schemas.ImageFaceDetectionCreate.response)['403']
>;
export type ImageFaceDetectionCreateResponse404 = FromSchema<
  (typeof schemas.ImageFaceDetectionCreate.response)['404']
>;
export type ImageFaceDetectionCreateResponse500 = FromSchema<
  (typeof schemas.ImageFaceDetectionCreate.response)['500']
>;
export type ImageFaceRecognitionAddFaceCreateBodyParam = FromSchema<
  typeof schemas.ImageFaceRecognitionAddFaceCreate.body
>;
export type ImageFaceRecognitionAddFaceCreateResponse200 = FromSchema<
  (typeof schemas.ImageFaceRecognitionAddFaceCreate.response)['200']
>;
export type ImageFaceRecognitionAddFaceCreateResponse400 = FromSchema<
  (typeof schemas.ImageFaceRecognitionAddFaceCreate.response)['400']
>;
export type ImageFaceRecognitionAddFaceCreateResponse403 = FromSchema<
  (typeof schemas.ImageFaceRecognitionAddFaceCreate.response)['403']
>;
export type ImageFaceRecognitionAddFaceCreateResponse404 = FromSchema<
  (typeof schemas.ImageFaceRecognitionAddFaceCreate.response)['404']
>;
export type ImageFaceRecognitionAddFaceCreateResponse500 = FromSchema<
  (typeof schemas.ImageFaceRecognitionAddFaceCreate.response)['500']
>;
export type ImageFaceRecognitionDeleteFaceCreateBodyParam = FromSchema<
  typeof schemas.ImageFaceRecognitionDeleteFaceCreate.body
>;
export type ImageFaceRecognitionDeleteFaceCreateResponse200 = FromSchema<
  (typeof schemas.ImageFaceRecognitionDeleteFaceCreate.response)['200']
>;
export type ImageFaceRecognitionDeleteFaceCreateResponse400 = FromSchema<
  (typeof schemas.ImageFaceRecognitionDeleteFaceCreate.response)['400']
>;
export type ImageFaceRecognitionDeleteFaceCreateResponse403 = FromSchema<
  (typeof schemas.ImageFaceRecognitionDeleteFaceCreate.response)['403']
>;
export type ImageFaceRecognitionDeleteFaceCreateResponse404 = FromSchema<
  (typeof schemas.ImageFaceRecognitionDeleteFaceCreate.response)['404']
>;
export type ImageFaceRecognitionDeleteFaceCreateResponse500 = FromSchema<
  (typeof schemas.ImageFaceRecognitionDeleteFaceCreate.response)['500']
>;
export type ImageFaceRecognitionListFacesRetrieveMetadataParam = FromSchema<
  typeof schemas.ImageFaceRecognitionListFacesRetrieve.metadata
>;
export type ImageFaceRecognitionListFacesRetrieveResponse200 = FromSchema<
  (typeof schemas.ImageFaceRecognitionListFacesRetrieve.response)['200']
>;
export type ImageFaceRecognitionListFacesRetrieveResponse400 = FromSchema<
  (typeof schemas.ImageFaceRecognitionListFacesRetrieve.response)['400']
>;
export type ImageFaceRecognitionListFacesRetrieveResponse403 = FromSchema<
  (typeof schemas.ImageFaceRecognitionListFacesRetrieve.response)['403']
>;
export type ImageFaceRecognitionListFacesRetrieveResponse404 = FromSchema<
  (typeof schemas.ImageFaceRecognitionListFacesRetrieve.response)['404']
>;
export type ImageFaceRecognitionListFacesRetrieveResponse500 = FromSchema<
  (typeof schemas.ImageFaceRecognitionListFacesRetrieve.response)['500']
>;
export type ImageFaceRecognitionRecognizeCreateBodyParam = FromSchema<
  typeof schemas.ImageFaceRecognitionRecognizeCreate.body
>;
export type ImageFaceRecognitionRecognizeCreateResponse200 = FromSchema<
  (typeof schemas.ImageFaceRecognitionRecognizeCreate.response)['200']
>;
export type ImageFaceRecognitionRecognizeCreateResponse400 = FromSchema<
  (typeof schemas.ImageFaceRecognitionRecognizeCreate.response)['400']
>;
export type ImageFaceRecognitionRecognizeCreateResponse403 = FromSchema<
  (typeof schemas.ImageFaceRecognitionRecognizeCreate.response)['403']
>;
export type ImageFaceRecognitionRecognizeCreateResponse404 = FromSchema<
  (typeof schemas.ImageFaceRecognitionRecognizeCreate.response)['404']
>;
export type ImageFaceRecognitionRecognizeCreateResponse500 = FromSchema<
  (typeof schemas.ImageFaceRecognitionRecognizeCreate.response)['500']
>;
export type ImageGenerationCreateBodyParam = FromSchema<typeof schemas.ImageGenerationCreate.body>;
export type ImageGenerationCreateResponse200 = FromSchema<
  (typeof schemas.ImageGenerationCreate.response)['200']
>;
export type ImageGenerationCreateResponse400 = FromSchema<
  (typeof schemas.ImageGenerationCreate.response)['400']
>;
export type ImageGenerationCreateResponse403 = FromSchema<
  (typeof schemas.ImageGenerationCreate.response)['403']
>;
export type ImageGenerationCreateResponse404 = FromSchema<
  (typeof schemas.ImageGenerationCreate.response)['404']
>;
export type ImageGenerationCreateResponse500 = FromSchema<
  (typeof schemas.ImageGenerationCreate.response)['500']
>;
export type ImageLandmarkDetectionCreateBodyParam = FromSchema<
  typeof schemas.ImageLandmarkDetectionCreate.body
>;
export type ImageLandmarkDetectionCreateResponse200 = FromSchema<
  (typeof schemas.ImageLandmarkDetectionCreate.response)['200']
>;
export type ImageLandmarkDetectionCreateResponse400 = FromSchema<
  (typeof schemas.ImageLandmarkDetectionCreate.response)['400']
>;
export type ImageLandmarkDetectionCreateResponse403 = FromSchema<
  (typeof schemas.ImageLandmarkDetectionCreate.response)['403']
>;
export type ImageLandmarkDetectionCreateResponse404 = FromSchema<
  (typeof schemas.ImageLandmarkDetectionCreate.response)['404']
>;
export type ImageLandmarkDetectionCreateResponse500 = FromSchema<
  (typeof schemas.ImageLandmarkDetectionCreate.response)['500']
>;
export type ImageLogoDetectionCreateBodyParam = FromSchema<
  typeof schemas.ImageLogoDetectionCreate.body
>;
export type ImageLogoDetectionCreateResponse200 = FromSchema<
  (typeof schemas.ImageLogoDetectionCreate.response)['200']
>;
export type ImageLogoDetectionCreateResponse400 = FromSchema<
  (typeof schemas.ImageLogoDetectionCreate.response)['400']
>;
export type ImageLogoDetectionCreateResponse403 = FromSchema<
  (typeof schemas.ImageLogoDetectionCreate.response)['403']
>;
export type ImageLogoDetectionCreateResponse404 = FromSchema<
  (typeof schemas.ImageLogoDetectionCreate.response)['404']
>;
export type ImageLogoDetectionCreateResponse500 = FromSchema<
  (typeof schemas.ImageLogoDetectionCreate.response)['500']
>;
export type ImageObjectDetectionCreateBodyParam = FromSchema<
  typeof schemas.ImageObjectDetectionCreate.body
>;
export type ImageObjectDetectionCreateResponse200 = FromSchema<
  (typeof schemas.ImageObjectDetectionCreate.response)['200']
>;
export type ImageObjectDetectionCreateResponse400 = FromSchema<
  (typeof schemas.ImageObjectDetectionCreate.response)['400']
>;
export type ImageObjectDetectionCreateResponse403 = FromSchema<
  (typeof schemas.ImageObjectDetectionCreate.response)['403']
>;
export type ImageObjectDetectionCreateResponse404 = FromSchema<
  (typeof schemas.ImageObjectDetectionCreate.response)['404']
>;
export type ImageObjectDetectionCreateResponse500 = FromSchema<
  (typeof schemas.ImageObjectDetectionCreate.response)['500']
>;
export type ImageSearchDeleteImageCreateBodyParam = FromSchema<
  typeof schemas.ImageSearchDeleteImageCreate.body
>;
export type ImageSearchDeleteImageCreateResponse200 = FromSchema<
  (typeof schemas.ImageSearchDeleteImageCreate.response)['200']
>;
export type ImageSearchDeleteImageCreateResponse400 = FromSchema<
  (typeof schemas.ImageSearchDeleteImageCreate.response)['400']
>;
export type ImageSearchDeleteImageCreateResponse403 = FromSchema<
  (typeof schemas.ImageSearchDeleteImageCreate.response)['403']
>;
export type ImageSearchDeleteImageCreateResponse404 = FromSchema<
  (typeof schemas.ImageSearchDeleteImageCreate.response)['404']
>;
export type ImageSearchDeleteImageCreateResponse500 = FromSchema<
  (typeof schemas.ImageSearchDeleteImageCreate.response)['500']
>;
export type ImageSearchGetImageRetrieveMetadataParam = FromSchema<
  typeof schemas.ImageSearchGetImageRetrieve.metadata
>;
export type ImageSearchGetImageRetrieveResponse200 = FromSchema<
  (typeof schemas.ImageSearchGetImageRetrieve.response)['200']
>;
export type ImageSearchGetImageRetrieveResponse400 = FromSchema<
  (typeof schemas.ImageSearchGetImageRetrieve.response)['400']
>;
export type ImageSearchGetImageRetrieveResponse403 = FromSchema<
  (typeof schemas.ImageSearchGetImageRetrieve.response)['403']
>;
export type ImageSearchGetImageRetrieveResponse404 = FromSchema<
  (typeof schemas.ImageSearchGetImageRetrieve.response)['404']
>;
export type ImageSearchGetImageRetrieveResponse500 = FromSchema<
  (typeof schemas.ImageSearchGetImageRetrieve.response)['500']
>;
export type ImageSearchGetImagesRetrieveMetadataParam = FromSchema<
  typeof schemas.ImageSearchGetImagesRetrieve.metadata
>;
export type ImageSearchGetImagesRetrieveResponse200 = FromSchema<
  (typeof schemas.ImageSearchGetImagesRetrieve.response)['200']
>;
export type ImageSearchGetImagesRetrieveResponse400 = FromSchema<
  (typeof schemas.ImageSearchGetImagesRetrieve.response)['400']
>;
export type ImageSearchGetImagesRetrieveResponse403 = FromSchema<
  (typeof schemas.ImageSearchGetImagesRetrieve.response)['403']
>;
export type ImageSearchGetImagesRetrieveResponse404 = FromSchema<
  (typeof schemas.ImageSearchGetImagesRetrieve.response)['404']
>;
export type ImageSearchGetImagesRetrieveResponse500 = FromSchema<
  (typeof schemas.ImageSearchGetImagesRetrieve.response)['500']
>;
export type ImageSearchLaunchSimilarityCreateBodyParam = FromSchema<
  typeof schemas.ImageSearchLaunchSimilarityCreate.body
>;
export type ImageSearchLaunchSimilarityCreateResponse200 = FromSchema<
  (typeof schemas.ImageSearchLaunchSimilarityCreate.response)['200']
>;
export type ImageSearchLaunchSimilarityCreateResponse400 = FromSchema<
  (typeof schemas.ImageSearchLaunchSimilarityCreate.response)['400']
>;
export type ImageSearchLaunchSimilarityCreateResponse403 = FromSchema<
  (typeof schemas.ImageSearchLaunchSimilarityCreate.response)['403']
>;
export type ImageSearchLaunchSimilarityCreateResponse404 = FromSchema<
  (typeof schemas.ImageSearchLaunchSimilarityCreate.response)['404']
>;
export type ImageSearchLaunchSimilarityCreateResponse500 = FromSchema<
  (typeof schemas.ImageSearchLaunchSimilarityCreate.response)['500']
>;
export type ImageSearchUploadImageCreateBodyParam = FromSchema<
  typeof schemas.ImageSearchUploadImageCreate.body
>;
export type ImageSearchUploadImageCreateResponse200 = FromSchema<
  (typeof schemas.ImageSearchUploadImageCreate.response)['200']
>;
export type ImageSearchUploadImageCreateResponse400 = FromSchema<
  (typeof schemas.ImageSearchUploadImageCreate.response)['400']
>;
export type ImageSearchUploadImageCreateResponse403 = FromSchema<
  (typeof schemas.ImageSearchUploadImageCreate.response)['403']
>;
export type ImageSearchUploadImageCreateResponse404 = FromSchema<
  (typeof schemas.ImageSearchUploadImageCreate.response)['404']
>;
export type ImageSearchUploadImageCreateResponse500 = FromSchema<
  (typeof schemas.ImageSearchUploadImageCreate.response)['500']
>;
export type InfoProviderSubfeaturesListMetadataParam = FromSchema<
  typeof schemas.InfoProviderSubfeaturesList.metadata
>;
export type InfoProviderSubfeaturesListResponse200 = FromSchema<
  (typeof schemas.InfoProviderSubfeaturesList.response)['200']
>;
export type OcrBankCheckParsingCreateBodyParam = FromSchema<
  typeof schemas.OcrBankCheckParsingCreate.body
>;
export type OcrBankCheckParsingCreateResponse200 = FromSchema<
  (typeof schemas.OcrBankCheckParsingCreate.response)['200']
>;
export type OcrBankCheckParsingCreateResponse400 = FromSchema<
  (typeof schemas.OcrBankCheckParsingCreate.response)['400']
>;
export type OcrBankCheckParsingCreateResponse403 = FromSchema<
  (typeof schemas.OcrBankCheckParsingCreate.response)['403']
>;
export type OcrBankCheckParsingCreateResponse404 = FromSchema<
  (typeof schemas.OcrBankCheckParsingCreate.response)['404']
>;
export type OcrBankCheckParsingCreateResponse500 = FromSchema<
  (typeof schemas.OcrBankCheckParsingCreate.response)['500']
>;
export type OcrCustomDocumentParsingAsyncCreateBodyParam = FromSchema<
  typeof schemas.OcrCustomDocumentParsingAsyncCreate.body
>;
export type OcrCustomDocumentParsingAsyncCreateResponse200 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncCreate.response)['200']
>;
export type OcrCustomDocumentParsingAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.metadata
>;
export type OcrCustomDocumentParsingAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.response)['200']
>;
export type OcrCustomDocumentParsingAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.response)['400']
>;
export type OcrCustomDocumentParsingAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.response)['403']
>;
export type OcrCustomDocumentParsingAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.response)['404']
>;
export type OcrCustomDocumentParsingAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve2.response)['500']
>;
export type OcrCustomDocumentParsingAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.OcrCustomDocumentParsingAsyncRetrieve.response)['200']
>;
export type OcrDataExtractionCreateBodyParam = FromSchema<
  typeof schemas.OcrDataExtractionCreate.body
>;
export type OcrDataExtractionCreateResponse200 = FromSchema<
  (typeof schemas.OcrDataExtractionCreate.response)['200']
>;
export type OcrDataExtractionCreateResponse400 = FromSchema<
  (typeof schemas.OcrDataExtractionCreate.response)['400']
>;
export type OcrDataExtractionCreateResponse403 = FromSchema<
  (typeof schemas.OcrDataExtractionCreate.response)['403']
>;
export type OcrDataExtractionCreateResponse404 = FromSchema<
  (typeof schemas.OcrDataExtractionCreate.response)['404']
>;
export type OcrDataExtractionCreateResponse500 = FromSchema<
  (typeof schemas.OcrDataExtractionCreate.response)['500']
>;
export type OcrIdentityParserCreateBodyParam = FromSchema<
  typeof schemas.OcrIdentityParserCreate.body
>;
export type OcrIdentityParserCreateResponse200 = FromSchema<
  (typeof schemas.OcrIdentityParserCreate.response)['200']
>;
export type OcrIdentityParserCreateResponse400 = FromSchema<
  (typeof schemas.OcrIdentityParserCreate.response)['400']
>;
export type OcrIdentityParserCreateResponse403 = FromSchema<
  (typeof schemas.OcrIdentityParserCreate.response)['403']
>;
export type OcrIdentityParserCreateResponse404 = FromSchema<
  (typeof schemas.OcrIdentityParserCreate.response)['404']
>;
export type OcrIdentityParserCreateResponse500 = FromSchema<
  (typeof schemas.OcrIdentityParserCreate.response)['500']
>;
export type OcrInvoiceParserCreateBodyParam = FromSchema<
  typeof schemas.OcrInvoiceParserCreate.body
>;
export type OcrInvoiceParserCreateResponse200 = FromSchema<
  (typeof schemas.OcrInvoiceParserCreate.response)['200']
>;
export type OcrInvoiceParserCreateResponse400 = FromSchema<
  (typeof schemas.OcrInvoiceParserCreate.response)['400']
>;
export type OcrInvoiceParserCreateResponse403 = FromSchema<
  (typeof schemas.OcrInvoiceParserCreate.response)['403']
>;
export type OcrInvoiceParserCreateResponse404 = FromSchema<
  (typeof schemas.OcrInvoiceParserCreate.response)['404']
>;
export type OcrInvoiceParserCreateResponse500 = FromSchema<
  (typeof schemas.OcrInvoiceParserCreate.response)['500']
>;
export type OcrOcrAsyncCreateBodyParam = FromSchema<typeof schemas.OcrOcrAsyncCreate.body>;
export type OcrOcrAsyncCreateResponse200 = FromSchema<
  (typeof schemas.OcrOcrAsyncCreate.response)['200']
>;
export type OcrOcrAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.OcrOcrAsyncRetrieve2.metadata
>;
export type OcrOcrAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve2.response)['200']
>;
export type OcrOcrAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve2.response)['400']
>;
export type OcrOcrAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve2.response)['403']
>;
export type OcrOcrAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve2.response)['404']
>;
export type OcrOcrAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve2.response)['500']
>;
export type OcrOcrAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.OcrOcrAsyncRetrieve.response)['200']
>;
export type OcrOcrCreateBodyParam = FromSchema<typeof schemas.OcrOcrCreate.body>;
export type OcrOcrCreateResponse200 = FromSchema<(typeof schemas.OcrOcrCreate.response)['200']>;
export type OcrOcrCreateResponse400 = FromSchema<(typeof schemas.OcrOcrCreate.response)['400']>;
export type OcrOcrCreateResponse403 = FromSchema<(typeof schemas.OcrOcrCreate.response)['403']>;
export type OcrOcrCreateResponse404 = FromSchema<(typeof schemas.OcrOcrCreate.response)['404']>;
export type OcrOcrCreateResponse500 = FromSchema<(typeof schemas.OcrOcrCreate.response)['500']>;
export type OcrOcrTablesAsyncCreateBodyParam = FromSchema<
  typeof schemas.OcrOcrTablesAsyncCreate.body
>;
export type OcrOcrTablesAsyncCreateResponse200 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncCreate.response)['200']
>;
export type OcrOcrTablesAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.OcrOcrTablesAsyncRetrieve2.metadata
>;
export type OcrOcrTablesAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve2.response)['200']
>;
export type OcrOcrTablesAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve2.response)['400']
>;
export type OcrOcrTablesAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve2.response)['403']
>;
export type OcrOcrTablesAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve2.response)['404']
>;
export type OcrOcrTablesAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve2.response)['500']
>;
export type OcrOcrTablesAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.OcrOcrTablesAsyncRetrieve.response)['200']
>;
export type OcrReceiptParserCreateBodyParam = FromSchema<
  typeof schemas.OcrReceiptParserCreate.body
>;
export type OcrReceiptParserCreateResponse200 = FromSchema<
  (typeof schemas.OcrReceiptParserCreate.response)['200']
>;
export type OcrReceiptParserCreateResponse400 = FromSchema<
  (typeof schemas.OcrReceiptParserCreate.response)['400']
>;
export type OcrReceiptParserCreateResponse403 = FromSchema<
  (typeof schemas.OcrReceiptParserCreate.response)['403']
>;
export type OcrReceiptParserCreateResponse404 = FromSchema<
  (typeof schemas.OcrReceiptParserCreate.response)['404']
>;
export type OcrReceiptParserCreateResponse500 = FromSchema<
  (typeof schemas.OcrReceiptParserCreate.response)['500']
>;
export type OcrResumeParserCreateBodyParam = FromSchema<typeof schemas.OcrResumeParserCreate.body>;
export type OcrResumeParserCreateResponse200 = FromSchema<
  (typeof schemas.OcrResumeParserCreate.response)['200']
>;
export type OcrResumeParserCreateResponse400 = FromSchema<
  (typeof schemas.OcrResumeParserCreate.response)['400']
>;
export type OcrResumeParserCreateResponse403 = FromSchema<
  (typeof schemas.OcrResumeParserCreate.response)['403']
>;
export type OcrResumeParserCreateResponse404 = FromSchema<
  (typeof schemas.OcrResumeParserCreate.response)['404']
>;
export type OcrResumeParserCreateResponse500 = FromSchema<
  (typeof schemas.OcrResumeParserCreate.response)['500']
>;
export type PipelineCreateBodyParam = FromSchema<typeof schemas.PipelineCreate.body>;
export type PipelineCreateResponse200 = FromSchema<(typeof schemas.PipelineCreate.response)['200']>;
export type TextAiDetectionCreateBodyParam = FromSchema<typeof schemas.TextAiDetectionCreate.body>;
export type TextAiDetectionCreateResponse200 = FromSchema<
  (typeof schemas.TextAiDetectionCreate.response)['200']
>;
export type TextAiDetectionCreateResponse400 = FromSchema<
  (typeof schemas.TextAiDetectionCreate.response)['400']
>;
export type TextAiDetectionCreateResponse403 = FromSchema<
  (typeof schemas.TextAiDetectionCreate.response)['403']
>;
export type TextAiDetectionCreateResponse404 = FromSchema<
  (typeof schemas.TextAiDetectionCreate.response)['404']
>;
export type TextAiDetectionCreateResponse500 = FromSchema<
  (typeof schemas.TextAiDetectionCreate.response)['500']
>;
export type TextAnonymizationCreateBodyParam = FromSchema<
  typeof schemas.TextAnonymizationCreate.body
>;
export type TextAnonymizationCreateResponse200 = FromSchema<
  (typeof schemas.TextAnonymizationCreate.response)['200']
>;
export type TextAnonymizationCreateResponse400 = FromSchema<
  (typeof schemas.TextAnonymizationCreate.response)['400']
>;
export type TextAnonymizationCreateResponse403 = FromSchema<
  (typeof schemas.TextAnonymizationCreate.response)['403']
>;
export type TextAnonymizationCreateResponse404 = FromSchema<
  (typeof schemas.TextAnonymizationCreate.response)['404']
>;
export type TextAnonymizationCreateResponse500 = FromSchema<
  (typeof schemas.TextAnonymizationCreate.response)['500']
>;
export type TextChatCreateBodyParam = FromSchema<typeof schemas.TextChatCreate.body>;
export type TextChatCreateResponse200 = FromSchema<(typeof schemas.TextChatCreate.response)['200']>;
export type TextChatCreateResponse400 = FromSchema<(typeof schemas.TextChatCreate.response)['400']>;
export type TextChatCreateResponse403 = FromSchema<(typeof schemas.TextChatCreate.response)['403']>;
export type TextChatCreateResponse404 = FromSchema<(typeof schemas.TextChatCreate.response)['404']>;
export type TextChatCreateResponse500 = FromSchema<(typeof schemas.TextChatCreate.response)['500']>;
export type TextCodeGenerationCreateBodyParam = FromSchema<
  typeof schemas.TextCodeGenerationCreate.body
>;
export type TextCodeGenerationCreateResponse200 = FromSchema<
  (typeof schemas.TextCodeGenerationCreate.response)['200']
>;
export type TextCodeGenerationCreateResponse400 = FromSchema<
  (typeof schemas.TextCodeGenerationCreate.response)['400']
>;
export type TextCodeGenerationCreateResponse403 = FromSchema<
  (typeof schemas.TextCodeGenerationCreate.response)['403']
>;
export type TextCodeGenerationCreateResponse404 = FromSchema<
  (typeof schemas.TextCodeGenerationCreate.response)['404']
>;
export type TextCodeGenerationCreateResponse500 = FromSchema<
  (typeof schemas.TextCodeGenerationCreate.response)['500']
>;
export type TextCustomClassificationCreateBodyParam = FromSchema<
  typeof schemas.TextCustomClassificationCreate.body
>;
export type TextCustomClassificationCreateResponse200 = FromSchema<
  (typeof schemas.TextCustomClassificationCreate.response)['200']
>;
export type TextCustomClassificationCreateResponse400 = FromSchema<
  (typeof schemas.TextCustomClassificationCreate.response)['400']
>;
export type TextCustomClassificationCreateResponse403 = FromSchema<
  (typeof schemas.TextCustomClassificationCreate.response)['403']
>;
export type TextCustomClassificationCreateResponse404 = FromSchema<
  (typeof schemas.TextCustomClassificationCreate.response)['404']
>;
export type TextCustomClassificationCreateResponse500 = FromSchema<
  (typeof schemas.TextCustomClassificationCreate.response)['500']
>;
export type TextCustomNamedEntityRecognitionCreateBodyParam = FromSchema<
  typeof schemas.TextCustomNamedEntityRecognitionCreate.body
>;
export type TextCustomNamedEntityRecognitionCreateResponse200 = FromSchema<
  (typeof schemas.TextCustomNamedEntityRecognitionCreate.response)['200']
>;
export type TextCustomNamedEntityRecognitionCreateResponse400 = FromSchema<
  (typeof schemas.TextCustomNamedEntityRecognitionCreate.response)['400']
>;
export type TextCustomNamedEntityRecognitionCreateResponse403 = FromSchema<
  (typeof schemas.TextCustomNamedEntityRecognitionCreate.response)['403']
>;
export type TextCustomNamedEntityRecognitionCreateResponse404 = FromSchema<
  (typeof schemas.TextCustomNamedEntityRecognitionCreate.response)['404']
>;
export type TextCustomNamedEntityRecognitionCreateResponse500 = FromSchema<
  (typeof schemas.TextCustomNamedEntityRecognitionCreate.response)['500']
>;
export type TextEmbeddingsCreateBodyParam = FromSchema<typeof schemas.TextEmbeddingsCreate.body>;
export type TextEmbeddingsCreateResponse200 = FromSchema<
  (typeof schemas.TextEmbeddingsCreate.response)['200']
>;
export type TextEmbeddingsCreateResponse400 = FromSchema<
  (typeof schemas.TextEmbeddingsCreate.response)['400']
>;
export type TextEmbeddingsCreateResponse403 = FromSchema<
  (typeof schemas.TextEmbeddingsCreate.response)['403']
>;
export type TextEmbeddingsCreateResponse404 = FromSchema<
  (typeof schemas.TextEmbeddingsCreate.response)['404']
>;
export type TextEmbeddingsCreateResponse500 = FromSchema<
  (typeof schemas.TextEmbeddingsCreate.response)['500']
>;
export type TextEntitySentimentCreateBodyParam = FromSchema<
  typeof schemas.TextEntitySentimentCreate.body
>;
export type TextEntitySentimentCreateResponse200 = FromSchema<
  (typeof schemas.TextEntitySentimentCreate.response)['200']
>;
export type TextEntitySentimentCreateResponse400 = FromSchema<
  (typeof schemas.TextEntitySentimentCreate.response)['400']
>;
export type TextEntitySentimentCreateResponse403 = FromSchema<
  (typeof schemas.TextEntitySentimentCreate.response)['403']
>;
export type TextEntitySentimentCreateResponse404 = FromSchema<
  (typeof schemas.TextEntitySentimentCreate.response)['404']
>;
export type TextEntitySentimentCreateResponse500 = FromSchema<
  (typeof schemas.TextEntitySentimentCreate.response)['500']
>;
export type TextGenerationCreateBodyParam = FromSchema<typeof schemas.TextGenerationCreate.body>;
export type TextGenerationCreateResponse200 = FromSchema<
  (typeof schemas.TextGenerationCreate.response)['200']
>;
export type TextGenerationCreateResponse400 = FromSchema<
  (typeof schemas.TextGenerationCreate.response)['400']
>;
export type TextGenerationCreateResponse403 = FromSchema<
  (typeof schemas.TextGenerationCreate.response)['403']
>;
export type TextGenerationCreateResponse404 = FromSchema<
  (typeof schemas.TextGenerationCreate.response)['404']
>;
export type TextGenerationCreateResponse500 = FromSchema<
  (typeof schemas.TextGenerationCreate.response)['500']
>;
export type TextKeywordExtractionCreateBodyParam = FromSchema<
  typeof schemas.TextKeywordExtractionCreate.body
>;
export type TextKeywordExtractionCreateResponse200 = FromSchema<
  (typeof schemas.TextKeywordExtractionCreate.response)['200']
>;
export type TextKeywordExtractionCreateResponse400 = FromSchema<
  (typeof schemas.TextKeywordExtractionCreate.response)['400']
>;
export type TextKeywordExtractionCreateResponse403 = FromSchema<
  (typeof schemas.TextKeywordExtractionCreate.response)['403']
>;
export type TextKeywordExtractionCreateResponse404 = FromSchema<
  (typeof schemas.TextKeywordExtractionCreate.response)['404']
>;
export type TextKeywordExtractionCreateResponse500 = FromSchema<
  (typeof schemas.TextKeywordExtractionCreate.response)['500']
>;
export type TextModerationCreateBodyParam = FromSchema<typeof schemas.TextModerationCreate.body>;
export type TextModerationCreateResponse200 = FromSchema<
  (typeof schemas.TextModerationCreate.response)['200']
>;
export type TextModerationCreateResponse400 = FromSchema<
  (typeof schemas.TextModerationCreate.response)['400']
>;
export type TextModerationCreateResponse403 = FromSchema<
  (typeof schemas.TextModerationCreate.response)['403']
>;
export type TextModerationCreateResponse404 = FromSchema<
  (typeof schemas.TextModerationCreate.response)['404']
>;
export type TextModerationCreateResponse500 = FromSchema<
  (typeof schemas.TextModerationCreate.response)['500']
>;
export type TextNamedEntityRecognitionCreateBodyParam = FromSchema<
  typeof schemas.TextNamedEntityRecognitionCreate.body
>;
export type TextNamedEntityRecognitionCreateResponse200 = FromSchema<
  (typeof schemas.TextNamedEntityRecognitionCreate.response)['200']
>;
export type TextNamedEntityRecognitionCreateResponse400 = FromSchema<
  (typeof schemas.TextNamedEntityRecognitionCreate.response)['400']
>;
export type TextNamedEntityRecognitionCreateResponse403 = FromSchema<
  (typeof schemas.TextNamedEntityRecognitionCreate.response)['403']
>;
export type TextNamedEntityRecognitionCreateResponse404 = FromSchema<
  (typeof schemas.TextNamedEntityRecognitionCreate.response)['404']
>;
export type TextNamedEntityRecognitionCreateResponse500 = FromSchema<
  (typeof schemas.TextNamedEntityRecognitionCreate.response)['500']
>;
export type TextPlagiaDetectionCreateBodyParam = FromSchema<
  typeof schemas.TextPlagiaDetectionCreate.body
>;
export type TextPlagiaDetectionCreateResponse200 = FromSchema<
  (typeof schemas.TextPlagiaDetectionCreate.response)['200']
>;
export type TextPlagiaDetectionCreateResponse400 = FromSchema<
  (typeof schemas.TextPlagiaDetectionCreate.response)['400']
>;
export type TextPlagiaDetectionCreateResponse403 = FromSchema<
  (typeof schemas.TextPlagiaDetectionCreate.response)['403']
>;
export type TextPlagiaDetectionCreateResponse404 = FromSchema<
  (typeof schemas.TextPlagiaDetectionCreate.response)['404']
>;
export type TextPlagiaDetectionCreateResponse500 = FromSchema<
  (typeof schemas.TextPlagiaDetectionCreate.response)['500']
>;
export type TextPromptOptimizationCreateBodyParam = FromSchema<
  typeof schemas.TextPromptOptimizationCreate.body
>;
export type TextPromptOptimizationCreateResponse200 = FromSchema<
  (typeof schemas.TextPromptOptimizationCreate.response)['200']
>;
export type TextPromptOptimizationCreateResponse400 = FromSchema<
  (typeof schemas.TextPromptOptimizationCreate.response)['400']
>;
export type TextPromptOptimizationCreateResponse403 = FromSchema<
  (typeof schemas.TextPromptOptimizationCreate.response)['403']
>;
export type TextPromptOptimizationCreateResponse404 = FromSchema<
  (typeof schemas.TextPromptOptimizationCreate.response)['404']
>;
export type TextPromptOptimizationCreateResponse500 = FromSchema<
  (typeof schemas.TextPromptOptimizationCreate.response)['500']
>;
export type TextQuestionAnswerCreateBodyParam = FromSchema<
  typeof schemas.TextQuestionAnswerCreate.body
>;
export type TextQuestionAnswerCreateResponse200 = FromSchema<
  (typeof schemas.TextQuestionAnswerCreate.response)['200']
>;
export type TextQuestionAnswerCreateResponse400 = FromSchema<
  (typeof schemas.TextQuestionAnswerCreate.response)['400']
>;
export type TextQuestionAnswerCreateResponse403 = FromSchema<
  (typeof schemas.TextQuestionAnswerCreate.response)['403']
>;
export type TextQuestionAnswerCreateResponse404 = FromSchema<
  (typeof schemas.TextQuestionAnswerCreate.response)['404']
>;
export type TextQuestionAnswerCreateResponse500 = FromSchema<
  (typeof schemas.TextQuestionAnswerCreate.response)['500']
>;
export type TextSearchCreateBodyParam = FromSchema<typeof schemas.TextSearchCreate.body>;
export type TextSearchCreateResponse200 = FromSchema<
  (typeof schemas.TextSearchCreate.response)['200']
>;
export type TextSearchCreateResponse400 = FromSchema<
  (typeof schemas.TextSearchCreate.response)['400']
>;
export type TextSearchCreateResponse403 = FromSchema<
  (typeof schemas.TextSearchCreate.response)['403']
>;
export type TextSearchCreateResponse404 = FromSchema<
  (typeof schemas.TextSearchCreate.response)['404']
>;
export type TextSearchCreateResponse500 = FromSchema<
  (typeof schemas.TextSearchCreate.response)['500']
>;
export type TextSentimentAnalysisCreateBodyParam = FromSchema<
  typeof schemas.TextSentimentAnalysisCreate.body
>;
export type TextSentimentAnalysisCreateResponse200 = FromSchema<
  (typeof schemas.TextSentimentAnalysisCreate.response)['200']
>;
export type TextSentimentAnalysisCreateResponse400 = FromSchema<
  (typeof schemas.TextSentimentAnalysisCreate.response)['400']
>;
export type TextSentimentAnalysisCreateResponse403 = FromSchema<
  (typeof schemas.TextSentimentAnalysisCreate.response)['403']
>;
export type TextSentimentAnalysisCreateResponse404 = FromSchema<
  (typeof schemas.TextSentimentAnalysisCreate.response)['404']
>;
export type TextSentimentAnalysisCreateResponse500 = FromSchema<
  (typeof schemas.TextSentimentAnalysisCreate.response)['500']
>;
export type TextSpellCheckCreateBodyParam = FromSchema<typeof schemas.TextSpellCheckCreate.body>;
export type TextSpellCheckCreateResponse200 = FromSchema<
  (typeof schemas.TextSpellCheckCreate.response)['200']
>;
export type TextSpellCheckCreateResponse400 = FromSchema<
  (typeof schemas.TextSpellCheckCreate.response)['400']
>;
export type TextSpellCheckCreateResponse403 = FromSchema<
  (typeof schemas.TextSpellCheckCreate.response)['403']
>;
export type TextSpellCheckCreateResponse404 = FromSchema<
  (typeof schemas.TextSpellCheckCreate.response)['404']
>;
export type TextSpellCheckCreateResponse500 = FromSchema<
  (typeof schemas.TextSpellCheckCreate.response)['500']
>;
export type TextSummarizeCreateBodyParam = FromSchema<typeof schemas.TextSummarizeCreate.body>;
export type TextSummarizeCreateResponse200 = FromSchema<
  (typeof schemas.TextSummarizeCreate.response)['200']
>;
export type TextSummarizeCreateResponse400 = FromSchema<
  (typeof schemas.TextSummarizeCreate.response)['400']
>;
export type TextSummarizeCreateResponse403 = FromSchema<
  (typeof schemas.TextSummarizeCreate.response)['403']
>;
export type TextSummarizeCreateResponse404 = FromSchema<
  (typeof schemas.TextSummarizeCreate.response)['404']
>;
export type TextSummarizeCreateResponse500 = FromSchema<
  (typeof schemas.TextSummarizeCreate.response)['500']
>;
export type TextSyntaxAnalysisCreateBodyParam = FromSchema<
  typeof schemas.TextSyntaxAnalysisCreate.body
>;
export type TextSyntaxAnalysisCreateResponse200 = FromSchema<
  (typeof schemas.TextSyntaxAnalysisCreate.response)['200']
>;
export type TextSyntaxAnalysisCreateResponse400 = FromSchema<
  (typeof schemas.TextSyntaxAnalysisCreate.response)['400']
>;
export type TextSyntaxAnalysisCreateResponse403 = FromSchema<
  (typeof schemas.TextSyntaxAnalysisCreate.response)['403']
>;
export type TextSyntaxAnalysisCreateResponse404 = FromSchema<
  (typeof schemas.TextSyntaxAnalysisCreate.response)['404']
>;
export type TextSyntaxAnalysisCreateResponse500 = FromSchema<
  (typeof schemas.TextSyntaxAnalysisCreate.response)['500']
>;
export type TextTopicExtractionCreateBodyParam = FromSchema<
  typeof schemas.TextTopicExtractionCreate.body
>;
export type TextTopicExtractionCreateResponse200 = FromSchema<
  (typeof schemas.TextTopicExtractionCreate.response)['200']
>;
export type TextTopicExtractionCreateResponse400 = FromSchema<
  (typeof schemas.TextTopicExtractionCreate.response)['400']
>;
export type TextTopicExtractionCreateResponse403 = FromSchema<
  (typeof schemas.TextTopicExtractionCreate.response)['403']
>;
export type TextTopicExtractionCreateResponse404 = FromSchema<
  (typeof schemas.TextTopicExtractionCreate.response)['404']
>;
export type TextTopicExtractionCreateResponse500 = FromSchema<
  (typeof schemas.TextTopicExtractionCreate.response)['500']
>;
export type TranslationAutomaticTranslationCreateBodyParam = FromSchema<
  typeof schemas.TranslationAutomaticTranslationCreate.body
>;
export type TranslationAutomaticTranslationCreateResponse200 = FromSchema<
  (typeof schemas.TranslationAutomaticTranslationCreate.response)['200']
>;
export type TranslationAutomaticTranslationCreateResponse400 = FromSchema<
  (typeof schemas.TranslationAutomaticTranslationCreate.response)['400']
>;
export type TranslationAutomaticTranslationCreateResponse403 = FromSchema<
  (typeof schemas.TranslationAutomaticTranslationCreate.response)['403']
>;
export type TranslationAutomaticTranslationCreateResponse404 = FromSchema<
  (typeof schemas.TranslationAutomaticTranslationCreate.response)['404']
>;
export type TranslationAutomaticTranslationCreateResponse500 = FromSchema<
  (typeof schemas.TranslationAutomaticTranslationCreate.response)['500']
>;
export type TranslationDocumentTranslationCreateBodyParam = FromSchema<
  typeof schemas.TranslationDocumentTranslationCreate.body
>;
export type TranslationDocumentTranslationCreateResponse200 = FromSchema<
  (typeof schemas.TranslationDocumentTranslationCreate.response)['200']
>;
export type TranslationDocumentTranslationCreateResponse400 = FromSchema<
  (typeof schemas.TranslationDocumentTranslationCreate.response)['400']
>;
export type TranslationDocumentTranslationCreateResponse403 = FromSchema<
  (typeof schemas.TranslationDocumentTranslationCreate.response)['403']
>;
export type TranslationDocumentTranslationCreateResponse404 = FromSchema<
  (typeof schemas.TranslationDocumentTranslationCreate.response)['404']
>;
export type TranslationDocumentTranslationCreateResponse500 = FromSchema<
  (typeof schemas.TranslationDocumentTranslationCreate.response)['500']
>;
export type TranslationLanguageDetectionCreateBodyParam = FromSchema<
  typeof schemas.TranslationLanguageDetectionCreate.body
>;
export type TranslationLanguageDetectionCreateResponse200 = FromSchema<
  (typeof schemas.TranslationLanguageDetectionCreate.response)['200']
>;
export type TranslationLanguageDetectionCreateResponse400 = FromSchema<
  (typeof schemas.TranslationLanguageDetectionCreate.response)['400']
>;
export type TranslationLanguageDetectionCreateResponse403 = FromSchema<
  (typeof schemas.TranslationLanguageDetectionCreate.response)['403']
>;
export type TranslationLanguageDetectionCreateResponse404 = FromSchema<
  (typeof schemas.TranslationLanguageDetectionCreate.response)['404']
>;
export type TranslationLanguageDetectionCreateResponse500 = FromSchema<
  (typeof schemas.TranslationLanguageDetectionCreate.response)['500']
>;
export type VideoExplicitContentDetectionAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoExplicitContentDetectionAsyncCreate.body
>;
export type VideoExplicitContentDetectionAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncCreate.response)['200']
>;
export type VideoExplicitContentDetectionAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.metadata
>;
export type VideoExplicitContentDetectionAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.response)['200']
>;
export type VideoExplicitContentDetectionAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.response)['400']
>;
export type VideoExplicitContentDetectionAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.response)['403']
>;
export type VideoExplicitContentDetectionAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.response)['404']
>;
export type VideoExplicitContentDetectionAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve2.response)['500']
>;
export type VideoExplicitContentDetectionAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoExplicitContentDetectionAsyncRetrieve.response)['200']
>;
export type VideoFaceDetectionAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoFaceDetectionAsyncCreate.body
>;
export type VideoFaceDetectionAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncCreate.response)['200']
>;
export type VideoFaceDetectionAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoFaceDetectionAsyncRetrieve2.metadata
>;
export type VideoFaceDetectionAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve2.response)['200']
>;
export type VideoFaceDetectionAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve2.response)['400']
>;
export type VideoFaceDetectionAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve2.response)['403']
>;
export type VideoFaceDetectionAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve2.response)['404']
>;
export type VideoFaceDetectionAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve2.response)['500']
>;
export type VideoFaceDetectionAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoFaceDetectionAsyncRetrieve.response)['200']
>;
export type VideoLabelDetectionAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoLabelDetectionAsyncCreate.body
>;
export type VideoLabelDetectionAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncCreate.response)['200']
>;
export type VideoLabelDetectionAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoLabelDetectionAsyncRetrieve2.metadata
>;
export type VideoLabelDetectionAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve2.response)['200']
>;
export type VideoLabelDetectionAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve2.response)['400']
>;
export type VideoLabelDetectionAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve2.response)['403']
>;
export type VideoLabelDetectionAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve2.response)['404']
>;
export type VideoLabelDetectionAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve2.response)['500']
>;
export type VideoLabelDetectionAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoLabelDetectionAsyncRetrieve.response)['200']
>;
export type VideoLogoDetectionAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoLogoDetectionAsyncCreate.body
>;
export type VideoLogoDetectionAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncCreate.response)['200']
>;
export type VideoLogoDetectionAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoLogoDetectionAsyncRetrieve2.metadata
>;
export type VideoLogoDetectionAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve2.response)['200']
>;
export type VideoLogoDetectionAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve2.response)['400']
>;
export type VideoLogoDetectionAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve2.response)['403']
>;
export type VideoLogoDetectionAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve2.response)['404']
>;
export type VideoLogoDetectionAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve2.response)['500']
>;
export type VideoLogoDetectionAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoLogoDetectionAsyncRetrieve.response)['200']
>;
export type VideoObjectTrackingAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoObjectTrackingAsyncCreate.body
>;
export type VideoObjectTrackingAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncCreate.response)['200']
>;
export type VideoObjectTrackingAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoObjectTrackingAsyncRetrieve2.metadata
>;
export type VideoObjectTrackingAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve2.response)['200']
>;
export type VideoObjectTrackingAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve2.response)['400']
>;
export type VideoObjectTrackingAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve2.response)['403']
>;
export type VideoObjectTrackingAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve2.response)['404']
>;
export type VideoObjectTrackingAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve2.response)['500']
>;
export type VideoObjectTrackingAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoObjectTrackingAsyncRetrieve.response)['200']
>;
export type VideoPersonTrackingAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoPersonTrackingAsyncCreate.body
>;
export type VideoPersonTrackingAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncCreate.response)['200']
>;
export type VideoPersonTrackingAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoPersonTrackingAsyncRetrieve2.metadata
>;
export type VideoPersonTrackingAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve2.response)['200']
>;
export type VideoPersonTrackingAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve2.response)['400']
>;
export type VideoPersonTrackingAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve2.response)['403']
>;
export type VideoPersonTrackingAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve2.response)['404']
>;
export type VideoPersonTrackingAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve2.response)['500']
>;
export type VideoPersonTrackingAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoPersonTrackingAsyncRetrieve.response)['200']
>;
export type VideoTextDetectionAsyncCreateBodyParam = FromSchema<
  typeof schemas.VideoTextDetectionAsyncCreate.body
>;
export type VideoTextDetectionAsyncCreateResponse200 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncCreate.response)['200']
>;
export type VideoTextDetectionAsyncRetrieve2MetadataParam = FromSchema<
  typeof schemas.VideoTextDetectionAsyncRetrieve2.metadata
>;
export type VideoTextDetectionAsyncRetrieve2Response200 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve2.response)['200']
>;
export type VideoTextDetectionAsyncRetrieve2Response400 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve2.response)['400']
>;
export type VideoTextDetectionAsyncRetrieve2Response403 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve2.response)['403']
>;
export type VideoTextDetectionAsyncRetrieve2Response404 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve2.response)['404']
>;
export type VideoTextDetectionAsyncRetrieve2Response500 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve2.response)['500']
>;
export type VideoTextDetectionAsyncRetrieveResponse200 = FromSchema<
  (typeof schemas.VideoTextDetectionAsyncRetrieve.response)['200']
>;
