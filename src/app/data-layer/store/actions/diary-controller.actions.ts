import {createAction, props} from '@ngrx/store';

/**
 *  Diary Brief Controller
 */
export const loadDiaryBrief = createAction(
  '[DiaryController] Load DiaryBrief',
  props<{ data: any }>()
);
export const loadDiaryBriefSuccess = createAction(
  '[DiaryController] Load DiaryBrief Success',
  props<{ data: any }>()
);

