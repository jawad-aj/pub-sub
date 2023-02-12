import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentApplicationAccidentBriefSuccess,
  loadAccidentApplicationAccidentComboDataSuccess,
  loadAccidentBriefSuccess,
  loadAccidentComboDataSuccess
} from '../actions/accident-controller.actions';
import {AccidentBrief} from '../../../business-layer/models/brief/Accident.brief';
import {AccidentComboData} from '../../../business-layer/models/AccidentComboData';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * AccidentBrief Reducer
 */
export const accidentBriefFeatureKey = 'accidentBrief';


export interface AccidentBriefState {
  readonly accidentBrief: AccidentBrief;
}


export const accidentBriefInitialState: AccidentBriefState = {
  accidentBrief: undefined,
};


const accidentBriefStateReducer = createReducer(
  accidentBriefInitialState,
  on(loadAccidentBriefSuccess, (accidentBriefState, {data}) => ({accidentBrief: data.accidentBrief})),
  on(loadExitApplication, (accidentBriefState, {data}) => ({accidentBrief: data})),
  on(loadLogout, (accidentBriefState, {data}) => ({accidentBrief: data})),
);


export function accidentBriefReducer(accidentBriefState: AccidentBriefState | undefined, action: Action) {
  return accidentBriefStateReducer(accidentBriefState, action);
}

/**
 * AccidentComboData Reducer
 */
export const accidentComboDataFeatureKey = 'accidentComboData';


export interface AccidentComboDataState {
  readonly accidentComboData: AccidentComboData;
}


export const accidentComboDataInitialState: AccidentComboDataState = {
  accidentComboData: undefined,
};


const accidentComboDataStateReducer = createReducer(
  accidentComboDataInitialState,
  on(loadAccidentComboDataSuccess, (accidentComboDataState, {data}) => ({accidentComboData: data.accidentComboData})),
  on(loadExitApplication, (accidentComboDataState, {data}) => ({accidentComboData: data})),
  on(loadLogout, (accidentComboDataState, {data}) => ({accidentComboData: data})),
 );


export function accidentComboDataReducer(accidentComboDataState: AccidentComboDataState | undefined, action: Action) {
  return accidentComboDataStateReducer(accidentComboDataState, action);
}


/**
 * AccidentBrief Reducer
 */
export const accidentApplicationAccidentBriefFeatureKey = 'accidentApplicationAccidentBrief';


export interface AccidentApplicationAccidentBriefState {
  readonly accidentApplicationAccidentBrief: AccidentBrief;
}


export const accidentApplicationAccidentBriefInitialState: AccidentApplicationAccidentBriefState = {
  accidentApplicationAccidentBrief: undefined,
};


const accidentApplicationAccidentBriefStateReducer = createReducer(
  accidentApplicationAccidentBriefInitialState,
  on(loadAccidentApplicationAccidentBriefSuccess, (accidentApplicationAccidentBriefState, {data}) => ({accidentApplicationAccidentBrief: data.accidentBrief})),
  on(loadExitApplication, (accidentApplicationAccidentBriefState, {data}) => ({accidentApplicationAccidentBrief: data})),
  on(loadLogout, (accidentApplicationAccidentBriefState, {data}) => ({accidentApplicationAccidentBrief: data})),
);


export function accidentApplicationAccidentBriefReducer(accidentApplicationAccidentBriefState: AccidentApplicationAccidentBriefState | undefined, action: Action) {
  return accidentApplicationAccidentBriefStateReducer(accidentApplicationAccidentBriefState, action);
}

/**
 * AccidentComboData Reducer
 */
export const accidentApplicationAccidentComboDataFeatureKey = 'accidentApplicationAccidentComboData';


export interface AccidentApplicationAccidentComboDataState {
  readonly accidentApplicationAccidentComboData: AccidentComboData;
}


export const accidentApplicationAccidentComboDataInitialState: AccidentApplicationAccidentComboDataState = {
  accidentApplicationAccidentComboData: undefined,
};


const accidentApplicationAccidentComboDataStateReducer = createReducer(
  accidentApplicationAccidentComboDataInitialState,
  on(loadAccidentApplicationAccidentComboDataSuccess, (accidentApplicationAccidentComboDataState, {data}) => ({accidentApplicationAccidentComboData: data.accidentComboData})),
  on(loadExitApplication, (accidentApplicationAccidentComboDataState, {data}) => ({accidentApplicationAccidentComboData: data})),
  on(loadLogout, (accidentApplicationAccidentComboDataState, {data}) => ({accidentApplicationAccidentComboData: data})),
);


export function accidentApplicationAccidentComboDataReducer(accidentApplicationAccidentComboDataState: AccidentApplicationAccidentComboDataState | undefined, action: Action) {
  return accidentApplicationAccidentComboDataStateReducer(accidentApplicationAccidentComboDataState, action);
}
