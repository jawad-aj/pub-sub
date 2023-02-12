import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadInitialAssessmentBriefSuccess, loadInitialAssessmentComboDataSuccess} from '../actions/initial-assessment-controller.actions';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * InitialAssessmentBrief Reducer
 */
export const initialAssessmentBriefFeatureKey = 'initialAssessmentBrief';


export interface InitialAssessmentBriefState {
  readonly initialAssessmentBrief: any;
}


export const initialAssessmentBriefInitialState: InitialAssessmentBriefState = {
  initialAssessmentBrief: undefined,
};


const initialAssessmentBriefStateReducer = createReducer(
  initialAssessmentBriefInitialState,
  on(loadInitialAssessmentBriefSuccess, (initialAssessmentBriefState, {data}) => ({initialAssessmentBrief: data.initialAssessmentBrief})),
  on(loadExitApplication, (initialAssessmentBriefState, {data}) => ({initialAssessmentBrief: data})),
  on(loadLogout, (initialAssessmentBriefState, {data}) => ({initialAssessmentBrief: data})),
);


export function initialAssessmentBriefReducer(initialAssessmentBriefState: InitialAssessmentBriefState | undefined, action: Action) {
  return initialAssessmentBriefStateReducer(initialAssessmentBriefState, action);
}

/**
 * InitialAssessmentComboData Reducer
 */
export const initialAssessmentComboDataFeatureKey = 'initialAssessmentComboData';


export interface InitialAssessmentComboDataState {
  readonly initialAssessmentComboData: any;
}


export const initialAssessmentComboDataInitialState: InitialAssessmentComboDataState = {
  initialAssessmentComboData: undefined,
};


const initialAssessmentComboDataStateReducer = createReducer(
  initialAssessmentComboDataInitialState,
  on(loadInitialAssessmentComboDataSuccess, (initialAssessmentComboDataState, {data}) => ({initialAssessmentComboData: data.initialAssessmentComboData})),
  on(loadExitApplication, (initialAssessmentComboDataState, {data}) => ({initialAssessmentComboData: data})),
  on(loadLogout, (initialAssessmentComboDataState, {data}) => ({initialAssessmentComboData: data})),
);


export function initialAssessmentComboDataReducer(initialAssessmentComboDataState: InitialAssessmentComboDataState | undefined, action: Action) {
  return initialAssessmentComboDataStateReducer(initialAssessmentComboDataState, action);
}
