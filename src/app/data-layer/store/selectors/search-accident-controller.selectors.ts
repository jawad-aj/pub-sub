import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "../reducers";
import * as fromSearchAccidentController from "../reducers/search-accident-controller.reducer";
import * as _ from 'lodash-es';

/**
 * SearchAccidentComboData Selector
 */

export const selectSearchAccidentComboData = createFeatureSelector<GlobalState, fromSearchAccidentController.SearchAccidentComboDataState>(fromSearchAccidentController.searchAccidentComboDataFeatureKey);
export const searchAccidentComboDataSelector = createSelector(selectSearchAccidentComboData, (searchAccidentComboDataState: fromSearchAccidentController.SearchAccidentComboDataState) => _.cloneDeep(searchAccidentComboDataState.searchAccidentComboData));
