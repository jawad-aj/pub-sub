import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentPhaseClaimantBriefSuccess,
  loadAccidentPhaseClaimBriefSuccess,
  loadAccidentPhaseClaimComboDataSuccess, loadAccidentPhaseClaimSectionBriefSuccess,
  loadAccidentPhaseClaimSectionComboDataSuccess,
  loadAccidentPhaseClaimSelectedRecordSuccess,
  loadAccidentPhaseClaimServiceProviderBriefSuccess
} from '../actions/accident-phase-claim-section.actions';
import {ClaimSectionComboData} from '../../../business-layer/models/comboData/ClaimSectionComboData';
import {ClaimSmartBrief} from '../../../business-layer/models/brief/ClaimSmart.brief';
import {ClaimSmartComboData} from '../../../business-layer/models/ClaimSmartComboData';
import {loadNonStructuralAccidentApplicationChangeSuccess} from '../actions/application.actions';
import {ClaimSectionBrief} from '../../../business-layer/models/brief/ClaimSectionBrief';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * ClaimSectionComboData Reducer
 */
export const accidentApplicationClaimSectionComboDataFeatureKey = 'accidentApplicationClaimSectionComboData';


export interface AccidentAppClaimSectionComboData {
  readonly accidentApplicationClaimSectionComboData: ClaimSectionComboData;
}


export const accidentApplicationClaimSectionComboDataInitialState: AccidentAppClaimSectionComboData = {
  accidentApplicationClaimSectionComboData: undefined,
};


const accidentApplicationClaimSectionComboDataStateReducer = createReducer(
  accidentApplicationClaimSectionComboDataInitialState,
  on(loadAccidentPhaseClaimSectionComboDataSuccess, (accidentApplicationClaimSectionComboDataState, {data}) => ({accidentApplicationClaimSectionComboData: data.claimSectionComboData})),
  on(loadExitApplication, (accidentApplicationClaimSectionComboDataState, {data}) => ({accidentApplicationClaimSectionComboData: data})),
  on(loadLogout, (accidentApplicationClaimSectionComboDataState, {data}) => ({accidentApplicationClaimSectionComboData: data})),
);


export function accidentApplicationClaimSectionComboDataReducer(accidentApplicationClaimSectionComboDataState: AccidentAppClaimSectionComboData | undefined, action: Action) {
  return accidentApplicationClaimSectionComboDataStateReducer(accidentApplicationClaimSectionComboDataState, action);
}

/**
 * ClaimSectionComboData Reducer
 */
export const accidentPhaseClaimComboDataFeatureKey = 'accidentPhaseClaimComboData';


export interface AccidentPhaseClaimComboData {
  readonly accidentPhaseClaimComboData: ClaimSmartComboData;
}


export const accidentPhaseClaimComboDataInitialState: AccidentPhaseClaimComboData = {
  accidentPhaseClaimComboData: undefined,
};


const accidentPhaseClaimComboDataStateReducer = createReducer(
  accidentPhaseClaimComboDataInitialState,
  on(loadAccidentPhaseClaimComboDataSuccess, (accidentPhaseClaimComboDataState, {data}) => ({accidentPhaseClaimComboData: data.claimComboData})),
  on(loadExitApplication, (accidentPhaseClaimComboDataState, {data}) => ({accidentPhaseClaimComboData: data})),
  on(loadLogout, (accidentPhaseClaimComboDataState, {data}) => ({accidentPhaseClaimComboData: data})),
);


export function accidentPhaseClaimComboDataReducer(accidentPhaseClaimComboDataState: AccidentPhaseClaimComboData | undefined, action: Action) {
  return accidentPhaseClaimComboDataStateReducer(accidentPhaseClaimComboDataState, action);
}

/**
 * ClaimSectionBrief Reducer
 */
export const accidentPhaseClaimBriefFeatureKey = 'accidentPhaseClaimBrief';


export interface AccidentPhaseClaimBrief {
  readonly accidentPhaseClaimBrief: ClaimSmartBrief;
}


export const accidentPhaseClaimBriefInitialState: AccidentPhaseClaimBrief = {
  accidentPhaseClaimBrief: undefined,
};


const accidentPhaseClaimBriefStateReducer = createReducer(
  accidentPhaseClaimBriefInitialState,
  on(loadAccidentPhaseClaimBriefSuccess, (accidentPhaseClaimBriefState, {data}) => ({accidentPhaseClaimBrief: data.claimBrief})),
  on(loadExitApplication, (accidentPhaseClaimBriefState, {data}) => ({accidentPhaseClaimBrief: data})),
  on(loadLogout, (accidentPhaseClaimBriefState, {data}) => ({accidentPhaseClaimBrief: data})),
);


export function accidentPhaseClaimBriefReducer(accidentPhaseClaimBriefState: AccidentPhaseClaimBrief | undefined, action: Action) {
  return accidentPhaseClaimBriefStateReducer(accidentPhaseClaimBriefState, action);
}
/**
 * ClaimSectionBrief Reducer
 */
export const accidentPhaseClaimSectionBriefFeatureKey = 'accidentPhaseClaimSectionBrief';


export interface AccidentPhaseClaimSectionBrief {
  readonly accidentPhaseClaimSectionBrief: ClaimSectionBrief;
}


export const accidentPhaseClaimSectionBriefInitialState: AccidentPhaseClaimSectionBrief = {
  accidentPhaseClaimSectionBrief: undefined,
};


