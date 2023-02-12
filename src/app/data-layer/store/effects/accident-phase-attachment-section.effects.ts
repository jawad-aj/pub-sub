import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as attachmentSectionControllerActions from '../actions/accident-phase-attachment-section.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {AttachmentSectionControllerService} from '../../api-services/attachment-section-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class AccidentPhaseAttachmentSectionEffects {
  /**
   *  Attachment Brief
   */
  attachmentDialogBriefEffect$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogBrief),
    switchMap((action) => this.attachmentSectionControllerService.setAccidentPhaseAttachmentDialogBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'attachmentBrief');
          return this.notificationUtil.successCheck('attachmentBrief', obj, attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogBriefSuccess, 'loadAccidentPhaseAttachmentDialogBriefFailure', 'loadAccidentPhaseAttachmentDialogBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Attachment ComboData
   */
  attachmentDialogComboDataEffect$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogComboData),
    switchMap((action) => this.attachmentSectionControllerService.setAccidentPhaseAttachmentDialogComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'attachmentComboData');
          return this.notificationUtil.successCheck('attachmentComboData', obj, attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogComboDataSuccess, 'loadAccidentPhaseAttachmentDialogComboDataFailure', 'loadAccidentPhaseAttachmentDialogComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Attachment SelectedRecord
   */
  attachmentDialogSelectedRecordEffect$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogSelectedRecord),
    switchMap((action) => this.attachmentSectionControllerService.setSelectedRow(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'attachmentSelectedRecord');
          return this.notificationUtil.successCheck('attachmentSelectedRecord', obj, attachmentSectionControllerActions.loadAccidentPhaseAttachmentDialogSelectedRecordSuccess, 'loadAccidentPhaseAttachmentDialogSelectedRecordFailure', 'loadAccidentPhaseAttachmentDialogSelectedRecordSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private attachmentSectionControllerService: AttachmentSectionControllerService, private notificationUtil: NotificationUtil) {
  }
}
