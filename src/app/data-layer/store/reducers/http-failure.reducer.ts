import {Action, createReducer, on} from '@ngrx/store';
import {loadServiceFailure} from "../actions/service-failure.actions";
import {loadLogout} from "../actions/logout.actions";
import {loadExitApplication} from "../actions/exit-application.actions";


export const httpFailureFeatureKey = 'httpFailure';


export interface HttpFailureState {
  httpFailure: any
}

export const httpFailureInitialState: HttpFailureState = {
  httpFailure: undefined
};


export const httpFailureStateReducer = createReducer(
  httpFailureInitialState,
  on(loadServiceFailure, (httpFailureState, {error}) => ({httpFailure: error})),
  on(loadExitApplication, (httpFailureState, {data}) => ({httpFailure: data})),
  on(loadLogout, (httpFailureState, {data}) => ({httpFailure: data}))
);

export function httpFailureReducer(httpFailureState: HttpFailureState | undefined, action: Action) {
  return httpFailureStateReducer(httpFailureState, action);
}
