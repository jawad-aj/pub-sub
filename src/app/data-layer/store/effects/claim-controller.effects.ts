import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as claimControllerActions from '../actions/claim-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {ClaimControllerService} from '../../api-services/claim-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class ClaimControllerEffects {

  /**
   *  Claim Brief
   */
  claimBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimControllerActions.loadClaimBrief),
    switchMap((action) => this.claimControllerService.setClaimBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimBrief');
          return this.notificationUtil.successCheck('claimBrief', obj, claimControllerActions.loadClaimBriefSuccess, 'loadClaimBriefFailure', 'loadClaimBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Claimant Brief
   */
  claimantBriefEffect$ = createEffect(() => this.actions$.pipe(
    ofType(claimControllerActions.loadClaimantBrief),
    switchMap((action) => this.claimControllerService.setClaimantBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimantBrief');
          return this.notificationUtil.successCheck('claimantBrief', obj, claimControllerActions.loadClaimantBriefSuccess, 'loadClaimantBriefFailure', 'loadClaimantBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimServiceProvider Brief
   */
  claimServiceProviderBriefEffect$ = createEffect(() => this.actions$.pipe(
    ofType(claimControllerActions.loadClaimServiceProviderBrief),
    switchMap((action) => this.claimControllerService.setClaimServiceProviderBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimServiceProviderBrief');
          return this.notificationUtil.successCheck('claimServiceProviderBrief', obj, claimControllerActions.loadClaimServiceProviderBriefSuccess, 'loadClaimServiceProviderBriefFailure', 'loadClaimServiceProviderBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Claim ComboData
   */
  claimComboData$ = createEffect(() => this.actions$.pipe(
    ofType(claimControllerActions.loadClaimComboData),
    switchMap((action) => this.claimControllerService.setClaimComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimComboData');
          return this.notificationUtil.successCheck('claimComboData', obj, claimControllerActions.loadClaimComboDataSuccess, 'loadClaimComboDataFailure', 'loadClaimComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private claimControllerService: ClaimControllerService, private notificationUtil: NotificationUtil) {
  }
}
