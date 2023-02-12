import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAccidentPhaseAttachmentSection from '../reducers/accident-phase-attachment-section.reducer';
import * as _ from 'lodash-es';
import {GlobalState} from '../reducers';

/**
 * accidentPhaseAttachmentBriefSelector
 */

export const selectAccidentPhaseAttachmentBrief = createFeatureSelector<GlobalState, fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogBrief>(fromAccidentPhaseAttachmentSection.accidentPhaseAttachmentDialogBriefFeatureKey);
export const accidentPhaseAttachmentDialogBriefSelector = createSelector(selectAccidentPhaseAttachmentBrief, (accidentPhaseAttachmentBrief: fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogBrief) => _.cloneDeep(accidentPhaseAttachmentBrief.accidentPhaseAttachmentDialogBrief));
/**
 * AccidentPhaseAttachmentSectionComboData Selector
 */

export const selectAccidentPhaseAttachmentComboData = createFeatureSelector<GlobalState, fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogComboData>(fromAccidentPhaseAttachmentSection.accidentPhaseAttachmentDialogComboDataFeatureKey);
export const accidentPhaseAttachmentDialogComboDataSelector = createSelector(selectAccidentPhaseAttachmentComboData, (accidentPhaseAttachmentComboData: fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogComboData) => _.cloneDeep(accidentPhaseAttachmentComboData.accidentPhaseAttachmentDialogComboData));

/**
 * accidentPhaseAttachmentSelectedRecordSelector
 */

export const selectAccidentPhaseAttachmentSelectedRecord = createFeatureSelector<GlobalState, fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogSelectedRecord>(fromAccidentPhaseAttachmentSection.accidentPhaseAttachmentDialogSelectedRecordFeatureKey);
export const accidentPhaseAttachmentDialogSelectedRecordSelector = createSelector(selectAccidentPhaseAttachmentSelectedRecord, (accidentPhaseAttachmentSelectedRecord: fromAccidentPhaseAttachmentSection.AccidentPhaseAttachmentDialogSelectedRecord) => _.cloneDeep(accidentPhaseAttachmentSelectedRecord.accidentPhaseAttachmentDialogSelectedRecord));
