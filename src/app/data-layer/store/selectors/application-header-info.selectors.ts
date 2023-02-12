import * as fromApplicationHeaderInfo from "../reducers/application-header-info.reducer";
import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';

/**
 * ApplicationHeaderInfo Selector
 */

export const selectApplicationHeaderInfo = createFeatureSelector<GlobalState, fromApplicationHeaderInfo.ApplicationHeaderInfoState>(fromApplicationHeaderInfo.applicationHeaderInfoFeatureKey);
export const applicationHeaderInfoSelector = createSelector(selectApplicationHeaderInfo, (applicationHeaderInfoState: fromApplicationHeaderInfo.ApplicationHeaderInfoState) => _.cloneDeep(applicationHeaderInfoState.applicationHeaderInfo));
