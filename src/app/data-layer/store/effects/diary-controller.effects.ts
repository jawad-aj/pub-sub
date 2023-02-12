import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as diaryControllerActions from '../actions/diary-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {DiaryControllerService} from '../../api-services/diary-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class DiaryControllerEffects {

  /**
   *  Diary Brief
   */
  diaryBrief$ = createEffect(() => this.actions$.pipe(
    ofType(diaryControllerActions.loadDiaryBrief),
    switchMap((action) => this.diaryControllerService.setDiaryBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'diaryBrief');
          return this.notificationUtil.successCheck('diaryBrief', obj, diaryControllerActions.loadDiaryBriefSuccess, 'loadDiaryBriefFailure', 'loadDiaryBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  constructor(private  actions$: Actions, private diaryControllerService: DiaryControllerService, private notificationUtil: NotificationUtil) {
  }
}
