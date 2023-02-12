import { Action, createReducer, on } from '@ngrx/store';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadLogout} from '../actions/logout.actions';
import {loadSearchAccidentComboDataSuccess} from '../actions/search-accident-controller.actions';
import {SearchAccidentComboData} from '../../../business-layer/models/SearchAccidentComboData';

/**
 * SearchAccidentComboData Reducer
 */
export const searchAccidentComboDataFeatureKey = 'searchAccidentComboData';


export interface SearchAccidentComboDataState {
  readonly searchAccidentComboData: SearchAccidentComboData;
}


export const searchAccidentComboDataInitialState: SearchAccidentComboDataState = {
  searchAccidentComboData: undefined,
};


const searchAccidentComboDataStateReducer = createReducer(
  searchAccidentComboDataInitialState,
  on(loadSearchAccidentComboDataSuccess, (searchAccidentComboDataState, {data}) => ({searchAccidentComboData: data.searchAccidentComboData})),
  on(loadLogout, (searchAccidentComboDataState, {data}) => ({searchAccidentComboData: data})),
);


export function searchAccidentComboDataReducer(searchAccidentComboDataState: SearchAccidentComboDataState | undefined, action: Action) {
  return searchAccidentComboDataStateReducer(searchAccidentComboDataState, action);
}
