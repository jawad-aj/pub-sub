import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromAttachmentController from '../reducers/attachment-controller.reducer';
import * as _ from 'lodash-es';

/**
 * AttachmentBrief Selector
 */

export const selectAttachmentBrief = createFeatureSelector<GlobalState, fromAttachmentController.AttachmentBriefState>(fromAttachmentController.attachmentBriefFeatureKey);
export const attachmentBriefSelector = createSelector(selectAttachmentBrief, (attachmentBriefState: fromAttachmentController.AttachmentBriefState) => _.cloneDeep(attachmentBriefState.attachmentBrief));
/**
 * AttachmentComboData Selector
 */

export const selectAttachmentComboData = createFeatureSelector<GlobalState, fromAttachmentController.AttachmentComboDataState>(fromAttachmentController.attachmentComboDataFeatureKey);
export const attachmentComboDataSelector = createSelector(selectAttachmentComboData, (attachmentComboDataState: fromAttachmentController.AttachmentComboDataState) => _.cloneDeep(attachmentComboDataState.attachmentComboData));

/**
 * AccidentPhaseAttachmentBrief Selector
 */

export const selectAccidentPhaseAttachmentBrief = createFeatureSelector<GlobalState, fromAttachmentController.AccidentPhaseAttachmentGridBriefState>(fromAttachmentController.accidentPhaseAttachmentGridBriefFeatureKey);
export const accidentPhaseAttachmentGridBriefSelector = createSelector(selectAccidentPhaseAttachmentBrief, (accidentPhaseAttachmentBriefState: fromAttachmentController.AccidentPhaseAttachmentGridBriefState) => _.cloneDeep(accidentPhaseAttachmentBriefState.accidentPhaseAttachmentGridBrief));
/**
 * AccidentPhaseAttachmentComboData Selector
 */

export const selectAccidentPhaseAttachmentComboData = createFeatureSelector<GlobalState, fromAttachmentController.AccidentPhaseAttachmentGridComboDataState>(fromAttachmentController.accidentPhaseAttachmentGridComboDataFeatureKey);
export const accidentPhaseAttachmentGridComboDataSelector = createSelector(selectAccidentPhaseAttachmentComboData, (accidentPhaseAttachmentComboDataState: fromAttachmentController.AccidentPhaseAttachmentGridComboDataState) => _.cloneDeep(accidentPhaseAttachmentComboDataState.accidentPhaseAttachmentGridComboData));
