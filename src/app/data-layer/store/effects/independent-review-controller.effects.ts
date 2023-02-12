import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as independentReviewControllerActions from '../actions/independent-review-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {IndependentReviewControllerService} from '../../api-services/independent-review-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';



@Injectable()
export class IndependentReviewControllerEffects {

  /**
   *  IndependentReview Brief
   */
  independentReviewBrief$ = createEffect(() => this.actions$.pipe(
    ofType(independentReviewControllerActions.loadIndependentReviewBrief),
    switchMap((action) => this.independentReviewControllerService.setIndependentReviewBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'independentReviewBrief');
          return this.notificationUtil.successCheck('independentReviewBrief', obj, independentReviewControllerActions.loadIndependentReviewBriefSuccess, 'loadIndependentReviewBriefFailure', 'loadIndependentReviewBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  IndependentReview ComboData
   */
  independentReviewComboData$ = createEffect(() => this.actions$.pipe(
    ofType(independentReviewControllerActions.loadIndependentReviewComboData),
    switchMap((action) => this.independentReviewControllerService.setIndependentReviewComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'independentReviewComboData');
          return this.notificationUtil.successCheck('independentReviewComboData', obj, independentReviewControllerActions.loadIndependentReviewComboDataSuccess, 'loadIndependentReviewComboDataFailure', 'loadIndependentReviewComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  IndependentReviewClaimAuthorization Brief
   */
  independentReviewClaimAuthorizationBrief$ = createEffect(() => this.actions$.pipe(
    ofType(independentReviewControllerActions.loadIndependentReviewClaimAuthorizationBrief),
    switchMap((action) => this.independentReviewControllerService.setIndependentReviewClaimAuthorizationBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'independentReviewClaimAuthorizationBrief');
          return this.notificationUtil.successCheck('independentReviewClaimAuthorizationBrief', obj, independentReviewControllerActions.loadIndependentReviewClaimAuthorizationBriefSuccess, 'loadIndependentReviewClaimAuthorizationBriefFailure', 'loadIndependentReviewClaimAuthorizationBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  IndependentReviewClaimAuthorization ComboData
   */
  independentReviewClaimAuthorizationComboData$ = createEffect(() => this.actions$.pipe(
    ofType(independentReviewControllerActions.loadIndependentReviewClaimAuthorizationComboData),
    switchMap((action) => this.independentReviewControllerService.setIndependentReviewClaimAuthorizationComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'independentReviewClaimAuthorizationComboData');
          return this.notificationUtil.successCheck('independentReviewClaimAuthorizationComboData', obj, independentReviewControllerActions.loadIndependentReviewClaimAuthorizationComboDataSuccess, 'loadIndependentReviewClaimAuthorizationComboDataFailure', 'loadIndependentReviewClaimAuthorizationComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  IndependentReviewApproved Brief
   */
  independentReviewApprovedBrief$ = createEffect(() => this.actions$.pipe(
    ofType(independentReviewControllerActions.loadIndependentReviewApprovedBrief),
    switchMap((action) => this.independentReviewControllerService.setIndependentReviewApprovedBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'independentReviewApprovedBrief');
          return this.notificationUtil.successCheck('independentReviewApprovedBrief', obj, independentReviewControllerActions.loadIndependentReviewApprovedBriefSuccess, 'loadIndependentReviewApprovedBriefFailure', 'loadIndependentReviewApprovedBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private independentReviewControllerService: IndependentReviewControllerService, private notificationUtil: NotificationUtil) {
  }
}
