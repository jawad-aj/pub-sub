import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromHeaderController from '../reducers/header-controller.reducer'
import {GlobalState} from "../reducers";

/**
 * HeaderComboData Selector
 */

export const selectHeaderComboData = createFeatureSelector<GlobalState, fromHeaderController.HeaderComboDataState>(fromHeaderController.headerComboDataFeatureKey);
export const headerComboDataSelector = createSelector(selectHeaderComboData, (headerComboDataState: fromHeaderController.HeaderComboDataState) => _.cloneDeep(headerComboDataState.headerComboData));

/**
 * Headers Selector
 */

export const selectHeaders = createFeatureSelector<GlobalState, fromHeaderController.HeadersState>(fromHeaderController.headersFeatureKey);
export const headersSelector = createSelector(selectHeaders, (headersState: fromHeaderController.HeadersState) => _.cloneDeep(headersState.headers));
