import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "../reducers";
import * as fromPaymentController from "../reducers/payment-controller.reducer";
import * as _ from 'lodash-es';

/**
 * PaymentBrief Selector
 */

export const selectPaymentBrief = createFeatureSelector<GlobalState, fromPaymentController.PaymentBriefState>(fromPaymentController.paymentBriefFeatureKey);
export const paymentBriefSelector = createSelector(selectPaymentBrief, (paymentBriefState: fromPaymentController.PaymentBriefState) => _.cloneDeep(paymentBriefState.paymentBrief));

/**
 * PaymentComboData Selector
 */

export const selectPaymentComboData = createFeatureSelector<GlobalState, fromPaymentController.PaymentComboDataState>(fromPaymentController.paymentComboDataFeatureKey);
export const paymentComboDataSelector = createSelector(selectPaymentComboData, (paymentComboDataState: fromPaymentController.PaymentComboDataState) => _.cloneDeep(paymentComboDataState.paymentComboData));
