import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAccidentPhaseClaimSection from '../reducers/accident-phase-claim-section.reducer';
import * as _ from 'lodash-es';
import {GlobalState} from '../reducers';

/**
 * accidentPhaseClaimSectionComboDataSelector
 */

export const selectAccidentPhaseClaimSectionComboData = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentAppClaimSectionComboData>(fromAccidentPhaseClaimSection.accidentApplicationClaimSectionComboDataFeatureKey);
export const accidentPhaseClaimSectionComboDataSelector = createSelector(selectAccidentPhaseClaimSectionComboData, (accidentPhaseClaimSectionComboDataState: fromAccidentPhaseClaimSection.AccidentAppClaimSectionComboData) => _.cloneDeep(accidentPhaseClaimSectionComboDataState.accidentApplicationClaimSectionComboData));
/**
 * accidentPhaseClaimBriefSelector
 */

export const selectAccidentPhaseClaimBrief = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimBrief>(fromAccidentPhaseClaimSection.accidentPhaseClaimBriefFeatureKey);
export const accidentPhaseClaimBriefSelector = createSelector(selectAccidentPhaseClaimBrief, (accidentPhaseClaimBrief: fromAccidentPhaseClaimSection.AccidentPhaseClaimBrief) => _.cloneDeep(accidentPhaseClaimBrief.accidentPhaseClaimBrief));
/**
 * accidentPhaseClaimSectionBriefSelector
 */

export const selectAccidentPhaseClaimSectionBrief = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimSectionBrief>(fromAccidentPhaseClaimSection.accidentPhaseClaimSectionBriefFeatureKey);
export const accidentPhaseClaimSectionBriefSelector = createSelector(selectAccidentPhaseClaimSectionBrief, (accidentPhaseClaimSectionBrief: fromAccidentPhaseClaimSection.AccidentPhaseClaimSectionBrief) => _.cloneDeep(accidentPhaseClaimSectionBrief.accidentPhaseClaimSectionBrief));
/**
 * accidentPhaseClaimServiceProviderBriefSelector
 */

export const selectAccidentPhaseClaimServiceProviderBrief = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimServiceProviderBrief>(fromAccidentPhaseClaimSection.accidentPhaseClaimServiceProviderBriefFeatureKey);
export const accidentPhaseClaimServiceProviderBriefSelector = createSelector(selectAccidentPhaseClaimServiceProviderBrief, (accidentPhaseClaimServiceProviderBrief: fromAccidentPhaseClaimSection.AccidentPhaseClaimServiceProviderBrief) => _.cloneDeep(accidentPhaseClaimServiceProviderBrief.accidentPhaseClaimServiceProviderBrief));
/**
 * accidentPhaseClaimantBriefSelector
 */

export const selectAccidentPhaseClaimantBrief = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimantBrief>(fromAccidentPhaseClaimSection.accidentPhaseClaimantBriefFeatureKey);
export const accidentPhaseClaimantBriefSelector = createSelector(selectAccidentPhaseClaimantBrief, (accidentPhaseClaimantBrief: fromAccidentPhaseClaimSection.AccidentPhaseClaimantBrief) => _.cloneDeep(accidentPhaseClaimantBrief.accidentPhaseClaimantBrief));

/**
 * accidentPhaseClaimComboDataSelector
 */

export const selectAccidentPhaseClaimComboData = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimComboData>(fromAccidentPhaseClaimSection.accidentPhaseClaimComboDataFeatureKey);
export const accidentPhaseClaimComboDataSelector = createSelector(selectAccidentPhaseClaimComboData, (accidentPhaseClaimComboData: fromAccidentPhaseClaimSection.AccidentPhaseClaimComboData) => _.cloneDeep(accidentPhaseClaimComboData.accidentPhaseClaimComboData));

/**
 * accidentPhaseClaimSelectedRecordSelector
 */

export const selectAccidentPhaseClaimSelectedRecord = createFeatureSelector<GlobalState, fromAccidentPhaseClaimSection.AccidentPhaseClaimSelectedRecord>(fromAccidentPhaseClaimSection.accidentPhaseClaimSelectedRecordFeatureKey);
export const accidentPhaseClaimSelectedRecordSelector = createSelector(selectAccidentPhaseClaimSelectedRecord, (accidentPhaseClaimSelectedRecord: fromAccidentPhaseClaimSection.AccidentPhaseClaimSelectedRecord) => _.cloneDeep(accidentPhaseClaimSelectedRecord.accidentPhaseClaimSelectedRecord));
