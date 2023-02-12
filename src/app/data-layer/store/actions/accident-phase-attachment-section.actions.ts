import { createAction, props } from '@ngrx/store';

/**
 *  AccidentPhaseAttachmentDialogSection Brief
 */
export const loadAccidentPhaseAttachmentDialogBrief = createAction(
  '[AccidentPhaseAttachmentDialog] Load AccidentPhaseAttachmentDialogSectionBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseAttachmentDialogBriefSuccess = createAction(
  '[AccidentPhaseAttachmentDialog] Load AccidentPhaseAttachmentDialogSectionBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseAttachmentDialogSectionComboData
 */
export const loadAccidentPhaseAttachmentDialogComboData = createAction(
  '[AccidentPhaseAttachmentDialogComments] Load AccidentPhaseAttachmentDialogSectionComboData',
  props<{ data: any }>()
);
export const loadAccidentPhaseAttachmentDialogComboDataSuccess = createAction(
  '[AccidentPhaseAttachmentDialogComments] Load AccidentPhaseAttachmentDialogSectionComboData Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseAttachmentDialog SelectedRecord
 */
export const loadAccidentPhaseAttachmentDialogSelectedRecord = createAction(
  '[AccidentPhaseAttachmentDialog] Load AccidentPhaseAttachmentDialogSelectedRecord',
  props<{ data: any }>()
);
export const loadAccidentPhaseAttachmentDialogSelectedRecordSuccess = createAction(
  '[AccidentPhaseAttachmentDialog] Load AccidentPhaseAttachmentDialogSelectedRecord Success',
  props<{ data: any }>()
);
