import {Action, createReducer, on} from "@ngrx/store";
import {loadLogout} from "../actions/logout.actions";
import {loadPaymentBriefSuccess, loadPaymentComboDataSuccess} from "../actions/payment-controller.actions";
import {PaymentBrief} from "../../../business-layer/models/brief/Payment.brief";
import {PaymentComboData} from "../../../business-layer/models/PaymentComboData";
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * PaymentBrief Reducer
 */
export const paymentBriefFeatureKey = 'paymentBrief';


export interface PaymentBriefState {
  readonly paymentBrief: PaymentBrief;
}


export const paymentBriefInitialState: PaymentBriefState = {
  paymentBrief: undefined,
};


const paymentBriefStateReducer = createReducer(
  paymentBriefInitialState,
  on(loadPaymentBriefSuccess, (paymentBriefState, {data}) => ({paymentBrief: data.paymentBrief})),
  on(loadExitApplication, (paymentBriefState, {data}) => ({paymentBrief: data})),
  on(loadLogout, (paymentBriefState, {data}) => ({paymentBrief: data})),
);


export function paymentBriefReducer(paymentBriefState: PaymentBriefState | undefined, action: Action) {
  return paymentBriefStateReducer(paymentBriefState, action);
}

/**
 * PaymentComboData Reducer
 */
export const paymentComboDataFeatureKey = 'paymentComboData';


export interface PaymentComboDataState {
  readonly paymentComboData: PaymentComboData;
}


export const paymentComboDataInitialState: PaymentComboDataState = {
  paymentComboData: undefined,
};


const paymentComboDataStateReducer = createReducer(
  paymentComboDataInitialState,
  on(loadPaymentComboDataSuccess, (paymentComboDataState, {data}) => ({paymentComboData: data.paymentComboData})),
  on(loadExitApplication, (paymentComboDataState, {data}) => ({paymentComboData: data})),
  on(loadLogout, (paymentComboDataState, {data}) => ({paymentComboData: data})),
);


export function paymentComboDataReducer(paymentComboDataState: PaymentComboDataState | undefined, action: Action) {
  return paymentComboDataStateReducer(paymentComboDataState, action);
}
