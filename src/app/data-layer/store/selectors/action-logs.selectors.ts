import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromActionLogs from "../reducers/action-logs.reducer";
import * as _ from 'lodash-es';

/**
 * Created by Jawad on 06/08/2020.
 */

export const selectActionLogs = createFeatureSelector<GlobalState, fromActionLogs.ActionLogsState>(fromActionLogs.actionLogsFeatureKey);
export const actionLogsSelector = createSelector(selectActionLogs, (actionLogsState: fromActionLogs.ActionLogsState) => _.cloneDeep(actionLogsState.actionLogs));

