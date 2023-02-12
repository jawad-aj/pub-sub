import {createAction, props} from '@ngrx/store';

/**
 *  Attachment Brief Controller
 */
export const loadAttachmentBrief = createAction(
  '[AttachmentController] Load AttachmentBrief',
  props<{ data: any }>()
);
export const loadAttachmentBriefSuccess = createAction(
  '[AttachmentController] Load AttachmentBrief Success',
  props<{ data: any }>()
);

/**
 *  Attachment ComboData Controller
 */
export const loadAttachmentComboData = createAction(
  '[AttachmentController] Load AttachmentComboData',
  props<{ data: any }>()
);
export const loadAttachmentComboDataSuccess = createAction(
  '[AttachmentController] Load AttachmentComboData Success',
  props<{ data: any }>()
);
/**
 *  AccidentPhaseAttachmentGridBrief
 */
export const loadAccidentPhaseAttachmentGridBrief = createAction(
  '[AccidentPhaseAttachmentController] Load AccidentPhaseAttachmentGridBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseAttachmentGridBriefSuccess = createAction(
  '[AccidentPhaseAttachmentController] Load AccidentPhaseAttachmentGridBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseAttachmentGridComboData
 */
export const loadAccidentPhaseAttachmentGridComboData = createAction(
  '[AccidentPhaseAttachmentController] Load AccidentPhaseAttachmentGridComboData',
  props<{ data: any }>()
);
export const loadAccidentPhaseAttachmentGridComboDataSuccess = createAction(
  '[AccidentPhaseAttachmentController] Load AccidentPhaseAttachmentGridComboData Success',
  props<{ data: any }>()
);
