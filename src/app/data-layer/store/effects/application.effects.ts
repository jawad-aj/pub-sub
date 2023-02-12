import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as applicationActions from '../actions/application.actions';
import * as applicationAction from '../actions/application.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {ApplicationService} from '../../api-services/application.service';
import {DialogService} from '../../../business-layer/services/Dialog.service';
import {WebsocketHandlerService} from '../../../business-layer/services/WebsocketHandler.service';
import {FooterStatusService} from '../../../business-layer/services/footerStatus.service';

@Injectable()
export class ApplicationEffects {
  /**
   *  ApplicationHeaderInfo
   */
  applicationHeaderInfo$ = createEffect(() => this.actions$.pipe(
    ofType(applicationActions.loadApplicationHeaderInfo),
    switchMap((action) => this.applicationService.applicationHeaderInfo(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'applicationHeaderInfo');
          return this.notificationUtil.successCheck('applicationHeaderInfo', obj, applicationActions.loadApplicationHeaderInfoSuccess, 'loadApplicationHeaderInfoFailure', 'loadApplicationHeaderInfoSuccess');
        }),
        catchError((err: HttpErrorResponse) =>
          of({type: loadServiceFailure.type, error: err.message})
        ))
    ))
  );
  /**
   *  Non Structural Application Change
   */
  application$ = createEffect(() => this.actions$.pipe(
    ofType(applicationActions.loadNonStructuralApplicationChange),
    switchMap((action) => this.applicationService.nonStructuralApplicationChange(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, applicationActions.loadNonStructuralApplicationChangeSuccess, 'loadNonStructuralApplicationChangeFailure', 'loadNonStructuralApplicationChangeSuccess');
        }),
        catchError((err: HttpErrorResponse) =>
          of({type: loadServiceFailure.type, error: err.message})
        ))
    ))
  );
  /**
   *  Non Structural Application Change
   */
  accidentApplication$ = createEffect(() => this.actions$.pipe(
    ofType(applicationActions.loadNonStructuralAccidentApplicationChange),
    switchMap((action) => this.applicationService.nonStructuralAccidentApplicationChange(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, applicationActions.loadNonStructuralAccidentApplicationChangeSuccess, 'loadNonStructuralAccidentApplicationChangeFailure', 'loadNonStructuralAccidentApplicationChangeSuccess');
        }),
        catchError((err: HttpErrorResponse) =>
          of({type: loadServiceFailure.type, error: err.message})
        ))
    ))
  );

  /**
   * updateClaims
   */
  updateClaims$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadSaveClaimApplication),
    switchMap((action) => this.applicationService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, applicationAction.loadSaveClaimApplicationSuccess, 'Claim can not be updated.', 'loadSaveClaimApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'SaveClaimApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * implicitUpdateClaims
   */
  implicitUpdateClaims$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadImplicitSaveClaimApplication),
    switchMap((action) => this.applicationService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, applicationAction.loadImplicitSaveClaimApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimApplicationSuccess');
            if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
              this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimApplicationSuccess');
            }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * newAccident
   */
  newAccident$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadNewAccident),
    switchMap((action) => this.applicationService.newAccident()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, applicationAction.loadNewAccidentSuccess, 'loadNewAccidentFailure', 'loadNewAccidentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * updateAccident
   */
  updateAccident$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadUpdateAccident),
    switchMap((action) => this.applicationService.updateAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, applicationAction.loadUpdateAccidentSuccess, 'Accident can not be updated.', 'loadUpdateAccidentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * submitAccident$
   */
  submitAccident$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadSubmitAccident),
    switchMap((action) => this.applicationService.updateAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, applicationAction.loadSubmitAccidentSuccess, 'Accident can not be submitted.', 'loadSubmitAccidentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * persistCmsh5
   */
  persistCmsh5$ = createEffect(() => this.actions$.pipe(
    ofType(applicationAction.loadPersistAccident),
    switchMap((action) => this.applicationService.persistCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          let temp = this.notificationUtil.successCheck('accident', obj, applicationAction.loadPersistAccidentSuccess, 'Accident can not be saved.', 'loadPersistAccidentSuccess');
          this.dialogService.persistAccidentHeaderInfo(temp.data);
          this.dialogService.dispatchEvent(temp.data, 'loadAlertWithDynamicMessage', 'accident', 'accidentNumber', 'Application has been saved with Accident Number: ');
          return temp;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions,
              private applicationService: ApplicationService,
              private dialogService: DialogService,
              private notificationUtil: NotificationUtil,
              private websocketHandlerService: WebsocketHandlerService,
              private footerService: FooterStatusService) {
  }

}
