import {createAction, props} from '@ngrx/store';

/**
 *  FraudCheck Brief Controller
 */
export const loadFraudCheckBrief = createAction(
  '[FraudCheckController] Load FraudCheckBrief',
  props<{ data: any }>()
);
export const loadFraudCheckBriefSuccess = createAction(
  '[FraudCheckController] Load FraudCheckBrief Success',
  props<{ data: any }>()
);

/**
 *  FraudCheck ComboData Controller
 */
export const loadFraudCheckComboData = createAction(
  '[FraudCheckController] Load FraudCheckComboData',
  props<{ data: any }>()
);
export const loadFraudCheckComboDataSuccess = createAction(
  '[FraudCheckController] Load FraudCheckComboData Success',
  props<{ data: any }>()
);


/**
 *  ReviewApproved Brief Controller
 */
export const loadReviewApprovedBrief = createAction(
  '[FraudCheckController] Load ReviewApprovedBrief',
  props<{ data: any }>()
);
export const loadReviewApprovedBriefSuccess = createAction(
  '[FraudCheckController] Load ReviewApprovedBrief Success',
  props<{ data: any }>()
);

/**
 *  ReviewApproved ComboData Controller
 */
export const loadReviewApprovedComboData = createAction(
  '[FraudCheckController] Load ReviewApprovedComboData',
  props<{ data: any }>()
);
export const loadReviewApprovedComboDataSuccess = createAction(
  '[FraudCheckController] Load ReviewApprovedComboData Success',
  props<{ data: any }>()
);

/**
 *  FraudCheckApproved Brief Controller
 */
export const loadFraudCheckApprovedBrief = createAction(
  '[FraudCheckController] Load FraudCheckApprovedBrief',
  props<{ data: any }>()
);
export const loadFraudCheckApprovedBriefSuccess = createAction(
  '[FraudCheckController] Load FraudCheckApprovedBrief Success',
  props<{ data: any }>()
);


/**
 *  InvestigationApproval ComboData Controller
 */
export const loadInvestigationApprovalComboData = createAction(
  '[FraudCheckController] Load InvestigationApprovalComboData',
  props<{ data: any }>()
);
export const loadInvestigationApprovalComboDataSuccess = createAction(
  '[FraudCheckController] Load InvestigationApprovalComboData Success',
  props<{ data: any }>()
);


/**
 *  InvestigationApproval Brief Controller
 */
export const loadInvestigationApprovalBrief = createAction(
  '[FraudCheckController] Load InvestigationApprovalBrief',
  props<{ data: any }>()
);
export const loadInvestigationApprovalBriefSuccess = createAction(
  '[FraudCheckController] Load InvestigationApprovalBrief Success',
  props<{ data: any }>()
);

