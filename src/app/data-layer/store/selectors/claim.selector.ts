import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromClaimComponent from '../reducers/claim.reducer';
import * as _ from 'lodash-es';
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ClaimSummary░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

export const selectClaimSummary = createFeatureSelector<GlobalState, fromClaimComponent.claimSummaryState>(fromClaimComponent.claimSummaryFeatureKey);
export const claimSummarySelector = createSelector(selectClaimSummary, (claimSummaryState: fromClaimComponent.claimSummaryState) => _.cloneDeep(claimSummaryState.claimSummary));



