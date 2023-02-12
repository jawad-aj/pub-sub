import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as paymentControllerActions from "../actions/payment-controller.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {PaymentControllerService} from "../../api-services/payment-controller.service";


@Injectable()
export class PaymentControllerEffects {

  /**
   *  Payment Brief
   */
  paymentBrief$ = createEffect(() => this.actions$.pipe(
    ofType(paymentControllerActions.loadPaymentBrief),
    switchMap((action) => this.paymentControllerService.setPaymentBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentBrief');
          return this.notificationUtil.successCheck('paymentBrief', obj, paymentControllerActions.loadPaymentBriefSuccess, 'loadPaymentBriefFailure', 'loadPaymentBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Payment ComboData
   */
  paymentComboData$ = createEffect(() => this.actions$.pipe(
    ofType(paymentControllerActions.loadPaymentComboData),
    switchMap((action) => this.paymentControllerService.setPaymentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'paymentComboData');
          return this.notificationUtil.successCheck('paymentComboData', obj, paymentControllerActions.loadPaymentComboDataSuccess, 'loadPaymentComboDataFailure', 'loadPaymentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private paymentControllerService: PaymentControllerService, private notificationUtil: NotificationUtil) {
  }

}
