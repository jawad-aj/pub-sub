import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentPhaseAttachmentGridBriefSuccess,
  loadAccidentPhaseAttachmentGridComboDataSuccess,
  loadAttachmentBriefSuccess,
  loadAttachmentComboDataSuccess
} from '../actions/attachment-controller.actions';
import {AttachmentComboData} from '../../../business-layer/models/AttachmentComboData';
import {DiaryBrief} from '../../../business-layer/models/brief/Diary.brief';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * AttachmentBrief Reducer
 */
export const attachmentBriefFeatureKey = 'attachmentBrief';


export interface AttachmentBriefState {
  readonly attachmentBrief: DiaryBrief;
}


export const attachmentBriefInitialState: AttachmentBriefState = {
  attachmentBrief: undefined,
};


const attachmentBriefStateReducer = createReducer(
  attachmentBriefInitialState,
  on(loadAttachmentBriefSuccess, (attachmentBriefState, {data}) => ({attachmentBrief: data.attachmentBrief})),
  on(loadExitApplication, (attachmentBriefState, {data}) => ({attachmentBrief: data})),
  on(loadLogout, (attachmentBriefState, {data}) => ({attachmentBrief: data})),
);


export function attachmentBriefReducer(attachmentBriefState: AttachmentBriefState | undefined, action: Action) {
  return attachmentBriefStateReducer(attachmentBriefState, action);
}

/**
 * AttachmentComboData Reducer
 */
export const attachmentComboDataFeatureKey = 'attachmentComboData';


export interface AttachmentComboDataState {
  readonly attachmentComboData: AttachmentComboData;
}


export const attachmentComboDataInitialState: AttachmentComboDataState = {
  attachmentComboData: undefined,
};


const attachmentComboDataStateReducer = createReducer(
  attachmentComboDataInitialState,
  on(loadAttachmentComboDataSuccess, (attachmentComboDataState, {data}) => ({attachmentComboData: data.attachmentComboData})),
  on(loadExitApplication, (attachmentComboDataState, {data}) => ({attachmentComboData: data})),
  on(loadLogout, (attachmentComboDataState, {data}) => ({attachmentComboData: data})),
);


export function attachmentComboDataReducer(attachmentComboDataState: AttachmentComboDataState | undefined, action: Action) {
  return attachmentComboDataStateReducer(attachmentComboDataState, action);
}

/**
 *  ================ Accident Phase =====================
 */
/**
 * AccidentPhaseAttachmentGridBrief Reducer
 */
export const accidentPhaseAttachmentGridBriefFeatureKey = 'accidentPhaseAttachmentGridBrief';


export interface AccidentPhaseAttachmentGridBriefState {
  readonly accidentPhaseAttachmentGridBrief: DiaryBrief;
}


export const accidentPhaseAttachmentGridBriefInitialState: AccidentPhaseAttachmentGridBriefState = {
  accidentPhaseAttachmentGridBrief: undefined,
};


const accidentPhaseAttachmentGridBriefStateReducer = createReducer(
  accidentPhaseAttachmentGridBriefInitialState,
  on(loadAccidentPhaseAttachmentGridBriefSuccess, (accidentPhaseAttachmentGridBriefState, {data}) => ({accidentPhaseAttachmentGridBrief: data.brief})),
  on(loadExitApplication, (accidentPhaseAttachmentGridBriefState, {data}) => ({accidentPhaseAttachmentGridBrief: data})),
  on(loadLogout, (accidentPhaseAttachmentGridBriefState, {data}) => ({accidentPhaseAttachmentGridBrief: data})),
);


export function accidentPhaseAttachmentGridBriefReducer(accidentPhaseAttachmentGridBriefState: AccidentPhaseAttachmentGridBriefState | undefined, action: Action) {
  return accidentPhaseAttachmentGridBriefStateReducer(accidentPhaseAttachmentGridBriefState, action);
}

/**
 * AccidentPhaseAttachmentGridComboData Reducer
 */
export const accidentPhaseAttachmentGridComboDataFeatureKey = 'accidentPhaseAttachmentGridComboData';


export interface AccidentPhaseAttachmentGridComboDataState {
  readonly accidentPhaseAttachmentGridComboData: AttachmentComboData;
}


export const accidentPhaseAttachmentGridComboDataInitialState: AccidentPhaseAttachmentGridComboDataState = {
  accidentPhaseAttachmentGridComboData: undefined,
};


const accidentPhaseAttachmentGridComboDataStateReducer = createReducer(
  accidentPhaseAttachmentGridComboDataInitialState,
  on(loadAccidentPhaseAttachmentGridComboDataSuccess, (accidentPhaseAttachmentGridComboDataState, {data}) => ({accidentPhaseAttachmentGridComboData: data.comboData})),
  on(loadExitApplication, (accidentPhaseAttachmentGridComboDataState, {data}) => ({accidentPhaseAttachmentGridComboData: data})),
  on(loadLogout, (accidentPhaseAttachmentGridComboDataState, {data}) => ({accidentPhaseAttachmentGridComboData: data})),
);


export function accidentPhaseAttachmentGridComboDataReducer(accidentPhaseAttachmentGridComboDataState: AccidentPhaseAttachmentGridComboDataState | undefined, action: Action) {
  return accidentPhaseAttachmentGridComboDataStateReducer(accidentPhaseAttachmentGridComboDataState, action);
}
