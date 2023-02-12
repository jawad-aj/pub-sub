import {Action, createReducer, on} from '@ngrx/store';
import {
  loadGetAccidentsSuccess,
  loadGetUserLookupSuccess,
  loadRetrieveAccidentsSuccess
} from '../../actions/system-admin/bulk-assignment.actions';
import {loadExitApplication} from '../../actions/exit-application.actions';
import {loadLogout} from '../../actions/logout.actions';

/**
 * GetUserLookup Reducer
 */
export const userLookupFeatureKey = 'userLookup';


export interface GetUserLookupState {
  readonly userLookup: any;
}


export const userLookupInitialState: GetUserLookupState = {
  userLookup: undefined,
};


const userLookupStateReducer = createReducer(
  userLookupInitialState,
  on(loadGetUserLookupSuccess, (userLookupState, {data}) => ({userLookup: data.userLookups})),
  on(loadExitApplication, (userLookupState, {data}) => ({userLookup: data})),
  on(loadLogout, (userLookupState, {data}) => ({userLookup: data})),
);


export function userLookupReducer(userLookupState: GetUserLookupState | undefined, action: Action) {
  return userLookupStateReducer(userLookupState, action);
}

/**
 * GetBulkAssignmentAccidents Reducer
 */
export const bulkAssignmentAccidentsFeatureKey = 'bulkAssignmentAccidents';


export interface GetBulkAssignmentAccidentsState {
  readonly bulkAssignmentAccidents: any;
}


export const bulkAssignmentAccidentsInitialState: GetBulkAssignmentAccidentsState = {
  bulkAssignmentAccidents: undefined,
};


const bulkAssignmentAccidentsStateReducer = createReducer(
  bulkAssignmentAccidentsInitialState,
  on(loadGetAccidentsSuccess, (bulkAssignmentAccidentsState, {data}) => ({bulkAssignmentAccidents: data.bulkAssignmentAccidents})),
  on(loadRetrieveAccidentsSuccess, (bulkAssignmentAccidentsState, {data}) => ({bulkAssignmentAccidents: data.bulkAssignmentAccidents})),
  on(loadExitApplication, (bulkAssignmentAccidentsState, {data}) => ({bulkAssignmentAccidents: data})),
  on(loadLogout, (bulkAssignmentAccidentsState, {data}) => ({bulkAssignmentAccidents: data})),
);


export function bulkAssignmentAccidentsReducer(bulkAssignmentAccidentsState: GetBulkAssignmentAccidentsState | undefined, action: Action) {
  return bulkAssignmentAccidentsStateReducer(bulkAssignmentAccidentsState, action);
}
