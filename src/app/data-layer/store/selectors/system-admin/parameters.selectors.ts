import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromParameters from "../../reducers/system-admin/parameters.reducer";
import {GetCompanyParametersState, GetParameterCategoriesState} from "../../reducers/system-admin/parameters.reducer";
import * as _ from 'lodash-es';

/**
 * ParameterCategories Selector
 */

export const selectParameterCategories = createFeatureSelector<GetParameterCategoriesState>(fromParameters.parameterCategoriesFeatureKey);
export const parameterCategoriesSelector = createSelector(selectParameterCategories, (parameterCategoriesState: fromParameters.GetParameterCategoriesState) => _.cloneDeep(parameterCategoriesState.parameterCategories));

/**
 * CompanyParameters Selector
 */

export const selectCompanyParameters = createFeatureSelector<GetCompanyParametersState>(fromParameters.companyParametersFeatureKey);
export const companyParametersSelector = createSelector(selectCompanyParameters, (companyParametersState: fromParameters.GetCompanyParametersState) => _.cloneDeep(companyParametersState.companyParameters));
