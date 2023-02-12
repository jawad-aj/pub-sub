import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {
  loadClaimOfferApprovedBriefSuccess,
  loadClaimOfferBriefSuccess,
  loadClaimOfferClaimAuthorizationBriefSuccess,
  loadClaimOfferComboDataSuccess
} from '../actions/claim-offer-controller.actions';

/**
 * ClaimOffer Reducer
 */
export const claimOfferBriefFeatureKey = 'claimOfferBrief';

export interface ClaimOfferBriefState {
  readonly claimOfferBrief: any;
}

export const initialStateClaimOfferBrief: ClaimOfferBriefState = {
  claimOfferBrief: undefined,
};

const claimOfferBriefStateReducer = createReducer(
  initialStateClaimOfferBrief,
  on(loadClaimOfferBriefSuccess, (claimOfferBriefState, {data}) => ({claimOfferBrief: data.claimOfferBrief})),
  on(loadExitApplication, (claimOfferBriefState, {data}) => ({claimOfferBrief: data})),
  on(loadLogout, (claimOfferBriefState, {data}) => ({claimOfferBrief: data})),
 );

export function claimOfferBriefReducer(ClaimOfferState: ClaimOfferBriefState | undefined, action: Action) {
  return claimOfferBriefStateReducer(ClaimOfferState, action);
}

/**
 * ClaimOffer Reducer
 */
export const claimOfferComboDataFeatureKey = 'claimOfferComboData';

export interface ClaimOfferComboDataState {
  readonly claimOfferComboData: any;
}

export const initialStateClaimOfferComboData: ClaimOfferComboDataState = {
  claimOfferComboData: undefined,
};

const claimOfferComboDataStateReducer = createReducer(
  initialStateClaimOfferComboData,
  on(loadClaimOfferComboDataSuccess, (claimOfferComboDataState, {data}) => ({claimOfferComboData: data.claimOfferComboData})),
  on(loadExitApplication, (claimOfferComboDataState, {data}) => ({claimOfferComboData: data})),
  on(loadLogout, (claimOfferComboDataState, {data}) => ({claimOfferComboData: data})),
 );

export function claimOfferComboDataReducer(ClaimOfferState: ClaimOfferComboDataState | undefined, action: Action) {
  return claimOfferComboDataStateReducer(ClaimOfferState, action);
}



/**
 * ClaimOfferClaimAuthorization Reducer
 */
export const claimOfferClaimAuthorizationBriefFeatureKey = 'claimOfferClaimAuthorizationBrief';

export interface ClaimOfferClaimAuthorizationState {
  readonly claimOfferClaimAuthorizationBrief: any;
}

export const initialStateClaimOfferClaimAuthorization: ClaimOfferClaimAuthorizationState = {
  claimOfferClaimAuthorizationBrief: undefined,
};

const claimOfferClaimAuthorizationBriefStateReducer = createReducer(
  initialStateClaimOfferClaimAuthorization,
  on(loadClaimOfferClaimAuthorizationBriefSuccess, (claimOfferClaimAuthorizationBriefState, {data}) => ({claimOfferClaimAuthorizationBrief: data.claimOfferClaimAuthorizationBrief})),
  on(loadExitApplication, (claimOfferClaimAuthorizationBriefState, {data}) => ({claimOfferClaimAuthorizationBrief: data})),
  on(loadLogout, (claimOfferClaimAuthorizationBriefState, {data}) => ({claimOfferClaimAuthorizationBrief: data})),
 );

export function claimOfferClaimAuthorizationBriefReducer(ClaimOfferClaimAuthorizationState: ClaimOfferClaimAuthorizationState | undefined, action: Action) {
  return claimOfferClaimAuthorizationBriefStateReducer(ClaimOfferClaimAuthorizationState, action);
}




/**
 * ClaimOfferApproved Reducer
 */
export const claimOfferApprovedBriefFeatureKey = 'claimOfferApprovedBrief';

export interface ClaimOfferApprovedBriefState {
  readonly claimOfferApprovedBrief: any;
}

export const initialStateClaimOfferApprovedBrief: ClaimOfferApprovedBriefState = {
  claimOfferApprovedBrief: undefined,
};

const claimOfferApprovedBriefStateReducer = createReducer(
  initialStateClaimOfferApprovedBrief,
  on(loadClaimOfferApprovedBriefSuccess, (claimOfferApprovedBriefState, {data}) => ({claimOfferApprovedBrief: data.claimOfferApprovedBrief})),
  on(loadExitApplication, (claimOfferApprovedBriefState, {data}) => ({claimOfferApprovedBrief: data})),
  on(loadLogout, (claimOfferApprovedBriefState, {data}) => ({claimOfferApprovedBrief: data})),
 );

export function claimOfferApprovedBriefReducer(ClaimOfferApprovedState: ClaimOfferApprovedBriefState | undefined, action: Action) {
  return claimOfferApprovedBriefStateReducer(ClaimOfferApprovedState, action);
}
