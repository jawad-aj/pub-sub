import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as workBasketActions from '../actions/workBasket.actions';
import {WorkBasketService} from '../../api-services/work-basket.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {WebsocketHandlerService} from '../../../business-layer/services/WebsocketHandler.service';
import {FooterStatusService} from '../../../business-layer/services/footerStatus.service';

@Injectable()
export class WorkBasketEffects {

  /***
   *  RetrieveClaim Effect
   */
  retrieveClaim$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadClaimAccidentSummary),
    switchMap((action) => this.workBasketService.retrieveClaimCmsh5(action.data)
      .pipe(map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimAccidentSummary');
          return this.notificationUtil.successCheck('claimAccidentSummary', obj, workBasketActions.loadClaimAccidentSummarySuccess, 'Claim can not be retrieved.', 'loadClaimAccidentSummarySuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /***
   *  ImplicitRetrieveClaim Effect
   */
  implicitRetrieveClaim$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadImplicitClaimAccidentSummary),
    switchMap((action) => this.workBasketService.retrieveClaimCmsh5(action.data)
      .pipe(map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimAccidentSummary');
          return this.notificationUtil.successCheck('claimAccidentSummary', obj, workBasketActions.loadImplicitClaimAccidentSummarySuccess, 'Claim can not be retrieved.', 'loadImplicitClaimAccidentSummarySuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /***
   *  Assign Claim Effect
   */
  assignClaim$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadAssignClaim),
    switchMap((action) => this.workBasketService.assignClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(response, 'loadAssignClaimSuccess');
          }
          return this.notificationUtil.voidStringServices(workBasketActions.loadAssignClaimSuccess, 'loadAssignClaimSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message}))
      ))
  ));

  /***
   *  Re-Assign Claim Effect
   */
  reAssignClaim$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadReAssignClaim),
    switchMap((action) => this.workBasketService.assignClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(response, 'loadReAssignClaimSuccess');
          }
          return this.notificationUtil.voidStringServices(workBasketActions.loadReAssignClaimSuccess, 'loadReAssignClaimSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message}))
      ))
  ));
  /***
   *  Take Control Claim Effect
   */
  takeControlClaim$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadTakeControlClaim),
    switchMap((action) => this.workBasketService.assignClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(response, 'loadTakeControlClaimSuccess');
          }
          return this.notificationUtil.voidStringServices(workBasketActions.loadTakeControlClaimSuccess, 'loadTakeControlClaimSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message}))
      ))
  ));
  /***
   *  ClaimWQSummary Effects
   */
  bpcClaimWQSummary$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadBPCClaimWQSummary),
    switchMap((action) => this.workBasketService.getClaimWQSummaryCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimWQSummary');
          return this.notificationUtil.successCheck('claimWQSummary', obj, workBasketActions.loadBPCClaimWQSummarySuccess, 'WorkQueue Summary can not be retrieved.', 'loadBPCClaimWQSummarySuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  clClaimWQSummary$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadCLClaimWQSummary),
    switchMap((action) => this.workBasketService.getClaimWQSummaryCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimWQSummary');
          return this.notificationUtil.successCheck('claimWQSummary', obj, workBasketActions.loadCLClaimWQSummarySuccess, 'WorkQueue Summary can not be retrieved.', 'loadCLClaimWQSummarySuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  searchClaimWQSummary$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketActions.loadSearchClaimWQSummary),
    switchMap((action) => this.workBasketService.getClaimWQSummaryCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimWQSummary');
          return this.notificationUtil.successCheck('claimWQSummary', obj, workBasketActions.loadSearchClaimWQSummarySuccess, 'Search Claim can not be retrieved.', 'loadSearchClaimWQSummarySuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private workBasketService: WorkBasketService, private notificationUtil: NotificationUtil,
              private websocketHandlerService: WebsocketHandlerService, private footerService: FooterStatusService) {
  }

}
