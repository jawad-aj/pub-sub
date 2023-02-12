import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromServiceProvider from "../../reducers/system-admin/service-providers.reducer";
import * as _ from 'lodash-es';
import {
  GetServiceProvidersState,
  GetServiceProviderTypesState
} from "../../reducers/system-admin/service-providers.reducer";

/**
 * ServiceProviderTypes Selector
 */

export const selectServiceProviderTypes = createFeatureSelector<GetServiceProviderTypesState>(fromServiceProvider.serviceProviderTypesFeatureKey);
export const serviceProviderTypesSelector = createSelector(selectServiceProviderTypes, (serviceProviderTypesState: fromServiceProvider.GetServiceProviderTypesState) => _.cloneDeep(serviceProviderTypesState.serviceProviderTypes));
/**
 * ServiceProviders Selector
 */

export const selectServiceProviders = createFeatureSelector<GetServiceProvidersState>(fromServiceProvider.serviceProvidersFeatureKey);
export const serviceProvidersSelector = createSelector(selectServiceProviders, (serviceProvidersState: fromServiceProvider.GetServiceProvidersState) => _.cloneDeep(serviceProvidersState.serviceProviders));
