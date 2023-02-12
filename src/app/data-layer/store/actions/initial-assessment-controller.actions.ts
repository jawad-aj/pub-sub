import {createAction, props} from '@ngrx/store';

/**
 *  InitialAssessment Brief Controller
 */
export const loadInitialAssessmentBrief = createAction(
  '[InitialAssessmentController] Load InitialAssessmentBrief',
  props<{ data: any }>()
);
export const loadInitialAssessmentBriefSuccess = createAction(
  '[InitialAssessmentController] Load InitialAssessmentBrief Success',
  props<{ data: any }>()
);

/**
 *  InitialAssessment ComboData Controller
 */
export const loadInitialAssessmentComboData = createAction(
  '[InitialAssessmentController] Load InitialAssessmentComboData',
  props<{ data: any }>()
);
export const loadInitialAssessmentComboDataSuccess = createAction(
  '[InitialAssessmentController] Load InitialAssessmentComboData Success',
  props<{ data: any }>()
);
