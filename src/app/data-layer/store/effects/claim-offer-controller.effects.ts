import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as claimOfferControllerActions from '../actions/claim-offer-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {ClaimOfferControllerService} from '../../api-services/claim-offer-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class ClaimOfferControllerEffects {
  /**
   *  ClaimOffer Brief
   */
  claimOfferBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimOfferControllerActions.loadClaimOfferBrief),
    switchMap((action) => this.claimOfferControllerService.setClaimOfferBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimOfferBrief');
          return this.notificationUtil.successCheck('claimOfferBrief', obj, claimOfferControllerActions.loadClaimOfferBriefSuccess, 'loadClaimOfferBriefFailure', 'loadClaimOfferBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimOffer ComboData
   */
  claimOfferComboData$ = createEffect(() => this.actions$.pipe(
    ofType(claimOfferControllerActions.loadClaimOfferComboData),
    switchMap((action) => this.claimOfferControllerService.setClaimOfferComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimOfferComboData');
          return this.notificationUtil.successCheck('claimOfferComboData', obj, claimOfferControllerActions.loadClaimOfferComboDataSuccess, 'loadClaimOfferComboDataFailure', 'loadClaimOfferComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  claimOfferClaimAuthorizationClaimAuthorization Brief
   */
  claimOfferClaimAuthorizationClaimAuthorizationBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimOfferControllerActions.loadClaimOfferClaimAuthorizationBrief),
    switchMap((action) => this.claimOfferControllerService.setClaimOfferClaimAuthorizationBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimOfferClaimAuthorizationBrief');
          return this.notificationUtil.successCheck('claimOfferClaimAuthorizationBrief', obj, claimOfferControllerActions.loadClaimOfferClaimAuthorizationBriefSuccess, 'loadClaimOfferClaimAuthorizationClaimAuthorizationBriefFailure', 'loadClaimOfferClaimAuthorizationBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimOfferApproved Brief
   */
  claimOfferApprovedBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimOfferControllerActions.loadClaimOfferApprovedBrief),
    switchMap((action) => this.claimOfferControllerService.setClaimOfferApprovedBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimOfferApprovedBrief');
          return this.notificationUtil.successCheck('claimOfferApprovedBrief', obj, claimOfferControllerActions.loadClaimOfferApprovedBriefSuccess, 'loadClaimOfferApprovedBriefFailure', 'loadClaimOfferApprovedBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private claimOfferControllerService: ClaimOfferControllerService, private notificationUtil: NotificationUtil) {
  }
}
