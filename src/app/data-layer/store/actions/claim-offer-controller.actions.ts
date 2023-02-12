import {createAction, props} from '@ngrx/store';

/**
 *  ClaimOffer Brief Controller
 */
export const loadClaimOfferBrief = createAction(
  '[ClaimOfferController] Load ClaimOfferBrief',
  props<{ data: any }>()
);
export const loadClaimOfferBriefSuccess = createAction(
  '[ClaimOfferController] Load ClaimOfferBrief Success',
  props<{ data: any }>()
);

/**
 *  ClaimOffer ComboData Controller
 */
export const loadClaimOfferComboData = createAction(
  '[ClaimOfferController] Load ClaimOfferComboData',
  props<{ data: any }>()
);
export const loadClaimOfferComboDataSuccess = createAction(
  '[ClaimOfferController] Load ClaimOfferComboData Success',
  props<{ data: any }>()
);

/**
 *  ClaimOfferClaimAuthorization Brief Controller
 */
export const loadClaimOfferClaimAuthorizationBrief = createAction(
  '[ClaimOfferClaimAuthorizationController] Load ClaimOfferClaimAuthorizationBrief',
  props<{ data: any }>()
);
export const loadClaimOfferClaimAuthorizationBriefSuccess = createAction(
  '[ClaimOfferClaimAuthorizationController] Load ClaimOfferClaimAuthorizationBrief Success',
  props<{ data: any }>()
);

/**
 *  ClaimOffer ApprovedBrief Controller
 */
export const loadClaimOfferApprovedBrief = createAction(
  '[ClaimOfferController] Load ClaimOfferApprovedBrief',
  props<{ data: any }>()
);
export const loadClaimOfferApprovedBriefSuccess = createAction(
  '[ClaimOfferController] Load ClaimOfferApprovedBrief Success',
  props<{ data: any }>()
);
