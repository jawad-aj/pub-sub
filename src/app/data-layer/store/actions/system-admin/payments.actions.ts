import { createAction, props } from '@ngrx/store';

/**
 *  Get Payments
 */
export const loadGetPayments = createAction(
  '[Payments] Load GetPayments',
  props<{ data: any }>()
);

export const loadGetPaymentsSuccess = createAction(
  '[Payments] Load GetPayments Success',
  props<{ data: any }>()
);

/**
 *  Get Filtered Payments
 */
export const loadGetFilteredPayments = createAction(
  '[Payments] Load GetFilteredPayments',
  props<{ data: any }>()
);

export const loadGetFilteredPaymentsSuccess = createAction(
  '[Payments] Load GetFilteredPayments Success',
  props<{ data: any }>()
);


/**
 *  Get Payment Types
 */
export const loadGetPaymentTypes = createAction(
  '[Payments] Load GetPaymentTypes',
  props<{ data: any }>()
);

export const loadGetPaymentTypesSuccess = createAction(
  '[Payments] Load GetPaymentTypes Success',
  props<{ data: any }>()
);

/**
 *  Get Payment Batch
 */
export const loadGetPaymentBatch = createAction(
  '[Payments] Load GetPaymentBatch',
  props<{ data: any }>()
);

export const loadGetPaymentBatchSuccess = createAction(
  '[Payments] Load GetPaymentBatch Success',
  props<{ data: any }>()
);
/**
 *  Create Batch
 */
export const loadCreateBatch = createAction(
  '[Payments] Load CreateBatch',
  props<{ data: any }>()
);

export const loadCreateBatchSuccess = createAction(
  '[Payments] Load CreateBatch Success',
  props<{ data: any }>()
);

/**
 *  Change Batch Status
 */
export const loadChangeBatchStatus = createAction(
  '[Payments] Load ChangeBatchStatus',
  props<{ data: any }>()
);

export const loadChangeBatchStatusSuccess = createAction(
  '[Payments] Load ChangeBatchStatus Success',
  props<{ data: any }>()
);

/**
 *  Edit Batch Payment
 */
export const loadEditBatchPayment = createAction(
  '[Payments] Load EditBatchPayment',
  props<{ data: any }>()
);

export const loadEditBatchPaymentSuccess = createAction(
  '[Payments] Load EditBatchPayment Success',
  props<{ data: any }>()
);

/**
 *  Un Batched Payments
 */
export const loadUnBatchedPayments = createAction(
  '[Payments] Load UnBatchedPayments',
  props<{ data: any }>()
);

export const loadUnBatchedPaymentsSuccess = createAction(
  '[Payments] Load UnBatchedPayments Success',
  props<{ data: any }>()
);


/**
 *  Payment Filter
 */
export const loadPaymentFilter = createAction(
  '[Payments] Load PaymentFilter',
  props<{ data: any }>()
);

export const loadPaymentFilterSuccess = createAction(
  '[Payments] Load PaymentFilter Success',
  props<{ data: any }>()
);

/**
 *  ExportBatch
 */
export const loadExportBatch = createAction(
  '[Payments] Load ExportBatch',
  props<{ data: any }>()
);

export const loadExportBatchSuccess = createAction(
  '[Payments] Load ExportBatch Success',
  props<{ data: any }>()
);
