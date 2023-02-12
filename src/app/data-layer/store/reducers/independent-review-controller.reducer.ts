import {Action, createReducer, on} from '@ngrx/store';
import {IndependentReviewBrief} from '../../../business-layer/models/brief/IndependentReview.brief';
import {
  loadIndependentReviewApprovedBriefSuccess,
  loadIndependentReviewBriefSuccess,
  loadIndependentReviewClaimAuthorizationBriefSuccess, loadIndependentReviewClaimAuthorizationComboDataSuccess,
  loadIndependentReviewComboDataSuccess
} from '../actions/independent-review-controller.actions';
import {loadLogout, loadLogoutSuccess} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {IndependentReviewComboData} from '../../../business-layer/models/IndependentReviewComboData';
import {ClaimAuthorizationBrief} from '../../../business-layer/models/brief/ClaimAuthorizationBrief';
import {ClaimAuthorizationComboData} from '../../../business-layer/models/ClaimAuthorizationComboData';

/**
 * IndependentReviewBrief Reducer
 */
export const independentReviewBriefFeatureKey = 'independentReviewBrief';


export interface IndependentReviewBriefState {
  readonly independentReviewBrief: IndependentReviewBrief;
}


export const independentReviewBriefInitialState: IndependentReviewBriefState = {
  independentReviewBrief: undefined,
};


const independentReviewBriefStateReducer = createReducer(
  independentReviewBriefInitialState,
  on(loadIndependentReviewBriefSuccess, (independentReviewBriefState, {data}) => ({independentReviewBrief: data.independentReviewBrief})),
  on(loadExitApplication, (independentReviewBriefState, {data}) => ({independentReviewBrief: data})),
  on(loadLogout, (independentReviewBriefState, {data}) => ({independentReviewBrief: data})),
);


export function independentReviewBriefReducer(independentReviewBriefState: IndependentReviewBriefState | undefined, action: Action) {
  return independentReviewBriefStateReducer(independentReviewBriefState, action);
}

/**
 * IndependentReviewComboData Reducer
 */
export const independentReviewComboDataFeatureKey = 'independentReviewComboData';


export interface IndependentReviewComboDataState {
  readonly independentReviewComboData: IndependentReviewComboData;
}


export const independentReviewComboDataInitialState: IndependentReviewComboDataState = {
  independentReviewComboData: undefined,
};


const independentReviewComboDataStateReducer = createReducer(
  independentReviewComboDataInitialState,
  on(loadIndependentReviewComboDataSuccess, (independentReviewComboDataState, {data}) => ({independentReviewComboData: data.independentReviewComboData})),
  on(loadExitApplication, (independentReviewComboDataState, {data}) => ({independentReviewComboData: data})),
  on(loadLogout, (independentReviewComboDataState, {data}) => ({independentReviewComboData: data})),
);


export function independentReviewComboDataReducer(independentReviewComboDataState: IndependentReviewComboDataState | undefined, action: Action) {
  return independentReviewComboDataStateReducer(independentReviewComboDataState, action);
}

/**
 * IndependentReviewClaimAuthorizationBrief Reducer
 */
export const independentReviewClaimAuthorizationBriefFeatureKey = 'independentReviewClaimAuthorizationBrief';


export interface IndependentReviewClaimAuthorizationBriefState {
  readonly independentReviewClaimAuthorizationBrief: ClaimAuthorizationBrief;
}


export const independentReviewClaimAuthorizationBriefInitialState: IndependentReviewClaimAuthorizationBriefState = {
  independentReviewClaimAuthorizationBrief: undefined,
};


const independentReviewClaimAuthorizationBriefStateReducer = createReducer(
  independentReviewClaimAuthorizationBriefInitialState,
  on(loadIndependentReviewClaimAuthorizationBriefSuccess, (independentReviewClaimAuthorizationBriefState, {data}) => ({independentReviewClaimAuthorizationBrief: data.independentReviewClaimAuthorizationBrief})),
  on(loadExitApplication, (independentReviewClaimAuthorizationBriefState, {data}) => ({independentReviewClaimAuthorizationBrief: data})),
  on(loadLogout, (independentReviewClaimAuthorizationBriefState, {data}) => ({independentReviewClaimAuthorizationBrief: data})),
);


export function independentReviewClaimAuthorizationBriefReducer(independentReviewClaimAuthorizationBriefState: IndependentReviewClaimAuthorizationBriefState | undefined, action: Action) {
  return independentReviewClaimAuthorizationBriefStateReducer(independentReviewClaimAuthorizationBriefState, action);
}

/**
 * IndependentReviewClaimAuthorizationComboData Reducer
 */
export const independentReviewClaimAuthorizationComboDataFeatureKey = 'independentReviewClaimAuthorizationComboData';


export interface IndependentReviewClaimAuthorizationComboDataState {
  readonly independentReviewClaimAuthorizationComboData: ClaimAuthorizationComboData;
}


export const independentReviewClaimAuthorizationComboDataInitialState: IndependentReviewClaimAuthorizationComboDataState = {
  independentReviewClaimAuthorizationComboData: undefined,
};


const independentReviewClaimAuthorizationComboDataStateReducer = createReducer(
  independentReviewClaimAuthorizationComboDataInitialState,
  on(loadIndependentReviewClaimAuthorizationComboDataSuccess, (independentReviewClaimAuthorizationComboDataState, {data}) => ({independentReviewClaimAuthorizationComboData: data.independentReviewClaimAuthorizationComboData})),
  on(loadExitApplication, (independentReviewClaimAuthorizationComboDataState, {data}) => ({independentReviewClaimAuthorizationComboData: data})),
  on(loadLogout, (independentReviewClaimAuthorizationComboDataState, {data}) => ({independentReviewClaimAuthorizationComboData: data})),
);


export function independentReviewClaimAuthorizationComboDataReducer(independentReviewClaimAuthorizationComboDataState: IndependentReviewClaimAuthorizationComboDataState | undefined, action: Action) {
  return independentReviewClaimAuthorizationComboDataStateReducer(independentReviewClaimAuthorizationComboDataState, action);
}

/**
 * IndependentReviewApprovedBrief Reducer
 */
export const independentReviewApprovedBriefFeatureKey = 'independentReviewApprovedBrief';


export interface IndependentReviewApprovedBriefState {
  readonly independentReviewApprovedBrief: ClaimAuthorizationBrief;
}


export const independentReviewApprovedBriefInitialState: IndependentReviewApprovedBriefState = {
  independentReviewApprovedBrief: undefined,
};


const independentReviewApprovedBriefStateReducer = createReducer(
  independentReviewApprovedBriefInitialState,
  on(loadIndependentReviewApprovedBriefSuccess, (independentReviewApprovedBriefState, {data}) => ({independentReviewApprovedBrief: data.independentReviewApprovedBrief})),
  on(loadExitApplication, (independentReviewApprovedBriefState, {data}) => ({independentReviewApprovedBrief: data})),
  on(loadLogout, (independentReviewApprovedBriefState, {data}) => ({independentReviewApprovedBrief: data})),
);


export function independentReviewApprovedBriefReducer(independentReviewApprovedBriefState: IndependentReviewApprovedBriefState | undefined, action: Action) {
  return independentReviewApprovedBriefStateReducer(independentReviewApprovedBriefState, action);
}

