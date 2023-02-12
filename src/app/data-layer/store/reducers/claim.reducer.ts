import {Action, createReducer, on} from '@ngrx/store';
import {ClaimSummary} from '../../../business-layer/models/ClaimSummary';
import {loadShowClaimSuccess} from '../actions/claim.action';
import {loadLogout} from "../actions/logout.actions";
import {loadExitApplication} from "../actions/exit-application.actions";
/*░░░░░░░░░░░░░░░░░░░░░░Feature Keys░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const claimSummaryFeatureKey = 'claimSummary';

/*░░░░░░░░░░░░░░░░░░░░░░Claim Accident Summary░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export interface claimSummaryState {
  readonly claimSummary: ClaimSummary[];
}


export const claimSummaryInitialState: claimSummaryState = {
  claimSummary: undefined,
};


const showClaimReducer = createReducer(
  claimSummaryInitialState,
  on(loadShowClaimSuccess, (claimSummaryState, {data}) => ({claimSummary: data.claimSummary})),
  on(loadLogout, (claimSummaryState, {data}) => ({claimSummary: data})),
  on(loadExitApplication, (claimSummaryState, {data}) => ({claimSummary: data})),
);


export function claimSummaryReducer(claimSummaryState: claimSummaryState | undefined, action: Action) {
  return showClaimReducer(claimSummaryState, action);
}
