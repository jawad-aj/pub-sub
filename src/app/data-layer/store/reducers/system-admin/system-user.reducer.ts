import {Action, createReducer, on} from '@ngrx/store';
import {
  loadRetrieveSystemUsersSuccess,
  loadSystemUsersSuccess,
  loadSystemUserTypesSuccess
} from '../../actions/system-admin/system-user.actions';
import {loadExitApplication} from '../../actions/exit-application.actions';
import {loadLogout} from '../../actions/logout.actions';


/**
 * GetSystemUserTypes Reducer
 */
export const systemUserTypesFeatureKey = 'systemUserTypes';


export interface GetSystemUserTypesState {
  readonly systemUserTypes: any;
}


export const systemUserTypesInitialState: GetSystemUserTypesState = {
  systemUserTypes: undefined,
};


const systemUserTypesStateReducer = createReducer(
  systemUserTypesInitialState,
  on(loadSystemUserTypesSuccess, (systemUserTypesState, {data}) => ({systemUserTypes: data.systemUserTypes})),
  on(loadExitApplication, (systemUserTypesState, {data}) => ({systemUserTypes: data})),
  on(loadLogout, (systemUserTypesState, {data}) => ({systemUserTypes: data})),
);


export function systemUserTypesReducer(systemUserTypesState: GetSystemUserTypesState | undefined, action: Action) {
  return systemUserTypesStateReducer(systemUserTypesState, action);
}

/**
 * GetSystemUsers Reducer
 */
export const systemUsersFeatureKey = 'systemUsers';


export interface GetSystemUsersState {
  readonly systemUsers: any;
}


export const systemUsersInitialState: GetSystemUsersState = {
  systemUsers: undefined,
};


const systemUsersStateReducer = createReducer(
  systemUsersInitialState,
  on(loadSystemUsersSuccess, (systemUsersState, {data}) => ({systemUsers: data.systemUsers})),
  on(loadRetrieveSystemUsersSuccess, (systemUsersState, {data}) => ({systemUsers: data.systemUsers})),
  on(loadExitApplication, (systemUsersState, {data}) => ({systemUsers: data})),
  on(loadLogout, (systemUsersState, {data}) => ({systemUsers: data})),
);


export function systemUsersReducer(systemUsersState: GetSystemUsersState | undefined, action: Action) {
  return systemUsersStateReducer(systemUsersState, action);
}
