import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "../reducers";
import * as fromFraudCheckController from "../reducers/fraud-check-controller.reducer";
import * as _ from 'lodash-es';

/**
 * FraudCheckBrief Selector
 */

export const selectFraudCheckBrief = createFeatureSelector<GlobalState, fromFraudCheckController.FraudCheckBriefState>(fromFraudCheckController.fraudCheckBriefFeatureKey);
export const fraudCheckBriefSelector = createSelector(selectFraudCheckBrief, (fraudCheckBriefState: fromFraudCheckController.FraudCheckBriefState) => _.cloneDeep(fraudCheckBriefState.fraudCheckBrief));
/**
 * FraudCheckComboData Selector
 */

export const selectFraudCheckComboData = createFeatureSelector<GlobalState, fromFraudCheckController.FraudCheckComboDataState>(fromFraudCheckController.fraudCheckComboDataFeatureKey);
export const fraudCheckComboDataSelector = createSelector(selectFraudCheckComboData, (fraudCheckComboDataState: fromFraudCheckController.FraudCheckComboDataState) => _.cloneDeep(fraudCheckComboDataState.fraudCheckComboData));

/**
 * ReviewApprovedBrief Selector
 */

export const selectReviewApprovedBrief = createFeatureSelector<GlobalState, fromFraudCheckController.ReviewApprovedBriefState>(fromFraudCheckController.reviewApprovedBriefFeatureKey);
export const reviewApprovedBriefSelector = createSelector(selectReviewApprovedBrief, (reviewApprovedBriefState: fromFraudCheckController.ReviewApprovedBriefState) => _.cloneDeep(reviewApprovedBriefState.reviewApprovedBrief));

/**
 * ReviewApprovedComboData Selector
 */

export const selectReviewApprovedComboData = createFeatureSelector<GlobalState, fromFraudCheckController.ReviewApprovedComboDataState>(fromFraudCheckController.reviewApprovedComboDataFeatureKey);
export const reviewApprovedComboDataSelector = createSelector(selectReviewApprovedComboData, (reviewApprovedComboDataState: fromFraudCheckController.ReviewApprovedComboDataState) => _.cloneDeep(reviewApprovedComboDataState.reviewApprovedComboData));

/**
 * FraudCheckApprovedBrief Selector
 */

export const selectFraudCheckApprovedBrief = createFeatureSelector<GlobalState, fromFraudCheckController.FraudCheckApprovedBriefState>(fromFraudCheckController.fraudCheckApprovedBriefFeatureKey);
export const fraudCheckApprovedBriefSelector = createSelector(selectFraudCheckApprovedBrief, (fraudCheckApprovedBriefState: fromFraudCheckController.FraudCheckApprovedBriefState) => _.cloneDeep(fraudCheckApprovedBriefState.fraudCheckApprovedBrief));

/**
 * InvestigationApprovalComboData Selector
 */

export const selectInvestigationApprovalComboData = createFeatureSelector<GlobalState, fromFraudCheckController.InvestigationApprovalComboDataState>(fromFraudCheckController.investigationApprovalComboDataFeatureKey);
export const investigationApprovalComboDataSelector = createSelector(selectInvestigationApprovalComboData, (investigationApprovalComboDataState: fromFraudCheckController.InvestigationApprovalComboDataState) => _.cloneDeep(investigationApprovalComboDataState.investigationApprovalComboData));


/**
 * InvestigationApprovalBrief Selector
 */

export const selectInvestigationApprovalBrief = createFeatureSelector<GlobalState, fromFraudCheckController.InvestigationApprovalBriefState>(fromFraudCheckController.investigationApprovalBriefFeatureKey);
export const investigationApprovalBriefSelector = createSelector(selectInvestigationApprovalBrief, (investigationApprovalBriefState: fromFraudCheckController.InvestigationApprovalBriefState) => _.cloneDeep(investigationApprovalBriefState.investigationApprovalBrief));
