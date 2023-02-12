import * as fromSelectedRow from '../reducers/selected-row.reducer';
import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';

/**
 * SelectedRow Selector
 */

export const selectSelectedRow = createFeatureSelector<GlobalState, fromSelectedRow.SelectedRowState>(fromSelectedRow.selectedRowFeatureKey);
export const selectedRowSelector = createSelector(selectSelectedRow, (selectedRowState: fromSelectedRow.SelectedRowState) => _.cloneDeep(selectedRowState.selectedRow));
