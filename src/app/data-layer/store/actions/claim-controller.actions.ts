import {createAction, props} from '@ngrx/store';

/**
 *  Claim Brief Controller
 */
export const loadClaimBrief = createAction(
  '[ClaimController] Load ClaimBrief',
  props<{ data: any }>()
);
export const loadClaimBriefSuccess = createAction(
  '[ClaimController] Load ClaimBrief Success',
  props<{ data: any }>()
);

/**
 *  Claimant Brief Controller
 */
export const loadClaimantBrief = createAction(
  '[ClaimantController] Load ClaimantBrief',
  props<{ data: any }>()
);
export const loadClaimantBriefSuccess = createAction(
  '[ClaimantController] Load ClaimantBrief Success',
  props<{ data: any }>()
);
/**
 *  ClaimServiceProvider Brief Controller
 */
export const loadClaimServiceProviderBrief = createAction(
  '[ClaimServiceProviderController] Load ClaimServiceProviderBrief',
  props<{ data: any }>()
);
export const loadClaimServiceProviderBriefSuccess = createAction(
  '[ClaimServiceProviderController] Load ClaimServiceProviderBrief Success',
  props<{ data: any }>()
);

/**
 *  Claim ComboData Controller
 */
export const loadClaimComboData = createAction(
  '[ClaimController] Load ClaimComboData',
  props<{ data: any }>()
);
export const loadClaimComboDataSuccess = createAction(
  '[ClaimController] Load ClaimComboData Success',
  props<{ data: any }>()
);
