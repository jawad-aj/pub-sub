import {createAction, props} from '@ngrx/store';
import {JsonData} from "../../../business-layer/models/JsonData";
import {Diary} from "../../../business-layer/models/Diary";
import {CmsParams} from "../../../business-layer/models/CmsParams";


/**░░░░░░░░░░░░░░░░░░░░░░Upload New Document Actions░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░**/
export const loadUploadNewDocument = createAction(
  '[Attachment] Load Upload New Document',
  props<{ data: JsonData }>()
);

export const loadUploadNewDocumentSuccess = createAction(
  '[Attachment] Load Upload New Document Success',
  props<{ data: any}>()
);

export const loadDownloadSupportingDocuments = createAction(
  '[Attachment] Load Download Supporting Document',
  props<{ data: CmsParams }>()
);

export const loadDownloadSupportingDocumentsSuccess = createAction(
  '[Attachment] Load Download Supporting Document Success',
  props<{ data: any }>()
);
export const loadUploadAccidentNewDocument = createAction(
  '[Attachment] Load UploadAccident New Document',
  props<{ data: JsonData }>()
);

export const loadUploadAccidentNewDocumentSuccess = createAction(
  '[Attachment] Load UploadAccident New Document Success',
  props<{ data: any}>()
);

export const loadResetFileURL = createAction(
  '[FILE URL] Load Reset File URL',
  props<{ data: any}>()
);
