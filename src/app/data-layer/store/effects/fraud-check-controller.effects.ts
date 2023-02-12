import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fraudCheckControllerActions from '../actions/fraud-check-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {FraudCheckControllerService} from '../../api-services/fraud-check-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class FraudCheckControllerEffects {

  /**
   *  FraudCheck Brief
   */
  fraudCheckBrief$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadFraudCheckBrief),
    switchMap((action) => this.fraudCheckControllerService.setFraudCheckBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'fraudCheckBrief');
          return this.notificationUtil.successCheck('fraudCheckBrief', obj, fraudCheckControllerActions.loadFraudCheckBriefSuccess, 'loadFraudCheckBriefFailure', 'loadFraudCheckBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  FraudCheck ComboData
   */
  fraudCheckComboData$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadFraudCheckComboData),
    switchMap((action) => this.fraudCheckControllerService.setFraudCheckComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'fraudCheckComboData');
          return this.notificationUtil.successCheck('fraudCheckComboData', obj, fraudCheckControllerActions.loadFraudCheckComboDataSuccess, 'loadFraudCheckComboDataFailure', 'loadFraudCheckComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  ReviewApproved Brief
   */
  reviewApprovedBrief$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadReviewApprovedBrief),
    switchMap((action) => this.fraudCheckControllerService.setReviewApprovedBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'reviewApprovedBrief');
          return this.notificationUtil.successCheck('reviewApprovedBrief', obj, fraudCheckControllerActions.loadReviewApprovedBriefSuccess, 'loadReviewApprovedBriefFailure', 'loadReviewApprovedBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ReviewApproved ComboData
   */
  reviewApprovedComboData$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadReviewApprovedComboData),
    switchMap((action) => this.fraudCheckControllerService.setReviewApprovedComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'reviewApprovedComboData');
          return this.notificationUtil.successCheck('reviewApprovedComboData', obj, fraudCheckControllerActions.loadReviewApprovedComboDataSuccess, 'loadReviewApprovedComboDataFailure', 'loadReviewApprovedComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  FraudCheckApproved Brief
   */
  fraudCheckApprovedBrief$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadFraudCheckApprovedBrief),
    switchMap((action) => this.fraudCheckControllerService.setFraudCheckApprovedBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'fraudCheckApprovedBrief');
          return this.notificationUtil.successCheck('fraudCheckApprovedBrief', obj, fraudCheckControllerActions.loadFraudCheckApprovedBriefSuccess, 'loadFraudCheckApprovedBriefFailure', 'loadFraudCheckApprovedBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  InvestigationApproval ComboData
   */
  investigationApprovalComboData$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadInvestigationApprovalComboData),
    switchMap((action) => this.fraudCheckControllerService.setInvestigationApprovalComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'investigationApprovalComboData');
          return this.notificationUtil.successCheck('investigationApprovalComboData', obj, fraudCheckControllerActions.loadInvestigationApprovalComboDataSuccess, 'loadInvestigationApprovalComboDataFailure', 'loadInvestigationApprovalComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  InvestigationApproval Brief
   */
  investigationApprovalBrief$ = createEffect(() => this.actions$.pipe(
    ofType(fraudCheckControllerActions.loadInvestigationApprovalBrief),
    switchMap((action) => this.fraudCheckControllerService.setInvestigationApprovalSubComponentBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'investigationApprovalBrief');
          return this.notificationUtil.successCheck('investigationApprovalBrief', obj, fraudCheckControllerActions.loadInvestigationApprovalBriefSuccess, 'loadInvestigationApprovalBriefFailure', 'loadInvestigationApprovalBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private fraudCheckControllerService: FraudCheckControllerService, private notificationUtil: NotificationUtil) {
  }
}
