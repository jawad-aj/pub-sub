
import {loadLogout} from "../actions/logout.actions";
import {HeaderComboData} from "../../../business-layer/models/HeaderComboData";
import {loadHeaderComboDataSuccess, loadHeadersSuccess} from '../actions/header-controller.actions';
import {Action, createReducer, on} from "@ngrx/store";

/**
 * HeaderComboData Reducer
 */
export const headerComboDataFeatureKey = 'headerComboData';


export interface HeaderComboDataState {
  readonly headerComboData: HeaderComboData;
}


export const headerComboDataInitialState: HeaderComboDataState = {
  headerComboData: undefined,
};


const headerComboDataStateReducer = createReducer(
  headerComboDataInitialState,
  on(loadHeaderComboDataSuccess, (headerComboDataState, {data}) => ({headerComboData: data.headerComboData})),
  on(loadLogout, (headerComboDataState, {data}) => ({headerComboData: data})),
);


export function headerComboDataReducer(headerComboDataState: HeaderComboDataState | undefined, action: Action) {
  return headerComboDataStateReducer(headerComboDataState, action);
}


/**
 * Headers Reducer
 */
export const headersFeatureKey = 'headers';


export interface HeadersState {
  readonly headers: Headers;
}


export const headersInitialState: HeadersState = {
  headers: undefined,
};


const headersStateReducer = createReducer(
  headersInitialState,
  on(loadHeadersSuccess, (headersState, {data}) => ({headers: data.headers})),
  on(loadLogout, (headersState, {data}) => ({headers: data})),
);


export function headersReducer(headersState: HeadersState | undefined, action: Action) {
  return headersStateReducer(headersState, action);
}

