import {createAction, props} from '@ngrx/store';

/**
 * NonStructuralApplicationChanges
 */
export const loadNonStructuralApplicationChange = createAction(
  '[Application] Load NonStructuralApplicationChange',
  props<{ data: any }>()
);

export const loadNonStructuralApplicationChangeSuccess = createAction(
  '[Application] Load NonStructuralApplicationChange Success',
  props<{ data: any }>()
);

/**
 * ApplicationHeaderInfos
 */
export const loadApplicationHeaderInfo = createAction(
  '[Application] Load ApplicationHeaderInfo',
  props<{ data: any }>()
);

export const loadApplicationHeaderInfoSuccess = createAction(
  '[Application] Load ApplicationHeaderInfo Success',
  props<{ data: any }>()
);

/**
 * SaveClaimApplication
 */
export const loadSaveClaimApplication = createAction(
  '[Application] Load SaveClaimApplication',
  props<{ data: any }>()
);
export const loadSaveClaimApplicationSuccess = createAction(
  '[Application] Load SaveClaimApplicationSuccess',
  props<{ data: any }>()
);

/**
 * ImplicitSaveClaimApplication
 */
export const loadImplicitSaveClaimApplication = createAction(
  '[Application] Load ImplicitSaveClaimApplication',
  props<{ data: any }>()
);
export const loadImplicitSaveClaimApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimApplicationSuccess',
  props<{ data: any }>()
);

/**
 * NonStructuralAccidentApplicationChanges
 */
export const loadNonStructuralAccidentApplicationChange = createAction(
  '[AccidentApplication] Load NonStructuralAccidentApplicationChange',
  props<{ data: any }>()
);

export const loadNonStructuralAccidentApplicationChangeSuccess = createAction(
  '[AccidentApplication] Load NonStructuralAccidentApplicationChange Success',
  props<{ data: any }>()
);

/**
 * NewAccidentApplication
 */
export const loadNewAccident = createAction(
  '[Accident Application] Load New Accident',
  props<{ data: any }>()
);
export const loadNewAccidentSuccess = createAction(
  '[Accident Application] Load New AccidentSuccess',
  props<{ data: any }>()
);

/**
 * SubmitAccidentApplication
 */
export const loadSubmitAccident = createAction(
  '[Accident Application] Load Submit Accident',
  props<{ data: any }>()
);export const loadSubmitAccidentSuccess = createAction(
  '[Accident Application] Load Submit AccidentSuccess',
  props<{ data: any }>()
);
/**
 * SaveAccidentApplication
 */
export const loadUpdateAccident = createAction(
  '[Accident Application] Load Update Accident',
  props<{ data: any }>()
);
export const loadUpdateAccidentSuccess = createAction(
  '[Accident Application] Load Update AccidentSuccess',
  props<{ data: any }>()
);

/**
 * PersistAccidentApplication
 */
export const loadPersistAccident = createAction(
  '[Accident Application] Load Persist Accident',
  props<{ data: any }>()
);
export const loadPersistAccidentSuccess = createAction(
  '[Accident Application] Load Persist AccidentSuccess',
  props<{ data: any }>()
);
