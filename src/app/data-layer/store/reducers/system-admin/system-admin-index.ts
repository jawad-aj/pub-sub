import {ActionReducerMap,} from '@ngrx/store';
import * as fromPayments from './payments.reducer';

/**
 * Global State
 */
export interface SystemAdminGlobalState {
  [fromPayments.paymentsFeatureKey]: fromPayments.GetPaymentsState;

}

/**
 * Reducer Map
 */
export const systemAdminReducers: ActionReducerMap<SystemAdminGlobalState> = {
  [fromPayments.paymentsFeatureKey]: fromPayments.paymentsReducer,

};





