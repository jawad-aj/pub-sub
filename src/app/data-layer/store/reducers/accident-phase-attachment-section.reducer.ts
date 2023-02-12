import {Action, createReducer, on} from '@ngrx/store';
import {DiaryBrief} from '../../../business-layer/models/brief/Diary.brief';

import {loadLogout} from '../actions/logout.actions';
import {loadNonStructuralAccidentApplicationChangeSuccess} from '../actions/application.actions';
import {AttachmentComboData} from '../../../business-layer/models/AttachmentComboData';
import {
  loadAccidentPhaseAttachmentDialogBriefSuccess, loadAccidentPhaseAttachmentDialogComboDataSuccess,
  loadAccidentPhaseAttachmentDialogSelectedRecordSuccess
} from '../actions/accident-phase-attachment-section.actions';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * AttachmentBrief Reducer
 */
export const accidentPhaseAttachmentDialogBriefFeatureKey = 'accidentPhaseAttachmentDialogBrief';


export interface AccidentPhaseAttachmentDialogBrief {
  readonly accidentPhaseAttachmentDialogBrief: DiaryBrief;
}


export const accidentPhaseAttachmentDialogBriefInitialState: AccidentPhaseAttachmentDialogBrief = {
  accidentPhaseAttachmentDialogBrief: undefined,
};


const accidentPhaseAttachmentDialogBriefStateReducer = createReducer(
  accidentPhaseAttachmentDialogBriefInitialState,
  on(loadAccidentPhaseAttachmentDialogBriefSuccess, (accidentPhaseAttachmentDialogBriefState, {data}) => ({accidentPhaseAttachmentDialogBrief: data.attachmentBrief})),
  on(loadExitApplication, (accidentPhaseAttachmentDialogBriefState, {data}) => ({accidentPhaseAttachmentDialogBrief: data})),
  on(loadLogout, (accidentPhaseAttachmentDialogBriefState, {data}) => ({accidentPhaseAttachmentDialogBrief: data})),
);


export function accidentPhaseAttachmentDialogBriefReducer(accidentPhaseAttachmentDialogBriefState: AccidentPhaseAttachmentDialogBrief | undefined, action: Action) {
  return accidentPhaseAttachmentDialogBriefStateReducer(accidentPhaseAttachmentDialogBriefState, action);
}

/**
 * AttachmentComboData Reducer
 */
export const accidentPhaseAttachmentDialogComboDataFeatureKey = 'accidentPhaseAttachmentDialogComboData';


export interface AccidentPhaseAttachmentDialogComboData {
  readonly accidentPhaseAttachmentDialogComboData: AttachmentComboData;
}


export const accidentPhaseAttachmentDialogComboDataInitialState: AccidentPhaseAttachmentDialogComboData = {
  accidentPhaseAttachmentDialogComboData: undefined,
};


const accidentPhaseAttachmentDialogComboDataStateReducer = createReducer(
  accidentPhaseAttachmentDialogComboDataInitialState,
  on(loadAccidentPhaseAttachmentDialogComboDataSuccess, (accidentPhaseAttachmentDialogComboDataState, {data}) => ({accidentPhaseAttachmentDialogComboData: data.attachmentComboData})),
  on(loadExitApplication, (accidentPhaseAttachmentDialogComboDataState, {data}) => ({accidentPhaseAttachmentDialogComboData: data})),
  on(loadLogout, (accidentPhaseAttachmentDialogComboDataState, {data}) => ({accidentPhaseAttachmentDialogComboData: data})),
);


export function accidentPhaseAttachmentDialogComboDataReducer(accidentPhaseAttachmentDialogComboDataState: AccidentPhaseAttachmentDialogComboData | undefined, action: Action) {
  return accidentPhaseAttachmentDialogComboDataStateReducer(accidentPhaseAttachmentDialogComboDataState, action);
}


/**
 * AttachmentSelectedRecord Reducer
 */
export const accidentPhaseAttachmentDialogSelectedRecordFeatureKey = 'accidentPhaseAttachmentDialogSelectedRecord';


export interface AccidentPhaseAttachmentDialogSelectedRecord {
  readonly accidentPhaseAttachmentDialogSelectedRecord: any;
}


export const accidentPhaseAttachmentDialogSelectedRecordInitialState: AccidentPhaseAttachmentDialogSelectedRecord = {
  accidentPhaseAttachmentDialogSelectedRecord: undefined,
};


const accidentPhaseAttachmentDialogSelectedRecordStateReducer = createReducer(
  accidentPhaseAttachmentDialogSelectedRecordInitialState,
  on(loadAccidentPhaseAttachmentDialogSelectedRecordSuccess, (accidentPhaseAttachmentDialogSelectedRecordState, {data}) => ({accidentPhaseAttachmentDialogSelectedRecord: data.attachmentSelectedRecord})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (accidentPhaseAttachmentDialogSelectedRecordState, {data}) => ({accidentPhaseAttachmentDialogSelectedRecord: undefined})),
  on(loadExitApplication, (accidentPhaseAttachmentDialogSelectedRecordState, {data}) => ({accidentPhaseAttachmentDialogSelectedRecord: data})),
  on(loadLogout, (accidentPhaseAttachmentDialogSelectedRecordState, {data}) => ({accidentPhaseAttachmentDialogSelectedRecord: data})),
);


export function accidentPhaseAttachmentDialogSelectedRecordReducer(accidentPhaseAttachmentDialogSelectedRecordState: AccidentPhaseAttachmentDialogSelectedRecord | undefined, action: Action) {
  return accidentPhaseAttachmentDialogSelectedRecordStateReducer(accidentPhaseAttachmentDialogSelectedRecordState, action);
}
