import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {
  loadClaimantBriefSuccess,
  loadClaimBriefSuccess,
  loadClaimComboDataSuccess,
  loadClaimServiceProviderBriefSuccess
} from '../actions/claim-controller.actions';
import {ClaimComboData} from '../../../business-layer/models/ClaimComboData';
import {ClaimSmartBrief} from '../../../business-layer/models/brief/ClaimSmart.brief';
import {ClaimantBrief} from '../../../business-layer/models/brief/Claimant.brief';
import {loadExitApplication} from '../actions/exit-application.actions';
import {ClaimServiceProviderBrief} from '../../../business-layer/models/brief/ClaimServiceProvider.brief';

/**
 * ClaimBrief Reducer
 */
export const claimBriefFeatureKey = 'claimBrief';


export interface ClaimBriefState {
  readonly claimBrief: ClaimSmartBrief;
}


export const claimBriefInitialState: ClaimBriefState = {
  claimBrief: undefined,
};


const claimBriefStateReducer = createReducer(
  claimBriefInitialState,
  on(loadClaimBriefSuccess, (claimBriefState, {data}) => ({claimBrief: data.claimBrief})),
  on(loadExitApplication, (claimBriefState, {data}) => ({claimBrief: data})),
  on(loadLogout, (claimBriefState, {data}) => ({claimBrief: data})),
);


export function claimBriefReducer(claimBriefState: ClaimBriefState | undefined, action: Action) {
  return claimBriefStateReducer(claimBriefState, action);
}

/**
 * ClaimantBrief Reducer
 */
export const claimantBriefFeatureKey = 'claimantBrief';


export interface ClaimantBriefState {
  readonly claimantBrief: ClaimantBrief;
}


export const claimantBriefInitialState: ClaimantBriefState = {
  claimantBrief: undefined,
};


const claimantBriefStateReducer = createReducer(
  claimantBriefInitialState,
  on(loadClaimantBriefSuccess, (claimantBriefState, {data}) => ({claimantBrief: data.claimantBrief})),
  on(loadExitApplication, (claimantBriefState, {data}) => ({claimantBrief: data})),
  on(loadLogout, (claimantBriefState, {data}) => ({claimantBrief: data})),
  );


export function claimantBriefReducer(claimantBriefState: ClaimantBriefState | undefined, action: Action) {
  return claimantBriefStateReducer(claimantBriefState, action);
}
/**
 * ClaimServiceProviderBrief Reducer
 */
export const claimServiceProviderBriefFeatureKey = 'claimServiceProviderBrief';


export interface ClaimServiceProviderBriefState {
  readonly claimServiceProviderBrief: ClaimServiceProviderBrief;
}


export const claimServiceProviderBriefInitialState: ClaimServiceProviderBriefState = {
  claimServiceProviderBrief: undefined,
};


const claimServiceProviderBriefStateReducer = createReducer(
  claimServiceProviderBriefInitialState,
  on(loadClaimServiceProviderBriefSuccess, (claimServiceProviderBriefState, {data}) => ({claimServiceProviderBrief: data.claimServiceProviderBrief})),
  on(loadExitApplication, (claimServiceProviderBriefState, {data}) => ({claimServiceProviderBrief: data})),
  on(loadLogout, (claimServiceProviderBriefState, {data}) => ({claimServiceProviderBrief: data})),
 );


export function claimServiceProviderBriefReducer(claimServiceProviderBriefState: ClaimServiceProviderBriefState | undefined, action: Action) {
  return claimServiceProviderBriefStateReducer(claimServiceProviderBriefState, action);
}

/**
 * ClaimComboData Reducer
 */
export const claimComboDataFeatureKey = 'claimComboData';


export interface ClaimComboDataState {
  readonly claimComboData: ClaimComboData;
}


export const claimComboDataInitialState: ClaimComboDataState = {
  claimComboData: undefined,
};


const claimComboDataStateReducer = createReducer(
  claimComboDataInitialState,
  on(loadClaimComboDataSuccess, (claimComboDataState, {data}) => ({claimComboData: data.claimComboData})),
  on(loadExitApplication, (claimComboDataState, {data}) => ({claimComboData: data})),
  on(loadLogout, (claimComboDataState, {data}) => ({claimComboData: data})),
);


export function claimComboDataReducer(claimComboDataState: ClaimComboDataState | undefined, action: Action) {
  return claimComboDataStateReducer(claimComboDataState, action);
}
