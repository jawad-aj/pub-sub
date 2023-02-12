import { createAction, props } from '@ngrx/store';

export const loadAccidentPhaseClaimSectionComboData = createAction(
  '[AccidentPhaseClaimSection] Load AccidentPhaseClaimSectionComboData',
  props<{ data: any }>()
);

export const loadAccidentPhaseClaimSectionComboDataSuccess = createAction(
  '[AccidentPhaseClaimSection] Load AccidentPhaseClaimSectionComboData Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseClaim Brief
 */
export const loadAccidentPhaseClaimBrief = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimBriefSuccess = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseClaimServiceProviderBrief
 */
export const loadAccidentPhaseClaimServiceProviderBrief = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimServiceProviderBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimServiceProviderBriefSuccess = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimServiceProviderBrief Success',
  props<{ data: any }>()
);
/**
 *  AccidentPhaseClaimantBrief
 */
export const loadAccidentPhaseClaimantBrief = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimantBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimantBriefSuccess = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimantBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseClaim ComboData
 */
export const loadAccidentPhaseClaimComboData = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimComboData',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimComboDataSuccess = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimComboData Success',
  props<{ data: any }>()
);


/**
 *  AccidentPhaseClaim SelectedRecord
 */
export const loadAccidentPhaseClaimSelectedRecord = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimSelectedRecord',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimSelectedRecordSuccess = createAction(
  '[AccidentPhaseClaim] Load AccidentPhaseClaimSelectedRecord Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseClaimSection Brief
 */
export const loadAccidentPhaseClaimSectionBrief = createAction(
  '[AccidentPhaseClaimSection] Load AccidentPhaseClaimSectionBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseClaimSectionBriefSuccess = createAction(
  '[AccidentPhaseClaimSection] Load AccidentPhaseClaimSectionBrief Success',
  props<{ data: any }>()
);
