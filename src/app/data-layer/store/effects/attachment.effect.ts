import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as attachmentActions from '../actions/attachment.actions';
import {AttachmentService} from '../../api-services/attachment.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class AttachmentEffect {
  uploadSupportingDocuments$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentActions.loadUploadNewDocument),
    switchMap((action) => this.attachmentService.uploadSupportingDocuments(action.data)
      .pipe(
        map((response) => {

          let obj = this.notificationUtil.notificationHandler(response, 'upload');
          return this.notificationUtil.successCheck('upload', obj, attachmentActions.loadUploadNewDocumentSuccess, 'Attachment can not be added.', 'loadUploadNewDocumentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  uploadAccidentSupportingDocuments$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentActions.loadUploadAccidentNewDocument),
    switchMap((action) => this.attachmentService.uploadSupportingDocuments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'upload');
          return this.notificationUtil.successCheck('upload', obj, attachmentActions.loadUploadAccidentNewDocumentSuccess, 'Attachment can not be added.', 'loadUploadAccidentNewDocumentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  downloadSupportingDocuments$ = createEffect(() => this.actions$.pipe(
    ofType(attachmentActions.loadDownloadSupportingDocuments),
    switchMap((action) => this.attachmentService.downloadSupportingDocuments(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'downloadSupportingDocument');
          return this.notificationUtil.successCheck('downloadSupportingDocument', obj, attachmentActions.loadDownloadSupportingDocumentsSuccess, 'Attachment can not be previewed.', 'loadDownloadSupportingDocumentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private attachmentService: AttachmentService, private notificationUtil: NotificationUtil) {
  }

}
