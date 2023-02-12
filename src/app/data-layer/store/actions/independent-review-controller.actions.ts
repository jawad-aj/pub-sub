import {createAction, props} from '@ngrx/store';

/**
 *  IndependentReview Brief Controller
 */
export const loadIndependentReviewBrief = createAction(
  '[IndependentReviewController] Load IndependentReviewBrief',
  props<{ data: any }>()
);
export const loadIndependentReviewBriefSuccess = createAction(
  '[IndependentReviewController] Load IndependentReviewBrief Success',
  props<{ data: any }>()
);

/**
 *  IndependentReview ComboData Controller
 */
export const loadIndependentReviewComboData = createAction(
  '[IndependentReviewController] Load IndependentReviewComboData',
  props<{ data: any }>()
);
export const loadIndependentReviewComboDataSuccess = createAction(
  '[IndependentReviewController] Load IndependentReviewComboData Success',
  props<{ data: any }>()
);
/**
 *  IndependentReviewClaimAuthorization Brief Controller
 */
export const loadIndependentReviewClaimAuthorizationBrief = createAction(
  '[IndependentReviewClaimAuthorizationController] Load IndependentReviewClaimAuthorizationBrief',
  props<{ data: any }>()
);
export const loadIndependentReviewClaimAuthorizationBriefSuccess = createAction(
  '[IndependentReviewClaimAuthorizationController] Load IndependentReviewClaimAuthorizationBrief Success',
  props<{ data: any }>()
);
/**
 *  IndependentReviewClaimAuthorization ComboData Controller
 */
export const loadIndependentReviewClaimAuthorizationComboData = createAction(
  '[IndependentReviewClaimAuthorizationController] Load IndependentReviewClaimAuthorizationComboData',
  props<{ data: any }>()
);
export const loadIndependentReviewClaimAuthorizationComboDataSuccess = createAction(
  '[IndependentReviewClaimAuthorizationController] Load IndependentReviewClaimAuthorizationComboData Success',
  props<{ data: any }>()
);

/**
 *  IndependentReviewApproved Brief Controller
 */
export const loadIndependentReviewApprovedBrief = createAction(
  '[IndependentReviewApprovedController] Load IndependentReviewApprovedBrief',
  props<{ data: any }>()
);
export const loadIndependentReviewApprovedBriefSuccess = createAction(
  '[IndependentReviewApprovedController] Load IndependentReviewApprovedBrief Success',
  props<{ data: any }>()
);
