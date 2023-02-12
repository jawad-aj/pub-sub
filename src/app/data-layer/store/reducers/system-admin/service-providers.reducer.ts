import {Action, createReducer, on} from '@ngrx/store';
import {
  loadPersistServiceProvidersSuccess,
  loadServiceProvidersSuccess,
  loadServiceProviderTypesSuccess
} from '../../actions/system-admin/service-providers.actions';
import {loadExitApplication} from "../../actions/exit-application.actions";
import {loadLogout} from "../../actions/logout.actions";


/**
 * GetServiceProviderTypes Reducer
 */
export const serviceProviderTypesFeatureKey = 'serviceProviderTypes';


export interface GetServiceProviderTypesState {
  readonly serviceProviderTypes: any;
}


export const serviceProviderTypesInitialState: GetServiceProviderTypesState = {
  serviceProviderTypes: undefined,
};


const serviceProviderTypesStateReducer = createReducer(
  serviceProviderTypesInitialState,
  on(loadServiceProviderTypesSuccess, (serviceProviderTypesState, {data}) => ({serviceProviderTypes: data.serviceProviderTypes})),
  on(loadExitApplication, (serviceProviderTypesState, {data}) => ({serviceProviderTypes: data})),
  on(loadLogout, (serviceProviderTypesState, {data}) => ({serviceProviderTypes: data})),
);


export function serviceProviderTypesReducer(serviceProviderTypesState: GetServiceProviderTypesState | undefined, action: Action) {
  return serviceProviderTypesStateReducer(serviceProviderTypesState, action);
}

/**
 * GetServiceProviders Reducer
 */
export const serviceProvidersFeatureKey = 'serviceProviders';


export interface GetServiceProvidersState {
  readonly serviceProviders: any;
}


export const serviceProvidersInitialState: GetServiceProvidersState = {
  serviceProviders: undefined,
};


const serviceProvidersStateReducer = createReducer(
  serviceProvidersInitialState,
  on(loadServiceProvidersSuccess, (serviceProvidersState, {data}) => ({serviceProviders: data.serviceProviders})),
  on(loadPersistServiceProvidersSuccess, (serviceProvidersState, {data}) => ({serviceProviders: data.serviceProviders})),
  on(loadExitApplication, (serviceProvidersState, {data}) => ({serviceProviders: data})),
  on(loadLogout, (serviceProvidersState, {data}) => ({serviceProviders: data})),
);


export function serviceProvidersReducer(serviceProvidersState: GetServiceProvidersState | undefined, action: Action) {
  return serviceProvidersStateReducer(serviceProvidersState, action);
}
