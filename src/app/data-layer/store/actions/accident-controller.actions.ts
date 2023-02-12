import {createAction, props} from '@ngrx/store';

/**
 *  Accident Brief Controller
 */
export const loadAccidentBrief = createAction(
  '[AccidentController] Load AccidentBrief',
  props<{ data: any }>()
);
export const loadAccidentBriefSuccess = createAction(
  '[AccidentController] Load AccidentBrief Success',
  props<{ data: any }>()
);

/**
 *  Accident ComboData Controller
 */
export const loadAccidentComboData = createAction(
  '[AccidentController] Load AccidentComboData',
  props<{ data: any }>()
);
export const loadAccidentComboDataSuccess = createAction(
  '[AccidentController] Load AccidentComboData Success',
  props<{ data: any }>()
);

/**
 *  AccidentApplication Accident Brief Controller
 */
export const loadAccidentApplicationAccidentBrief = createAction(
  '[AccidentApplication] Load AccidentApplication AccidentBrief',
  props<{ data: any }>()
);
export const loadAccidentApplicationAccidentBriefSuccess = createAction(
  '[AccidentApplication] Load AccidentApplication AccidentBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentApplication Accident ComboData Controller
 */
export const loadAccidentApplicationAccidentComboData = createAction(
  '[AccidentApplication] Load AccidentApplication AccidentComboData',
  props<{ data: any }>()
);
export const loadAccidentApplicationAccidentComboDataSuccess = createAction(
  '[AccidentApplication] Load AccidentApplication AccidentComboData Success',
  props<{ data: any }>()
);

