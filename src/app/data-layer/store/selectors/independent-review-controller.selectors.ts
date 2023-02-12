import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromIndependentReviewController from '../reducers/independent-review-controller.reducer';
import * as _ from 'lodash-es';

/**
 * IndependentReviewBrief Selector
 */

export const selectIndependentReviewBrief = createFeatureSelector<GlobalState, fromIndependentReviewController.IndependentReviewBriefState>(fromIndependentReviewController.independentReviewBriefFeatureKey);
export const independentReviewBriefSelector = createSelector(selectIndependentReviewBrief, (independentReviewBriefState: fromIndependentReviewController.IndependentReviewBriefState) => _.cloneDeep(independentReviewBriefState.independentReviewBrief));
/**
 * IndependentReviewComboData Selector
 */

export const selectIndependentReviewComboData = createFeatureSelector<GlobalState, fromIndependentReviewController.IndependentReviewComboDataState>(fromIndependentReviewController.independentReviewComboDataFeatureKey);
export const independentReviewComboDataSelector = createSelector(selectIndependentReviewComboData, (independentReviewComboDataState: fromIndependentReviewController.IndependentReviewComboDataState) => _.cloneDeep(independentReviewComboDataState.independentReviewComboData));
/**
 * IndependentReviewClaimAuthorizationBrief Selector
 */

export const selectIndependentReviewClaimAuthorizationBrief = createFeatureSelector<GlobalState, fromIndependentReviewController.IndependentReviewClaimAuthorizationBriefState>(fromIndependentReviewController.independentReviewClaimAuthorizationBriefFeatureKey);
export const independentReviewClaimAuthorizationBriefSelector = createSelector(selectIndependentReviewClaimAuthorizationBrief, (independentReviewClaimAuthorizationBriefState: fromIndependentReviewController.IndependentReviewClaimAuthorizationBriefState) => _.cloneDeep(independentReviewClaimAuthorizationBriefState.independentReviewClaimAuthorizationBrief));

/**
 * IndependentReviewClaimAuthorizationComboData Selector
 */

export const selectIndependentReviewClaimAuthorizationComboData = createFeatureSelector<GlobalState, fromIndependentReviewController.IndependentReviewClaimAuthorizationComboDataState>(fromIndependentReviewController.independentReviewClaimAuthorizationComboDataFeatureKey);
export const independentReviewClaimAuthorizationComboDataSelector = createSelector(selectIndependentReviewClaimAuthorizationComboData, (independentReviewClaimAuthorizationComboDataState: fromIndependentReviewController.IndependentReviewClaimAuthorizationComboDataState) => _.cloneDeep(independentReviewClaimAuthorizationComboDataState.independentReviewClaimAuthorizationComboData));
/**
 * IndependentReviewApprovedBrief Selector
 */

export const selectIndependentReviewApprovedBrief = createFeatureSelector<GlobalState, fromIndependentReviewController.IndependentReviewApprovedBriefState>(fromIndependentReviewController.independentReviewApprovedBriefFeatureKey);
export const independentReviewApprovedBriefSelector = createSelector(selectIndependentReviewApprovedBrief, (independentReviewApprovedBriefState: fromIndependentReviewController.IndependentReviewApprovedBriefState) => _.cloneDeep(independentReviewApprovedBriefState.independentReviewApprovedBrief));