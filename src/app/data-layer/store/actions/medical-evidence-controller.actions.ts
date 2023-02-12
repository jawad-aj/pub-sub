import {createAction, props} from '@ngrx/store';

/**
 *  MedicalEvidence Brief Controller
 */
export const loadMedicalEvidenceBrief = createAction(
  '[MedicalEvidenceController] Load MedicalEvidenceBrief',
  props<{ data: any }>()
);
export const loadMedicalEvidenceBriefSuccess = createAction(
  '[MedicalEvidenceController] Load MedicalEvidenceBrief Success',
  props<{ data: any }>()
);

/**
 *  MedicalEvidence ComboData Controller
 */
export const loadMedicalEvidenceComboData = createAction(
  '[MedicalEvidenceController] Load MedicalEvidenceComboData',
  props<{ data: any }>()
);
export const loadMedicalEvidenceComboDataSuccess = createAction(
  '[MedicalEvidenceController] Load MedicalEvidenceComboData Success',
  props<{ data: any }>()
);
