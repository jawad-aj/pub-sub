import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromInitialAssessmentController from '../reducers/initial-assessment-controller.reducer';
import * as _ from 'lodash-es';

/**
 * InitialAssessmentBrief Selector
 */

export const selectInitialAssessmentBrief = createFeatureSelector<GlobalState, fromInitialAssessmentController.InitialAssessmentBriefState>(fromInitialAssessmentController.initialAssessmentBriefFeatureKey);
export const initialAssessmentBriefSelector = createSelector(selectInitialAssessmentBrief, (initialAssessmentBriefState: fromInitialAssessmentController.InitialAssessmentBriefState) => _.cloneDeep(initialAssessmentBriefState.initialAssessmentBrief));
/**
 * InitialAssessmentComboData Selector
 */

export const selectInitialAssessmentComboData = createFeatureSelector<GlobalState, fromInitialAssessmentController.InitialAssessmentComboDataState>(fromInitialAssessmentController.initialAssessmentComboDataFeatureKey);
export const initialAssessmentComboDataSelector = createSelector(selectInitialAssessmentComboData, (initialAssessmentComboDataState: fromInitialAssessmentController.InitialAssessmentComboDataState) => _.cloneDeep(initialAssessmentComboDataState.initialAssessmentComboData));
