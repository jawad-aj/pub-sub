import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "../reducers";
import * as fromAccidentController from "../reducers/accident-controller.reducer";
import * as _ from 'lodash-es';

/**
 * AccidentBrief Selector
 */

export const selectAccidentBrief = createFeatureSelector<GlobalState, fromAccidentController.AccidentBriefState>(fromAccidentController.accidentBriefFeatureKey);
export const accidentBriefSelector = createSelector(selectAccidentBrief, (accidentBriefState: fromAccidentController.AccidentBriefState) => _.cloneDeep(accidentBriefState.accidentBrief));
/**
 * AccidentComboData Selector
 */

export const selectAccidentComboData = createFeatureSelector<GlobalState, fromAccidentController.AccidentComboDataState>(fromAccidentController.accidentComboDataFeatureKey);
export const accidentComboDataSelector = createSelector(selectAccidentComboData, (accidentComboDataState: fromAccidentController.AccidentComboDataState) => _.cloneDeep(accidentComboDataState.accidentComboData));



/**
 * AccidentApplicationAccidentBrief Selector
 */

export const selectAccidentApplicationAccidentBrief = createFeatureSelector<GlobalState, fromAccidentController.AccidentApplicationAccidentBriefState>(fromAccidentController.accidentApplicationAccidentBriefFeatureKey);
export const accidentApplicationAccidentBriefSelector = createSelector(selectAccidentApplicationAccidentBrief, (accidentApplicationAccidentBriefState: fromAccidentController.AccidentApplicationAccidentBriefState) => _.cloneDeep(accidentApplicationAccidentBriefState.accidentApplicationAccidentBrief));
/**
 * AccidentApplicationAccidentComboData Selector
 */

export const selectAccidentApplicationAccidentComboData = createFeatureSelector<GlobalState, fromAccidentController.AccidentApplicationAccidentComboDataState>(fromAccidentController.accidentApplicationAccidentComboDataFeatureKey);
export const accidentApplicationAccidentComboDataSelector = createSelector(selectAccidentApplicationAccidentComboData, (accidentApplicationAccidentComboDataState: fromAccidentController.AccidentApplicationAccidentComboDataState) => _.cloneDeep(accidentApplicationAccidentComboDataState.accidentApplicationAccidentComboData));
