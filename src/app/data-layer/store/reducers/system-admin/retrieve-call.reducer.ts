import {Action, createReducer, on} from '@ngrx/store';
import {loadExitApplication} from '../../actions/exit-application.actions';
import {loadLogout} from '../../actions/logout.actions';
import {loadRetrievePayload} from '../../actions/system-admin/retrieve-call.actions';


/**
 * RetrievePayload Reducer
 */
export const retrievePayloadFeatureKey = 'retrievePayload';


export interface RetrievePayloadState {
  readonly retrievePayload: any;
}


export const retrievePayloadInitialState: RetrievePayloadState = {
  retrievePayload: undefined,
};


const retrievePayloadStateReducer = createReducer(
  retrievePayloadInitialState,
  on(loadRetrievePayload, (retrievePayloadState, {data}) => ({retrievePayload: data})),
  on(loadExitApplication, (retrievePayloadState, {data}) => ({retrievePayload: data})),
  on(loadLogout, (retrievePayloadState, {data}) => ({retrievePayload: data})),
);


export function retrievePayloadReducer(retrievePayloadState: RetrievePayloadState | undefined, action: Action) {
  return retrievePayloadStateReducer(retrievePayloadState, action);
}
