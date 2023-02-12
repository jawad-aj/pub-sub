import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as paymentActions from '../../actions/system-admin/payments.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../../actions/service-failure.actions';
import {NotificationUtil} from '../../../api-services/util/NotificationUtil';
import {PaymentsService} from '../../../api-services/system-admin/payments.service';
import {DialogService} from '../../../../business-layer/services/Dialog.service';

@Injectable()
export class PaymentsEffects {


  /**
   *  Get Payments
   */
  getPayments$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadGetPayments),
    switchMap((action) => this.paymentService.getPayments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'payments');
          return this.notificationUtil.successCheck('payments', obj, paymentActions.loadGetPaymentsSuccess, 'Payments can not be retrieved.', 'loadGetPaymentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Get FilteredPayments
   */
  getFilteredPayments$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadGetFilteredPayments),
    switchMap((action) => this.paymentService.getPayments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'payments');
          return this.notificationUtil.successCheck('payments', obj, paymentActions.loadGetFilteredPaymentsSuccess, 'Payments can not be retrieved.', 'loadGetFilteredPaymentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Get Payment Types
   */
  getPaymentTypes$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadGetPaymentTypes),
    switchMap((action) => this.paymentService.getPaymentTypes()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentTypes');
          return this.notificationUtil.successCheck('paymentTypes', obj, paymentActions.loadGetPaymentTypesSuccess, 'Payment Types can not be retrieved.', 'loadGetPaymentTypesSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Get Payment Batch
   */
  getPaymentBatch$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadGetPaymentBatch),
    switchMap((action) => this.paymentService.getPaymentBatch(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBatch');
          return this.notificationUtil.successCheck('paymentBatch', obj, paymentActions.loadGetPaymentBatchSuccess, 'Payment Batch can not be retrieved.', 'loadGetPaymentBatchSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Create Batch
   */
  createBatch$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadCreateBatch),
    switchMap((action) => this.paymentService.createBatch(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBatch');
          let temp = this.notificationUtil.successCheck('paymentBatch', obj, paymentActions.loadCreateBatchSuccess, 'Payment Batch can not be created.', 'loadCreateBatchSuccess');
          this.dialogService.dispatchEvent(temp.data, 'loadAlertWithDynamicMessage', '', 'paymentBatch', 'Payment Batch has been generated : ');
          return temp;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Get un-Batched Payments
   */
  unBatchedPayments$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadUnBatchedPayments),
    switchMap((action) => this.paymentService.getPayments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'unBatchedPayments');
          let temp = this.notificationUtil.successCheck('unBatchedPayments', obj, paymentActions.loadUnBatchedPaymentsSuccess, 'Payment Batch can not be updated.', 'loadUnBatchedPaymentsSuccess');
          return temp;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Change Batch Status
   */
  batchStatus$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadChangeBatchStatus),
    switchMap((action) => this.paymentService.changeBatchStatus(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBatch');
          if (action.data.data.paramBool) {
            this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Batch has been processed successfully');
          } else {
            this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Batch has been un-processed successfully');
          }
          return this.notificationUtil.successCheck('paymentBatch', obj, paymentActions.loadChangeBatchStatusSuccess, 'Batch can not be un-processed.', 'loadChangeBatchStatusSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Edit Batch Payment
   */
  editBatchPayment$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadEditBatchPayment),
    switchMap((action) => this.paymentService.editBatchPayments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBatch');
          return this.notificationUtil.successCheck('paymentBatch', obj, paymentActions.loadEditBatchPaymentSuccess, 'Batch can not be updated.', 'loadEditBatchPaymentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  /**
   *  Payment Filter
   */
  paymentFilter$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadPaymentFilter),
    switchMap((action) => this.paymentService.paymentFilter(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentFilter');
          return this.notificationUtil.successCheck('paymentFilter', obj, paymentActions.loadPaymentFilterSuccess, 'Payment Filter can not be updated.', 'loadPaymentFilterSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Edit Batch Payment
   */
  exportBatch$ = createEffect(() => this.actions$.pipe(
    ofType(paymentActions.loadExportBatch),
    switchMap((action) => this.paymentService.exportBatch(action.data)
      .pipe(
        map((response) => {
          if(response){
            this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Batch has been exported successfully');
          }
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBatch');
          return this.notificationUtil.successCheck('paymentBatch', obj, paymentActions.loadExportBatchSuccess, 'Batch can not be exported.', 'loadExportBatchSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private paymentService: PaymentsService, private notificationUtil: NotificationUtil, private dialogService: DialogService,) {
  }

}
