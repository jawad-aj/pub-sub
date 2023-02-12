import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadAssignClaim, loadBPCClaimWQSummary, loadClaimAccidentSummary, loadCLClaimWQSummary} from '../actions/workBasket.actions';
import {loadPersistAccident, loadSaveClaimApplication, loadUpdateAccident} from '../actions/application.actions';
import {loadForgotPasswords, loadLogins} from '../actions/login.actions';
import {loadShowClaim} from '../actions/claim.action';
import {loadDownloadSupportingDocuments, loadUploadNewDocument} from '../actions/attachment.actions';
import {loadAccident, loadSearchAccidents} from '../actions/searchAccident.actions';
import {loadChangePasswords} from '../actions/changePassword.actions';
import {loadShowVehicle} from '../actions/vehicle.actions';
import {loadExitApplication} from '../actions/exit-application.actions';


export const actionLogsFeatureKey = 'actionLogs';


export interface ActionLogsState {
  actionLogs: any
}

export const actionLogsInitialState: ActionLogsState = {
  actionLogs: undefined
};


export const actionLogsStateReducer = createReducer(
  actionLogsInitialState,
  on(loadLogins, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadForgotPasswords, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadCLClaimWQSummary, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadBPCClaimWQSummary, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadAssignClaim, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadClaimAccidentSummary, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadShowVehicle, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadSearchAccidents, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadAccident, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadSaveClaimApplication, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadPersistAccident, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadUpdateAccident, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadShowClaim, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadChangePasswords, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadUploadNewDocument, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadDownloadSupportingDocuments, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadExitApplication, (ActionLogsState, {data}) => ({actionLogs: data})),
  on(loadLogout, (ActionLogsState, {data}) => ({actionLogs: data})),
);

export function actionLogsReducer(actionLogsState: ActionLogsState | undefined, action: Action) {
  return actionLogsStateReducer(actionLogsState, action);
}
