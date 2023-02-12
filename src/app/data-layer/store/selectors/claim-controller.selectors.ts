import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromClaimController from '../reducers/claim-controller.reducer';
import * as _ from 'lodash-es';

/**
 * ClaimBrief Selector
 */

export const selectClaimBrief = createFeatureSelector<GlobalState, fromClaimController.ClaimBriefState>(fromClaimController.claimBriefFeatureKey);
export const claimBriefSelector = createSelector(selectClaimBrief, (claimBriefState: fromClaimController.ClaimBriefState) => _.cloneDeep(claimBriefState.claimBrief));

/**
 * ClaimantBrief Selector
 */

export const selectClaimantBrief = createFeatureSelector<GlobalState, fromClaimController.ClaimantBriefState>(fromClaimController.claimantBriefFeatureKey);
export const claimantBriefSelector = createSelector(selectClaimantBrief, (claimantBriefState: fromClaimController.ClaimantBriefState) => _.cloneDeep(claimantBriefState.claimantBrief));

/**
 * ClaimServiceProviderBrief Selector
 */

export const selectClaimServiceProviderBrief = createFeatureSelector<GlobalState, fromClaimController.ClaimServiceProviderBriefState>(fromClaimController.claimServiceProviderBriefFeatureKey);
export const claimServiceProviderBriefSelector = createSelector(selectClaimServiceProviderBrief, (claimServiceProviderBriefState: fromClaimController.ClaimServiceProviderBriefState) => _.cloneDeep(claimServiceProviderBriefState.claimServiceProviderBrief));

/**
 * ClaimComboData Selector
 */

export const selectClaimComboData = createFeatureSelector<GlobalState, fromClaimController.ClaimComboDataState>(fromClaimController.claimComboDataFeatureKey);
export const claimComboDataSelector = createSelector(selectClaimComboData, (claimComboDataState: fromClaimController.ClaimComboDataState) => _.cloneDeep(claimComboDataState.claimComboData));
