import { Action, createReducer, on } from '@ngrx/store';
import {FraudCheckBrief} from '../../../business-layer/models/brief/FraudCheck.brief';
import {
  loadReviewApprovedBriefSuccess,
  loadReviewApprovedComboDataSuccess,
  loadFraudCheckBriefSuccess,
  loadFraudCheckComboDataSuccess,
  loadFraudCheckApprovedBriefSuccess,
  loadInvestigationApprovalComboDataSuccess,
  loadInvestigationApprovalBriefSuccess
} from '../actions/fraud-check-controller.actions';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {FraudCheckComboData} from '../../../business-layer/models/FraudCheckComboData';
import {ClaimAuthorizationComboData} from '../../../business-layer/models/ClaimAuthorizationComboData';
import {ClaimAuthorizationBrief} from '../../../business-layer/models/brief/ClaimAuthorizationBrief';

/**
 * FraudCheckBrief Reducer
 */
export const fraudCheckBriefFeatureKey = 'fraudCheckBrief';


export interface FraudCheckBriefState {
  readonly fraudCheckBrief: FraudCheckBrief;
}


export const fraudCheckBriefInitialState: FraudCheckBriefState = {
  fraudCheckBrief: undefined,
};


const fraudCheckBriefStateReducer = createReducer(
  fraudCheckBriefInitialState,
  on(loadFraudCheckBriefSuccess, (fraudCheckBriefState, {data}) => ({fraudCheckBrief: data.fraudCheckBrief})),
  on(loadLogout, (fraudCheckBriefState, {data}) => ({fraudCheckBrief: data})),
  on(loadExitApplication, (fraudCheckBriefState, {data}) => ({fraudCheckBrief: data})),
);


export function fraudCheckBriefReducer(fraudCheckBriefState: FraudCheckBriefState | undefined, action: Action) {
  return fraudCheckBriefStateReducer(fraudCheckBriefState, action);
}

/**
 * FraudCheckComboData Reducer
 */
export const fraudCheckComboDataFeatureKey = 'fraudCheckComboData';


export interface FraudCheckComboDataState {
  readonly fraudCheckComboData: FraudCheckComboData;
}


export const fraudCheckComboDataInitialState: FraudCheckComboDataState = {
  fraudCheckComboData: undefined,
};


const fraudCheckComboDataStateReducer = createReducer(
  fraudCheckComboDataInitialState,
  on(loadFraudCheckComboDataSuccess, (fraudCheckComboDataState, {data}) => ({fraudCheckComboData: data.fraudCheckComboData})),
  on(loadExitApplication, (fraudCheckComboDataState, {data}) => ({fraudCheckComboData: data})),
  on(loadLogout, (fraudCheckComboDataState, {data}) => ({fraudCheckComboData: data})),
 );


export function fraudCheckComboDataReducer(fraudCheckComboDataState: FraudCheckComboDataState | undefined, action: Action) {
  return fraudCheckComboDataStateReducer(fraudCheckComboDataState, action);
}

/**
 * ReviewApprovedBrief Reducer
 */
export const reviewApprovedBriefFeatureKey = 'reviewApprovedBrief';


export interface ReviewApprovedBriefState {
  readonly reviewApprovedBrief: ClaimAuthorizationBrief;
}


export const reviewApprovedBriefInitialState: ReviewApprovedBriefState = {
  reviewApprovedBrief: undefined,
};


const reviewApprovedBriefStateReducer = createReducer(
  reviewApprovedBriefInitialState,
  on(loadReviewApprovedBriefSuccess, (reviewApprovedBriefState, {data}) => ({reviewApprovedBrief: data.reviewApprovedBrief})),
  on(loadExitApplication, (reviewApprovedBriefState, {data}) => ({reviewApprovedBrief: data})),
  on(loadLogout, (reviewApprovedBriefState, {data}) => ({reviewApprovedBrief: data})),
);


export function reviewApprovedBriefReducer(reviewApprovedBriefState: ReviewApprovedBriefState | undefined, action: Action) {
  return reviewApprovedBriefStateReducer(reviewApprovedBriefState, action);
}

/**
 * ReviewApprovedComboData Reducer
 */
export const reviewApprovedComboDataFeatureKey = 'reviewApprovedComboData';


export interface ReviewApprovedComboDataState {
  readonly reviewApprovedComboData: ClaimAuthorizationComboData;
}


