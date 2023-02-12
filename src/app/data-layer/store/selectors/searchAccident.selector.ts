import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as searchAccidentReducer from '../reducers/searchAccident.reducer';
import * as _ from 'lodash-es';

/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Search Accident Selector░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

export const selectAccidentListSummary = createFeatureSelector<GlobalState, searchAccidentReducer.accidentListSummaryState>(searchAccidentReducer.accidentListSummaryFeatureKey);
export const accidentListSummarySelector = createSelector(selectAccidentListSummary, (accidentListSummaryState: searchAccidentReducer.accidentListSummaryState) => _.cloneDeep(accidentListSummaryState.accidentListSummary));




/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ Accident Selector░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

export const selectAccident = createFeatureSelector<GlobalState, searchAccidentReducer.accidentState>(searchAccidentReducer.accidentFeatureKey);
export const accidentSelector = createSelector(selectAccident, (accidentState: searchAccidentReducer.accidentState) => _.cloneDeep(accidentState.accident));



