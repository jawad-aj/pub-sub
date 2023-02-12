import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAccidentPhaseDiarySection from '../reducers/accident-phase-diary-section.reducer';
import * as _ from 'lodash-es';
import {GlobalState} from '../reducers';

/**
 * AccidentPhaseDiarySectionComboData Selector
 */

export const selectAccidentPhaseDiaryBrief = createFeatureSelector<GlobalState, fromAccidentPhaseDiarySection.AccidentPhaseDiaryBrief>(fromAccidentPhaseDiarySection.accidentPhaseDiaryBriefFeatureKey);
export const accidentPhaseDiaryBriefSelector = createSelector(selectAccidentPhaseDiaryBrief, (accidentPhaseDiaryBrief: fromAccidentPhaseDiarySection.AccidentPhaseDiaryBrief) => _.cloneDeep(accidentPhaseDiaryBrief.accidentPhaseDiaryBrief));

/**
 * accidentPhaseDiarySelectedRecordSelector
 */

export const selectAccidentPhaseDiarySelectedRecord = createFeatureSelector<GlobalState, fromAccidentPhaseDiarySection.AccidentPhaseDiarySelectedRecord>(fromAccidentPhaseDiarySection.accidentPhaseDiarySelectedRecordFeatureKey);
export const accidentPhaseDiarySelectedRecordSelector = createSelector(selectAccidentPhaseDiarySelectedRecord, (accidentPhaseDiarySelectedRecord: fromAccidentPhaseDiarySection.AccidentPhaseDiarySelectedRecord) => _.cloneDeep(accidentPhaseDiarySelectedRecord.accidentPhaseDiarySelectedRecord));
