import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromWorkBasket from '../reducers/workBasket.reducer';
import * as workBasketFeatureKeys from '../reducers/workBasket.reducer';
import * as _ from 'lodash-es';

/**
 * ClaimWQSummary Selector
 */

export const selectGetClaimWQSummary = createFeatureSelector<GlobalState, fromWorkBasket.ClaimWQSummaryState>(fromWorkBasket.getClaimWQSummaryFeatureKey);
export const claimWQSummarySelector = createSelector(selectGetClaimWQSummary, (getClaimWQSummaryState: fromWorkBasket.ClaimWQSummaryState) => _.cloneDeep(getClaimWQSummaryState.getClaimWQSummary));

/**
 * ClaimWQSummary Selector
 */

export const selectClaimTypeWQSummary = createFeatureSelector<GlobalState, fromWorkBasket.ClaimTypeWQSummaryState>(fromWorkBasket.claimTypeWQSummaryFeatureKey);
export const claimTypeWQSummarySelector = createSelector(selectClaimTypeWQSummary, (claimTypeWQSummaryState: fromWorkBasket.ClaimTypeWQSummaryState) => _.cloneDeep(claimTypeWQSummaryState.claimTypeWQSummary));
/**
 * ClaimAccidentSummary Selector
 */

export const selectClaimAccidentSummary = createFeatureSelector<GlobalState, fromWorkBasket.ClaimAccidentSummaryState>(workBasketFeatureKeys.claimAccidentSummaryFeatureKey);
export const claimAccidentSummarySelector = createSelector(selectClaimAccidentSummary, (claimAccidentSummaryState: fromWorkBasket.ClaimAccidentSummaryState) => _.cloneDeep(claimAccidentSummaryState.claimAccidentSummary));
