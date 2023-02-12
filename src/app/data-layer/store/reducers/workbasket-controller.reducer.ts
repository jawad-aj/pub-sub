import {loadLogout} from "../actions/logout.actions";
import {Action, createReducer, on} from "@ngrx/store";
import {WorkBasketBrief} from "../../../business-layer/models/brief/WorkBasket.brief";
import {
  loadAssignBriefSuccess,
  loadAssignComboDataSuccess, loadWorkBasketBriefSuccess,
  loadWorkBasketComboDataSuccess
} from "../actions/workBasketController.actions";
import {AssignComboData} from "../../../business-layer/models/assignComboData";
import {WorkBasketComboData} from "../../../business-layer/models/WorkBasketComboData";

/**
 * WorkBasketBrief Reducer
 */
export const workBasketBriefFeatureKey = 'workBasketBrief';


export interface WorkBasketBriefState {
  readonly workBasketBrief: WorkBasketBrief;
}


export const workBasketBriefInitialState: WorkBasketBriefState = {
  workBasketBrief: undefined,
};


const workBasketBriefStateReducer = createReducer(
  workBasketBriefInitialState,
  on(loadWorkBasketBriefSuccess, (workBasketBriefState, {data}) => ({workBasketBrief: data.workBasketBrief})),
  on(loadLogout, (workBasketBriefState, {data}) => ({workBasketBrief: data})),
);


export function workBasketBriefReducer(workBasketBriefState: WorkBasketBriefState | undefined, action: Action) {
  return workBasketBriefStateReducer(workBasketBriefState, action);
}
/**
 * WorkBasketComboData Reducer
 */
export const workBasketComboDataFeatureKey = 'workBasketComboData';


export interface WorkBasketComboDataState {
  readonly workBasketComboData: WorkBasketComboData;
}


export const workBasketComboDataInitialState: WorkBasketComboDataState = {
  workBasketComboData: undefined,
};


const workBasketComboDataStateReducer = createReducer(
  workBasketComboDataInitialState,
  on(loadWorkBasketComboDataSuccess, (workBasketComboDataState, {data}) => ({workBasketComboData: data.workBasketComboData})),
  on(loadLogout, (workBasketComboDataState, {data}) => ({workBasketComboData: data})),
);


export function workBasketComboDataReducer(workBasketComboDataState: WorkBasketComboDataState | undefined, action: Action) {
  return workBasketComboDataStateReducer(workBasketComboDataState, action);
}

/**
 * AssignComboData Reducer
 */
export const assignComboDataFeatureKey = 'assignComboData';


export interface AssignComboDataState {
  readonly assignComboData: AssignComboData;
}


export const assignComboDataInitialState: AssignComboDataState = {
  assignComboData: undefined,
};


const assignComboDataStateReducer = createReducer(
  assignComboDataInitialState,
  on(loadAssignComboDataSuccess, (assignComboDataState, {data}) => ({assignComboData: data.assignComboData})),
  on(loadLogout, (assignComboDataState, {data}) => ({assignComboData: data})),
);


export function assignComboDataReducer(assignComboDataState: AssignComboDataState | undefined, action: Action) {
  return assignComboDataStateReducer(assignComboDataState, action);
}

/**
 * AssignBrief Reducer
 */
export const assignBriefFeatureKey = 'assignBrief';


export interface AssignBriefState {
  readonly assignBrief: any;
}


export const assignBriefInitialState: AssignBriefState = {
  assignBrief: undefined,
};


const assignBriefStateReducer = createReducer(
  assignBriefInitialState,
  on(loadAssignBriefSuccess, (assignBriefState, {data}) => ({assignBrief: data.assignBrief})),
  on(loadLogout, (assignBriefState, {data}) => ({assignBrief: data})),
);


export function assignBriefReducer(assignBriefState: AssignBriefState | undefined, action: Action) {
  return assignBriefStateReducer(assignBriefState, action);
}
