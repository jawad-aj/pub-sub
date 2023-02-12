import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromDiaryController from '../reducers/diary-controller.reducer';
import * as _ from 'lodash-es';

/**
 * DiaryBrief Selector
 */

export const selectDiaryBrief = createFeatureSelector<GlobalState, fromDiaryController.DiaryBriefState>(fromDiaryController.diaryBriefFeatureKey);
export const diaryBriefSelector = createSelector(selectDiaryBrief, (diaryBriefState: fromDiaryController.DiaryBriefState) => _.cloneDeep(diaryBriefState.diaryBrief));