export const reviewApprovedComboDataInitialState: ReviewApprovedComboDataState = {
  reviewApprovedComboData: undefined,
};


const reviewApprovedComboDataStateReducer = createReducer(
  reviewApprovedComboDataInitialState,
  on(loadReviewApprovedComboDataSuccess, (reviewApprovedComboDataState, {data}) => ({reviewApprovedComboData: data.reviewApprovedComboData})),
  on(loadExitApplication, (reviewApprovedComboDataState, {data}) => ({reviewApprovedComboData: data})),
  on(loadLogout, (reviewApprovedComboDataState, {data}) => ({reviewApprovedComboData: data})),
);


export function reviewApprovedComboDataReducer(reviewApprovedComboDataState: ReviewApprovedComboDataState | undefined, action: Action) {
  return reviewApprovedComboDataStateReducer(reviewApprovedComboDataState, action);
}


/**
 * FraudCheckApprovedBrief Reducer
 */
export const fraudCheckApprovedBriefFeatureKey = 'fraudCheckApprovedBrief';


export interface FraudCheckApprovedBriefState {
  readonly fraudCheckApprovedBrief: ClaimAuthorizationBrief;
}


export const fraudCheckApprovedBriefInitialState: FraudCheckApprovedBriefState = {
  fraudCheckApprovedBrief: undefined,
};


const fraudCheckApprovedBriefStateReducer = createReducer(
  fraudCheckApprovedBriefInitialState,
  on(loadFraudCheckApprovedBriefSuccess, (fraudCheckApprovedBriefState, {data}) => ({fraudCheckApprovedBrief: data.fraudCheckApprovedBrief})),
  on(loadExitApplication, (fraudCheckApprovedBriefState, {data}) => ({fraudCheckApprovedBrief: data})),
  on(loadLogout, (fraudCheckApprovedBriefState, {data}) => ({fraudCheckApprovedBrief: data})),
);


export function fraudCheckApprovedBriefReducer(fraudCheckApprovedBriefState: FraudCheckApprovedBriefState | undefined, action: Action) {
  return fraudCheckApprovedBriefStateReducer(fraudCheckApprovedBriefState, action);
}

/**
 * InvestigationApprovalComboData Reducer
 */
export const investigationApprovalComboDataFeatureKey = 'investigationApprovalComboData';


export interface InvestigationApprovalComboDataState {
  readonly investigationApprovalComboData: ClaimAuthorizationComboData;
}


export const investigationApprovalComboDataInitialState: InvestigationApprovalComboDataState = {
  investigationApprovalComboData: undefined,
};


const investigationApprovalComboDataStateReducer = createReducer(
  investigationApprovalComboDataInitialState,
  on(loadInvestigationApprovalComboDataSuccess, (investigationApprovalComboDataState, {data}) => ({investigationApprovalComboData: data.investigationApprovalComboData})),
  on(loadExitApplication, (investigationApprovalComboDataState, {data}) => ({investigationApprovalComboData: data})),
  on(loadLogout, (investigationApprovalComboDataState, {data}) => ({investigationApprovalComboData: data})),
);


export function investigationApprovalComboDataReducer(investigationApprovalComboDataState: InvestigationApprovalComboDataState | undefined, action: Action) {
  return investigationApprovalComboDataStateReducer(investigationApprovalComboDataState, action);
}

/**
 * InvestigationApprovalBrief Reducer
 */
export const investigationApprovalBriefFeatureKey = 'investigationApprovalBrief';


export interface InvestigationApprovalBriefState {
  readonly investigationApprovalBrief: ClaimAuthorizationBrief;
}


export const investigationApprovalBriefInitialState: InvestigationApprovalBriefState = {
  investigationApprovalBrief: undefined,
};


const investigationApprovalBriefStateReducer = createReducer(
  investigationApprovalBriefInitialState,
  on(loadInvestigationApprovalBriefSuccess, (investigationApprovalBriefState, {data}) => ({investigationApprovalBrief: data.investigationApprovalBrief})),
  on(loadExitApplication, (investigationApprovalBriefState, {data}) => ({investigationApprovalBrief: data})),
  on(loadLogout, (investigationApprovalBriefState, {data}) => ({investigationApprovalBrief: data})),
);


export function investigationApprovalBriefReducer(investigationApprovalBriefState: InvestigationApprovalBriefState | undefined, action: Action) {
  return investigationApprovalBriefStateReducer(investigationApprovalBriefState, action);
}
