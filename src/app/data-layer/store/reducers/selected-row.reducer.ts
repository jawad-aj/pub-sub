import {Action, createReducer, on} from '@ngrx/store';
import {loadSelectedRowSuccess} from '../actions/selected-row.actions';
import {loadLogout} from '../actions/logout.actions';
import {ClaimWQSummary} from '../../../business-layer/models/ClaimWQSummary';
import {loadExitApplication} from '../actions/exit-application.actions';


/**
 * SelectedRow Reducer
 */
export const selectedRowFeatureKey = 'selectedRow';


export interface SelectedRowState {
  readonly selectedRow: any;
}


export const selectedRowInitialState: SelectedRowState = {
  selectedRow: undefined,
};


const selectedRowStateReducer = createReducer(
  selectedRowInitialState,
  on(loadSelectedRowSuccess, (selectedRowState, {data}) => ({selectedRow: data.selectedRow})),
  on(loadExitApplication, (selectedRowState, {data}) => ({selectedRow: data})),
  on(loadLogout, (selectedRowState, {data}) => ({selectedRow: data})),
 );


export function selectedRowReducer(selectedRowState: SelectedRowState | undefined, action: Action) {
  return selectedRowStateReducer(selectedRowState, action);
}
