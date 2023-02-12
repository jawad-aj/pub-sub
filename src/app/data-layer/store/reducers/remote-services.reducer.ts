import { Action, createReducer, on } from '@ngrx/store';
import {ServicesUtilParams} from "../../api-services/models/Services.util.params";
import {loadRemoteServicesSuccess} from "../actions/remote-services.actions";


export const remoteServiceFeatureKey = 'remoteService';

export interface RemoteServiceState {
  readonly  servicesUtilParams: ServicesUtilParams[]
}

export const initialState: RemoteServiceState = {
  servicesUtilParams: undefined
};


export const RemoteStateReducer = createReducer(
  initialState,
  on(loadRemoteServicesSuccess, (RemoteServiceState, {data}) => ({servicesUtilParams: data.remoteServices}))
);

export function remoteServiceReducer(remoteServiceState: RemoteServiceState | undefined, action: Action) {
  return RemoteStateReducer(remoteServiceState, action);
}

