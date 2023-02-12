import {Action, createReducer, on} from '@ngrx/store';
import {loadExitApplication} from '../../actions/exit-application.actions';
import {loadLogout} from '../../actions/logout.actions';
import {
  loadGetCompanyParametersSuccess,
  loadGetParameterCategoriesSuccess,
  loadRetrieveCompanyParametersSuccess
} from '../../actions/system-admin/parameters.actions';


/**
 * GetParameterCategories Reducer
 */
export const parameterCategoriesFeatureKey = 'parameterCategories';


export interface GetParameterCategoriesState {
  readonly parameterCategories: any;
}


export const parameterCategoriesInitialState: GetParameterCategoriesState = {
  parameterCategories: undefined,
};


const parameterCategoriesStateReducer = createReducer(
  parameterCategoriesInitialState,
  on(loadGetParameterCategoriesSuccess, (parameterCategoriesState, {data}) => ({parameterCategories: data.parameterCategories})),
  on(loadExitApplication, (parameterCategoriesState, {data}) => ({parameterCategories: data})),
  on(loadLogout, (parameterCategoriesState, {data}) => ({parameterCategories: data})),
);


export function parameterCategoriesReducer(parameterCategoriesState: GetParameterCategoriesState | undefined, action: Action) {
  return parameterCategoriesStateReducer(parameterCategoriesState, action);
}


/**
 * GetCompanyParameters Reducer
 */
export const companyParametersFeatureKey = 'companyParameters';


export interface GetCompanyParametersState {
  readonly companyParameters: any;
}


export const companyParametersInitialState: GetCompanyParametersState = {
  companyParameters: undefined,
};


const companyParametersStateReducer = createReducer(
  companyParametersInitialState,
  on(loadGetCompanyParametersSuccess, (companyParametersState, {data}) => ({companyParameters: data.companyParameters})),
  on(loadRetrieveCompanyParametersSuccess, (companyParametersState, {data}) => ({companyParameters: data.companyParameters})),
  on(loadExitApplication, (companyParametersState, {data}) => ({companyParameters: data})),
  on(loadLogout, (companyParametersState, {data}) => ({companyParameters: data})),
);


export function companyParametersReducer(companyParametersState: GetCompanyParametersState | undefined, action: Action) {
  return companyParametersStateReducer(companyParametersState, action);
}
