import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAccidentPhaseVehicleSection from '../reducers/accident-phase-vehicle-section.reducer';
import * as _ from 'lodash-es';
import {GlobalState} from '../reducers';

/**
 * AccidentPhaseVehicleSectionComboData Selector
 */

export const selectAccidentPhaseVehicleSectionComboData = createFeatureSelector<GlobalState, fromAccidentPhaseVehicleSection.AccidentAppVehicleSectionComboData>(fromAccidentPhaseVehicleSection.accidentApplicationVehicleSectionComboDataFeatureKey);
export const accidentPhaseVehicleSectionComboDataSelector = createSelector(selectAccidentPhaseVehicleSectionComboData, (accidentPhaseVehicleSectionComboDataState: fromAccidentPhaseVehicleSection.AccidentAppVehicleSectionComboData) => _.cloneDeep(accidentPhaseVehicleSectionComboDataState.accidentApplicationVehicleSectionComboData));
/**
 * AccidentPhaseVehicleSectionComboData Selector
 */

export const selectAccidentPhaseVehicleBrief = createFeatureSelector<GlobalState, fromAccidentPhaseVehicleSection.AccidentPhaseVehicleBrief>(fromAccidentPhaseVehicleSection.accidentPhaseVehicleBriefFeatureKey);
export const accidentPhaseVehicleBriefSelector = createSelector(selectAccidentPhaseVehicleBrief, (accidentPhaseVehicleBrief: fromAccidentPhaseVehicleSection.AccidentPhaseVehicleBrief) => _.cloneDeep(accidentPhaseVehicleBrief.accidentPhaseVehicleBrief));
/**
 * AccidentPhaseVehicleSectionComboData Selector
 */

export const selectAccidentPhaseVehicleComboData = createFeatureSelector<GlobalState, fromAccidentPhaseVehicleSection.AccidentPhaseVehicleComboData>(fromAccidentPhaseVehicleSection.accidentPhaseVehicleComboDataFeatureKey);
export const accidentPhaseVehicleComboDataSelector = createSelector(selectAccidentPhaseVehicleComboData, (accidentPhaseVehicleComboData: fromAccidentPhaseVehicleSection.AccidentPhaseVehicleComboData) => _.cloneDeep(accidentPhaseVehicleComboData.accidentPhaseVehicleComboData));

/**
 * AccidentPhaseVehicleSectionSelectedRecord Selector
 */

export const selectAccidentPhaseVehicleSelectedRecord = createFeatureSelector<GlobalState, fromAccidentPhaseVehicleSection.AccidentPhaseVehicleSelectedRecord>(fromAccidentPhaseVehicleSection.accidentPhaseVehicleSelectedRecordFeatureKey);
export const accidentPhaseVehicleSelectedRecordSelector = createSelector(selectAccidentPhaseVehicleSelectedRecord, (accidentPhaseVehicleSelectedRecord: fromAccidentPhaseVehicleSection.AccidentPhaseVehicleSelectedRecord) => _.cloneDeep(accidentPhaseVehicleSelectedRecord.accidentPhaseVehicleSelectedRecord));
