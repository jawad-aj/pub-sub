import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromWorkBasketController from '../reducers/workbasket-controller.reducer'
import {GlobalState} from "../reducers";

/**
 * WorkBasketComboData Selector
 */

export const selectWorkBasketComboData = createFeatureSelector<GlobalState, fromWorkBasketController.WorkBasketComboDataState>(fromWorkBasketController.workBasketComboDataFeatureKey);
export const workBasketComboDataSelector = createSelector(selectWorkBasketComboData, (workBasketComboDataState: fromWorkBasketController.WorkBasketComboDataState) => _.cloneDeep(workBasketComboDataState.workBasketComboData));
/**
 * WorkBasketBrief Selector
 */

export const selectWorkBasketBrief = createFeatureSelector<GlobalState, fromWorkBasketController.WorkBasketBriefState>(fromWorkBasketController.workBasketBriefFeatureKey);
export const workBasketBriefSelector = createSelector(selectWorkBasketBrief, (workBasketBriefState: fromWorkBasketController.WorkBasketBriefState) => _.cloneDeep(workBasketBriefState.workBasketBrief));

/**
 * AssignComboData Selector
 */

export const selectAssignComboData = createFeatureSelector<GlobalState, fromWorkBasketController.AssignComboDataState>(fromWorkBasketController.assignComboDataFeatureKey);
export const assignComboDataSelector = createSelector(selectAssignComboData, (assignComboDataState: fromWorkBasketController.AssignComboDataState) => _.cloneDeep(assignComboDataState.assignComboData));

/**
 * AssignBrief Selector
 */

export const selectAssignBrief = createFeatureSelector<GlobalState, fromWorkBasketController.AssignBriefState>(fromWorkBasketController.assignBriefFeatureKey);
export const assignBriefSelector = createSelector(selectAssignBrief, (assignBriefState: fromWorkBasketController.AssignBriefState) => _.cloneDeep(assignBriefState.assignBrief));