const accidentPhaseClaimSectionBriefStateReducer = createReducer(
  accidentPhaseClaimSectionBriefInitialState,
  on(loadAccidentPhaseClaimSectionBriefSuccess, (accidentPhaseClaimSectionBriefState, {data}) => ({accidentPhaseClaimSectionBrief: data.claimSectionBrief})),
  on(loadExitApplication, (accidentPhaseClaimSectionBriefState, {data}) => ({accidentPhaseClaimSectionBrief: data})),
  on(loadLogout, (accidentPhaseClaimSectionBriefState, {data}) => ({accidentPhaseClaimSectionBrief: data})),
);


export function accidentPhaseClaimSectionBriefReducer(accidentPhaseClaimSectionBriefState: AccidentPhaseClaimSectionBrief | undefined, action: Action) {
  return accidentPhaseClaimSectionBriefStateReducer(accidentPhaseClaimSectionBriefState, action);
}
/**
 * ClaimServiceProviderBrief Reducer
 */
export const accidentPhaseClaimServiceProviderBriefFeatureKey = 'accidentPhaseClaimServiceProviderBrief';


export interface AccidentPhaseClaimServiceProviderBrief {
  readonly accidentPhaseClaimServiceProviderBrief: ClaimSmartBrief;
}


export const accidentPhaseClaimServiceProviderBriefInitialState: AccidentPhaseClaimServiceProviderBrief = {
  accidentPhaseClaimServiceProviderBrief: undefined,
};


const accidentPhaseClaimServiceProviderBriefStateReducer = createReducer(
  accidentPhaseClaimServiceProviderBriefInitialState,
  on(loadAccidentPhaseClaimServiceProviderBriefSuccess, (accidentPhaseClaimServiceProviderBriefState, {data}) => ({accidentPhaseClaimServiceProviderBrief: data.claimServiceProviderBrief})),
  on(loadExitApplication, (accidentPhaseClaimServiceProviderBriefState, {data}) => ({accidentPhaseClaimServiceProviderBrief: data})),
  on(loadLogout, (accidentPhaseClaimServiceProviderBriefState, {data}) => ({accidentPhaseClaimServiceProviderBrief: data})),
);


export function accidentPhaseClaimServiceProviderBriefReducer(accidentPhaseClaimServiceProviderBriefState: AccidentPhaseClaimServiceProviderBrief | undefined, action: Action) {
  return accidentPhaseClaimServiceProviderBriefStateReducer(accidentPhaseClaimServiceProviderBriefState, action);
}

/**
 * ClaimantBrief Reducer
 */
export const accidentPhaseClaimantBriefFeatureKey = 'accidentPhaseClaimantBrief';


export interface AccidentPhaseClaimantBrief {
  readonly accidentPhaseClaimantBrief: ClaimSmartBrief;
}


export const accidentPhaseClaimantBriefInitialState: AccidentPhaseClaimantBrief = {
  accidentPhaseClaimantBrief: undefined,
};


const accidentPhaseClaimantBriefStateReducer = createReducer(
  accidentPhaseClaimantBriefInitialState,
  on(loadAccidentPhaseClaimantBriefSuccess, (accidentPhaseClaimantBriefState, {data}) => ({accidentPhaseClaimantBrief: data.claimantBrief})),
  on(loadExitApplication, (accidentPhaseClaimantBriefState, {data}) => ({accidentPhaseClaimantBrief: data})),
  on(loadLogout, (accidentPhaseClaimantBriefState, {data}) => ({accidentPhaseClaimantBrief: data})),
);


export function accidentPhaseClaimantBriefReducer(accidentPhaseClaimantBriefState: AccidentPhaseClaimantBrief | undefined, action: Action) {
  return accidentPhaseClaimantBriefStateReducer(accidentPhaseClaimantBriefState, action);
}


/**
 * ClaimSectionSelectedRecord Reducer
 */
export const accidentPhaseClaimSelectedRecordFeatureKey = 'accidentPhaseClaimSelectedRecord';


export interface AccidentPhaseClaimSelectedRecord {
  readonly accidentPhaseClaimSelectedRecord: any;
}


export const accidentPhaseClaimSelectedRecordInitialState: AccidentPhaseClaimSelectedRecord = {
  accidentPhaseClaimSelectedRecord: undefined,
};


const accidentPhaseClaimSelectedRecordStateReducer = createReducer(
  accidentPhaseClaimSelectedRecordInitialState,
  on(loadAccidentPhaseClaimSelectedRecordSuccess, (accidentPhaseClaimSelectedRecordState, {data}) => ({accidentPhaseClaimSelectedRecord: data.claimSelectedRecord})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (accidentPhaseClaimSelectedRecordState, {data}) => ({accidentPhaseClaimSelectedRecord: undefined})),
  on(loadExitApplication, (accidentPhaseClaimSelectedRecordState, {data}) => ({accidentPhaseClaimSelectedRecord: data})),
  on(loadLogout, (accidentPhaseClaimSelectedRecordState, {data}) => ({accidentPhaseClaimSelectedRecord: data})),
);


export function accidentPhaseClaimSelectedRecordReducer(accidentPhaseClaimSelectedRecordState: AccidentPhaseClaimSelectedRecord | undefined, action: Action) {
  return accidentPhaseClaimSelectedRecordStateReducer(accidentPhaseClaimSelectedRecordState, action);
}
