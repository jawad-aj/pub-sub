import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as claimSectionControllerActions from '../actions/accident-phase-claim-section.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {ClaimSectionControllerService} from '../../api-services/claim-section-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class AccidentPhaseClaimSectionEffects {

  /**
   *  accidentAppClaimSectionComboData$
   */
  accidentAppClaimSectionComboData$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimSectionComboData),
    switchMap((action) => this.claimSectionControllerService.setAccidentPhaseClaimSectionComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimSectionComboData');
          return this.notificationUtil.successCheck('claimSectionComboData', obj, claimSectionControllerActions.loadAccidentPhaseClaimSectionComboDataSuccess, 'loadAccidentPhaseClaimSectionComboDataFailure', 'loadAccidentPhaseClaimSectionComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimSmart Brief
   */
  claimBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimBrief),
    switchMap((action) => this.claimSectionControllerService.setClaimBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimBrief');
          return this.notificationUtil.successCheck('claimBrief', obj, claimSectionControllerActions.loadAccidentPhaseClaimBriefSuccess, 'loadAccidentPhaseClaimBriefFailure', 'loadAccidentPhaseClaimBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimSectionSmart Brief
   */
  claimSectionBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimSectionBrief),
    switchMap((action) => this.claimSectionControllerService.setClaimSectionBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimSectionBrief');
          return this.notificationUtil.successCheck('claimSectionBrief', obj, claimSectionControllerActions.loadAccidentPhaseClaimSectionBriefSuccess, 'loadAccidentPhaseClaimSectionBriefFailure', 'loadAccidentPhaseClaimSectionBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  ClaimServiceProvider Brief
   */
  claimServiceProviderBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimServiceProviderBrief),
    switchMap((action) => this.claimSectionControllerService.setClaimServiceProviderBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimServiceProviderBrief');
          return this.notificationUtil.successCheck('claimServiceProviderBrief', obj, claimSectionControllerActions.loadAccidentPhaseClaimServiceProviderBriefSuccess, 'loadAccidentPhaseClaimServiceProviderBriefFailure', 'loadAccidentPhaseClaimServiceProviderBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Claim Brief
   */
  claimantBrief$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimantBrief),
    switchMap((action) => this.claimSectionControllerService.setClaimantBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimantBrief');
          return this.notificationUtil.successCheck('claimantBrief', obj, claimSectionControllerActions.loadAccidentPhaseClaimantBriefSuccess, 'loadAccidentPhaseClaimantBriefFailure', 'loadAccidentPhaseClaimantBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Claim ComboData
   */
  claimComboData$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimComboData),
    switchMap((action) => this.claimSectionControllerService.setClaimComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimComboData');
          return this.notificationUtil.successCheck('claimComboData', obj, claimSectionControllerActions.loadAccidentPhaseClaimComboDataSuccess, 'loadAccidentPhaseClaimComboDataFailure', 'loadAccidentPhaseClaimComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Claim SelectedRecord
   */
  claimSelectedRecord$ = createEffect(() => this.actions$.pipe(
    ofType(claimSectionControllerActions.loadAccidentPhaseClaimSelectedRecord),
    switchMap((action) => this.claimSectionControllerService.setSelectedRow(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimSelectedRecord');
          return this.notificationUtil.successCheck('claimSelectedRecord', obj, claimSectionControllerActions.loadAccidentPhaseClaimSelectedRecordSuccess, 'loadAccidentPhaseClaimSelectedRecordFailure', 'loadAccidentPhaseClaimSelectedRecordSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private claimSectionControllerService: ClaimSectionControllerService, private notificationUtil: NotificationUtil) {
  }
}
