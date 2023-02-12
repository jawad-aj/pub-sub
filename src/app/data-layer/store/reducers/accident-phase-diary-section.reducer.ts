import {Action, createReducer, on} from '@ngrx/store';
import {
  loadAccidentPhaseDiaryBriefSuccess,
  loadAccidentPhaseDiaryCommentsBriefSuccess,
  loadAccidentPhaseDiarySelectedRecordSuccess
} from '../actions/accident-phase-diary-section.actions';
import {loadLogout} from '../actions/logout.actions';
import {DiaryBrief} from '../../../business-layer/models/brief/Diary.brief';
import {loadNonStructuralAccidentApplicationChangeSuccess} from '../actions/application.actions';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * DiarySectionBrief Reducer
 */
export const accidentPhaseDiaryBriefFeatureKey = 'accidentPhaseDiaryBrief';


export interface AccidentPhaseDiaryBrief {
  readonly accidentPhaseDiaryBrief: DiaryBrief;
}


export const accidentPhaseDiaryBriefInitialState: AccidentPhaseDiaryBrief = {
  accidentPhaseDiaryBrief: undefined,
};


const accidentPhaseDiaryBriefStateReducer = createReducer(
  accidentPhaseDiaryBriefInitialState,
  on(loadAccidentPhaseDiaryBriefSuccess, (accidentPhaseDiaryBriefState, {data}) => ({accidentPhaseDiaryBrief: data.diaryBrief})),
  on(loadAccidentPhaseDiaryCommentsBriefSuccess, (accidentPhaseDiaryBriefState, {data}) => ({accidentPhaseDiaryBrief: data.diaryCommentsBrief})),
  on(loadExitApplication, (accidentPhaseDiaryBriefState, {data}) => ({accidentPhaseDiaryBrief: data})),
  on(loadLogout, (accidentPhaseDiaryBriefState, {data}) => ({accidentPhaseDiaryBrief: data})),
);


export function accidentPhaseDiaryBriefReducer(accidentPhaseDiaryBriefState: AccidentPhaseDiaryBrief | undefined, action: Action) {
  return accidentPhaseDiaryBriefStateReducer(accidentPhaseDiaryBriefState, action);
}

/**
 * DiarySectionSelectedRecord Reducer
 */
export const accidentPhaseDiarySelectedRecordFeatureKey = 'accidentPhaseDiarySelectedRecord';


export interface AccidentPhaseDiarySelectedRecord {
  readonly accidentPhaseDiarySelectedRecord: any;
}


export const accidentPhaseDiarySelectedRecordInitialState: AccidentPhaseDiarySelectedRecord = {
  accidentPhaseDiarySelectedRecord: undefined,
};


const accidentPhaseDiarySelectedRecordStateReducer = createReducer(
  accidentPhaseDiarySelectedRecordInitialState,
  on(loadAccidentPhaseDiarySelectedRecordSuccess, (accidentPhaseDiarySelectedRecordState, {data}) => ({accidentPhaseDiarySelectedRecord: data.diarySelectedRecord})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (accidentPhaseDiarySelectedRecordState, {data}) => ({accidentPhaseDiarySelectedRecord: undefined})),
  on(loadExitApplication, (accidentPhaseDiarySelectedRecordState, {data}) => ({accidentPhaseDiarySelectedRecord: data})),
  on(loadLogout, (accidentPhaseDiarySelectedRecordState, {data}) => ({accidentPhaseDiarySelectedRecord: data})),
);


export function accidentPhaseDiarySelectedRecordReducer(accidentPhaseDiarySelectedRecordState: AccidentPhaseDiarySelectedRecord | undefined, action: Action) {
  return accidentPhaseDiarySelectedRecordStateReducer(accidentPhaseDiarySelectedRecordState, action);
}
