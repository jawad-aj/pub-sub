import { createAction, props } from '@ngrx/store';

/**
 *  AccidentPhaseDiary Brief
 */
export const loadAccidentPhaseDiaryBrief = createAction(
  '[AccidentPhaseDiary] Load AccidentPhaseDiaryBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseDiaryBriefSuccess = createAction(
  '[AccidentPhaseDiary] Load AccidentPhaseDiaryBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseDiaryComments Brief
 */
export const loadAccidentPhaseDiaryCommentsBrief = createAction(
  '[AccidentPhaseDiaryComments] Load AccidentPhaseDiaryCommentsBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseDiaryCommentsBriefSuccess = createAction(
  '[AccidentPhaseDiaryComments] Load AccidentPhaseDiaryCommentsBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseDiary SelectedRecord
 */
export const loadAccidentPhaseDiarySelectedRecord = createAction(
  '[AccidentPhaseDiary] Load AccidentPhaseDiarySelectedRecord',
  props<{ data: any }>()
);
export const loadAccidentPhaseDiarySelectedRecordSuccess = createAction(
  '[AccidentPhaseDiary] Load AccidentPhaseDiarySelectedRecord Success',
  props<{ data: any }>()
);
