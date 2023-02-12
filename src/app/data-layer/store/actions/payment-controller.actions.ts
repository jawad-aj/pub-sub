import {createAction, props} from '@ngrx/store';

/**
 *  Payment Brief Controller
 */
export const loadPaymentBrief = createAction(
  '[PaymentController] Load PaymentBrief',
  props<{ data: any }>()
);
export const loadPaymentBriefSuccess = createAction(
  '[PaymentController] Load PaymentBrief Success',
  props<{ data: any }>()
);

/**
 *  Payment ComboData Controller
 */
export const loadPaymentComboData = createAction(
  '[PaymentController] Load PaymentComboData',
  props<{ data: any }>()
);
export const loadPaymentComboDataSuccess = createAction(
  '[PaymentController] Load PaymentComboData Success',
  props<{ data: any }>()
);
