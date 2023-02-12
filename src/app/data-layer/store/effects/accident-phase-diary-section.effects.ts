import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as diarySectionControllerActions from '../actions/accident-phase-diary-section.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {DiarySectionControllerService} from '../../api-services/diary-section-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';



@Injectable()
export class AccidentPhaseDiarySectionEffects {

  /**
   *  Diary Brief
   */
  diaryBrief$ = createEffect(() => this.actions$.pipe(
    ofType(diarySectionControllerActions.loadAccidentPhaseDiaryBrief),
    switchMap((action) => this.diarySectionControllerService.setDiaryBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'diaryBrief');
          return this.notificationUtil.successCheck('diaryBrief', obj, diarySectionControllerActions.loadAccidentPhaseDiaryBriefSuccess, 'loadAccidentPhaseDiaryBriefFailure', 'loadAccidentPhaseDiaryBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Diary CommentsBrief
   */
  diaryCommentsBrief$ = createEffect(() => this.actions$.pipe(
    ofType(diarySectionControllerActions.loadAccidentPhaseDiaryCommentsBrief),
    switchMap((action) => this.diarySectionControllerService.setDiaryBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'diaryCommentsBrief');
          return this.notificationUtil.successCheck('diaryCommentsBrief', obj, diarySectionControllerActions.loadAccidentPhaseDiaryCommentsBriefSuccess, 'loadAccidentPhaseDiaryCommentsBriefFailure', 'loadAccidentPhaseDiaryCommentsBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Diary SelectedRecord
   */
  diarySelectedRecord$ = createEffect(() => this.actions$.pipe(
    ofType(diarySectionControllerActions.loadAccidentPhaseDiarySelectedRecord),
    switchMap((action) => this.diarySectionControllerService.setSelectedRow(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'diarySelectedRecord');
          return this.notificationUtil.successCheck('diarySelectedRecord', obj, diarySectionControllerActions.loadAccidentPhaseDiarySelectedRecordSuccess, 'loadAccidentPhaseDiarySelectedRecordFailure', 'loadAccidentPhaseDiarySelectedRecordSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  constructor(private  actions$: Actions, private diarySectionControllerService: DiarySectionControllerService, private notificationUtil: NotificationUtil) {
  }
}
