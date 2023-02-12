import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as attachmentControllerActions from '../actions/attachment-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {AttachmentControllerService} from '../../api-services/attachment-controller.service';


@Injectable()
export class AttachmentControllerEffects {

  /**
   *  Attachment Brief
   */
  attachmentBrief$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentControllerActions.loadAttachmentBrief),
    switchMap((action) => this.attachmentControllerService.setAttachmentBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'attachmentBrief');
          return this.notificationUtil.successCheck('attachmentBrief', obj, attachmentControllerActions.loadAttachmentBriefSuccess, 'loadAttachmentBriefFailure', 'loadAttachmentBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Attachment ComboData
   */
  attachmentComboData$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentControllerActions.loadAttachmentComboData),
    switchMap((action) => this.attachmentControllerService.setAttachmentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'attachmentComboData');
          return this.notificationUtil.successCheck('attachmentComboData', obj, attachmentControllerActions.loadAttachmentComboDataSuccess, 'loadAttachmentComboDataFailure', 'loadAttachmentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  AccidentPhaseAttachmentGridBrief
   */
  accidentPhaseAttachmentGridBrief$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentControllerActions.loadAccidentPhaseAttachmentGridBrief),
    switchMap((action) => this.attachmentControllerService.setAccidentPhaseAttachmentGridBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'brief');
          return this.notificationUtil.successCheck('brief', obj, attachmentControllerActions.loadAccidentPhaseAttachmentGridBriefSuccess, 'loadAccidentPhaseAttachmentGridBriefFailure', 'loadAccidentPhaseAttachmentGridBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  AccidentPhaseAttachmentGridComboData
   */
  accidentPhaseAttachmentGridComboDataEffect$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentControllerActions.loadAccidentPhaseAttachmentGridComboData),
    switchMap((action) => this.attachmentControllerService.setAccidentPhaseAttachmentGridComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'comboData');
          return this.notificationUtil.successCheck('comboData', obj, attachmentControllerActions.loadAccidentPhaseAttachmentGridComboDataSuccess, 'loadAccidentPhaseAttachmentGridComboDataFailure', 'loadAccidentPhaseAttachmentGridComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private attachmentControllerService: AttachmentControllerService, private notificationUtil: NotificationUtil) {
  }

}
