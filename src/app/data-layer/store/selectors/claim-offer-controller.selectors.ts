import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromClaimOfferController from '../reducers/claim-offer-controller.reducer';
import * as _ from 'lodash-es';

/**
 * ClaimOfferBrief Selector
 */

export const selectClaimOfferBriefBrief = createFeatureSelector<GlobalState, fromClaimOfferController.ClaimOfferBriefState>(fromClaimOfferController.claimOfferBriefFeatureKey);
export const claimOfferBriefSelector = createSelector(selectClaimOfferBriefBrief, (claimOfferBriefState: fromClaimOfferController.ClaimOfferBriefState) => _.cloneDeep(claimOfferBriefState.claimOfferBrief));
/**
 * ClaimOfferComboData Selector
 */

export const selectClaimOfferComboDataComboData = createFeatureSelector<GlobalState, fromClaimOfferController.ClaimOfferComboDataState>(fromClaimOfferController.claimOfferComboDataFeatureKey);
export const claimOfferComboDataSelector = createSelector(selectClaimOfferComboDataComboData, (claimOfferComboDataState: fromClaimOfferController.ClaimOfferComboDataState) => _.cloneDeep(claimOfferComboDataState.claimOfferComboData));

/**
 * ClaimOfferClaimAuthorizationBrief Selector
 */

export const selectClaimOfferClaimAuthorizationBriefBrief = createFeatureSelector<GlobalState, fromClaimOfferController.ClaimOfferClaimAuthorizationState>(fromClaimOfferController.claimOfferClaimAuthorizationBriefFeatureKey);
export const claimOfferClaimAuthorizationBriefSelector = createSelector(selectClaimOfferClaimAuthorizationBriefBrief, (claimOfferClaimAuthorizationBriefState: fromClaimOfferController.ClaimOfferClaimAuthorizationState) => _.cloneDeep(claimOfferClaimAuthorizationBriefState.claimOfferClaimAuthorizationBrief));

/**
 * ClaimOfferApprovedBrief Selector
 */

export const selectClaimOfferApprovedBriefBrief = createFeatureSelector<GlobalState, fromClaimOfferController.ClaimOfferApprovedBriefState>(fromClaimOfferController.claimOfferApprovedBriefFeatureKey);
export const claimOfferApprovedBriefSelector = createSelector(selectClaimOfferApprovedBriefBrief, (claimOfferApprovedBriefState: fromClaimOfferController.ClaimOfferApprovedBriefState) => _.cloneDeep(claimOfferApprovedBriefState.claimOfferApprovedBrief));
