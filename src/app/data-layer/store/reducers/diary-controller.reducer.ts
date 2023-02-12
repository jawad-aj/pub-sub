import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadDiaryBriefSuccess} from '../actions/diary-controller.actions';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * DiaryBrief Reducer
 */
export const diaryBriefFeatureKey = 'diaryBrief';


export interface DiaryBriefState {
  readonly diaryBrief: any;
}


export const diaryBriefInitialState: DiaryBriefState = {
  diaryBrief: undefined,
};


const diaryBriefStateReducer = createReducer(
  diaryBriefInitialState,
  on(loadDiaryBriefSuccess, (diaryBriefState, {data}) => ({diaryBrief: data.diaryBrief})),
  on(loadExitApplication, (diaryBriefState, {data}) => ({diaryBrief: data})),
  on(loadLogout, (diaryBriefState, {data}) => ({diaryBrief: data})),
);


export function diaryBriefReducer(diaryBriefState: DiaryBriefState | undefined, action: Action) {
  return diaryBriefStateReducer(diaryBriefState, action);
}
