import {Action, createReducer, MetaReducer, on} from '@ngrx/store';
import {loadExitApplication} from '../../actions/exit-application.actions';
import {loadLogout} from '../../actions/logout.actions';
import {
  loadGetFilteredPaymentsSuccess,
  loadGetPaymentBatchSuccess,
  loadGetPaymentsSuccess,
  loadGetPaymentTypesSuccess,
  loadPaymentFilterSuccess,
  loadUnBatchedPaymentsSuccess
} from '../../actions/system-admin/payments.actions';
import {ApplicationUtil} from '../../../api-services/util/ApplicationUtil';
import * as _ from 'lodash-es';

/**
 * GetPayments Reducer
 */
export const paymentsFeatureKey = 'payments';


export interface GetPaymentsState {
  readonly payments: any;
}


export const paymentsInitialState: GetPaymentsState = {
  payments: undefined,
};


const paymentsStateReducer = createReducer(
  paymentsInitialState,
  on(loadGetPaymentsSuccess, (paymentsState, {data}) => ({payments: data.payments})),
  on(loadGetFilteredPaymentsSuccess, (paymentsState, {data}) => ({payments: data.payments})),
  on(loadExitApplication, (paymentsState, {data}) => ({payments: data})),
  on(loadLogout, (paymentsState, {data}) => ({payments: data})),
);


export function paymentsReducer(paymentsState: GetPaymentsState | undefined, action: Action) {
  return paymentsStateReducer(paymentsState, action);
}

/**
 * GetPaymentTypes Reducer
 */
export const paymentTypesFeatureKey = 'paymentTypes';


export interface GetPaymentTypesState {
  readonly paymentTypes: any;
}


export const paymentTypesInitialState: GetPaymentTypesState = {
  paymentTypes: undefined,
};


const paymentTypesStateReducer = createReducer(
  paymentTypesInitialState,
  on(loadGetPaymentTypesSuccess, (paymentTypesState, {data}) => ({paymentTypes: data.paymentTypes})),
  on(loadExitApplication, (paymentTypesState, {data}) => ({paymentTypes: data})),
  on(loadLogout, (paymentTypesState, {data}) => ({paymentTypes: data})),
);


export function paymentTypesReducer(paymentTypesState: GetPaymentTypesState | undefined, action: Action) {
  return paymentTypesStateReducer(paymentTypesState, action);
}

/**
 * GetPaymentBatch Reducer
 */
export const paymentBatchFeatureKey = 'paymentBatch';


export interface GetPaymentBatchState {
  readonly paymentBatch: any;
}


export const paymentBatchInitialState: GetPaymentBatchState = {
  paymentBatch: undefined,
};


const paymentBatchStateReducer = createReducer(
  paymentBatchInitialState,
  on(loadGetPaymentBatchSuccess, (paymentBatchState, {data}) => ({paymentBatch: data.paymentBatch})),
  on(loadExitApplication, (paymentBatchState, {data}) => ({paymentBatch: data})),
  on(loadLogout, (paymentBatchState, {data}) => ({paymentBatch: data})),
);


export function paymentBatchReducer(paymentBatchState: GetPaymentBatchState | undefined, action: Action) {
  return paymentBatchStateReducer(paymentBatchState, action);
}


/**
 * UnBatchedPayments Reducer
 */
export const unBatchedPaymentsFeatureKey = 'unBatchedPayments';


export interface UnBatchedPaymentsState {
  readonly unBatchedPayments: any;
}


export const unBatchedPaymentsInitialState: UnBatchedPaymentsState = {
  unBatchedPayments: undefined,
};


const unBatchedPaymentsStateReducer = createReducer(
  unBatchedPaymentsInitialState,
  on(loadUnBatchedPaymentsSuccess, (unBatchedPaymentsState, {data}) => ({unBatchedPayments: data.unBatchedPayments})),
  on(loadExitApplication, (unBatchedPaymentsState, {data}) => ({unBatchedPayments: data})),
  on(loadLogout, (unBatchedPaymentsState, {data}) => ({unBatchedPayments: data})),
);


export function unBatchedPaymentsReducer(unBatchedPaymentsState: UnBatchedPaymentsState | undefined, action: Action) {
  return unBatchedPaymentsStateReducer(unBatchedPaymentsState, action);
}


/**
 * PaymentFilter Reducer
 */
export const paymentFilterFeatureKey = 'paymentFilter';


export interface PaymentFilterState {
  readonly paymentFilter: any;
}


export const paymentFilterInitialState: PaymentFilterState = {
  paymentFilter: undefined,
};


const paymentFilterStateReducer = createReducer(
  paymentFilterInitialState,
  on(loadPaymentFilterSuccess, (paymentFilterState, {data}) => ({paymentFilter: data.paymentFilter})),
  on(loadExitApplication, (paymentFilterState, {data}) => ({paymentFilter: data})),
  on(loadLogout, (paymentFilterState, {data}) => ({paymentFilter: data})),
);


export function paymentFilterReducer(paymentFilterState: PaymentFilterState | undefined, action: Action) {
  return paymentFilterStateReducer(paymentFilterState, action);
}

/**
 * META REDUCER
 **/
/*
export function paymentMetaReducer(reducer) {
  return function(state, action) {
    if (action.type === loadGetPaymentTypesSuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data) {
        app.data = ApplicationUtil.dateTypeCastingForGrids(app.data);
      }
      return reducer(state, app);
    }
  };
}
*/

