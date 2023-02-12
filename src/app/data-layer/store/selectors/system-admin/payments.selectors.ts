import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPayments from '../../reducers/system-admin/payments.reducer';
import {
  GetPaymentBatchState,
  GetPaymentsState,
  GetPaymentTypesState,
  PaymentFilterState,
  UnBatchedPaymentsState
} from '../../reducers/system-admin/payments.reducer';
import * as _ from 'lodash-es';

/**
 * Payments Selector
 */

export const selectPayments = createFeatureSelector<GetPaymentsState>(fromPayments.paymentsFeatureKey);
export const paymentsSelector = createSelector(selectPayments, (paymentsState: fromPayments.GetPaymentsState) => _.cloneDeep(paymentsState.payments));

/**
 * PaymentTypes Selector
 */

export const selectPaymentTypes = createFeatureSelector<GetPaymentTypesState>(fromPayments.paymentTypesFeatureKey);
export const paymentTypesSelector = createSelector(selectPaymentTypes, (paymentTypesState: fromPayments.GetPaymentTypesState) => _.cloneDeep(paymentTypesState.paymentTypes));

/**
 * PaymentBatch Selector
 */

export const selectPaymentBatch = createFeatureSelector<GetPaymentBatchState>(fromPayments.paymentBatchFeatureKey);
export const paymentBatchSelector = createSelector(selectPaymentBatch, (paymentBatchState: fromPayments.GetPaymentBatchState) => _.cloneDeep(paymentBatchState.paymentBatch));

/**
 * UnBatchedPayments Selector
 */

export const selectUnBatchedPayments = createFeatureSelector<UnBatchedPaymentsState>(fromPayments.unBatchedPaymentsFeatureKey);
export const unBatchedPaymentsSelector = createSelector(selectUnBatchedPayments, (unBatchedPaymentsState: fromPayments.UnBatchedPaymentsState) => _.cloneDeep(unBatchedPaymentsState.unBatchedPayments));

/**
 * PaymentFilter Selector
 */

export const selectPaymentFilter = createFeatureSelector<PaymentFilterState>(fromPayments.paymentFilterFeatureKey);
export const paymentFilterSelector = createSelector(selectPaymentFilter, (paymentFilterState: fromPayments.PaymentFilterState) => {
  if (paymentFilterState) {
    return _.cloneDeep(paymentFilterState.paymentFilter);
  }
});
