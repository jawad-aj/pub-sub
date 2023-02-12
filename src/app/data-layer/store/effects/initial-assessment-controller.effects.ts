import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as initialAssessmentControllerActions from '../actions/initial-assessment-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {InitialAssessmentControllerService} from '../../api-services/initial-assessment-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class InitialAssessmentControllerEffects {

  /**
   *  InitialAssessment Brief
   */
  initialAssessmentBrief$ = createEffect(() => this.actions$.pipe(
    ofType(initialAssessmentControllerActions.loadInitialAssessmentBrief),
    switchMap((action) => this.initialAssessmentControllerService.setInitialAssessmentBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'initialAssessmentBrief');
          return this.notificationUtil.successCheck('initialAssessmentBrief', obj, initialAssessmentControllerActions.loadInitialAssessmentBriefSuccess, 'loadInitialAssessmentBriefFailure', 'loadInitialAssessmentBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  InitialAssessment ComboData
   */
  initialAssessmentComboData$ = createEffect(() => this.actions$.pipe(
    ofType(initialAssessmentControllerActions.loadInitialAssessmentComboData),
    switchMap((action) => this.initialAssessmentControllerService.setInitialAssessmentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'initialAssessmentComboData');
          return this.notificationUtil.successCheck('initialAssessmentComboData', obj, initialAssessmentControllerActions.loadInitialAssessmentComboDataSuccess, 'loadInitialAssessmentComboDataFailure', 'loadInitialAssessmentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private initialAssessmentControllerService: InitialAssessmentControllerService, private notificationUtil: NotificationUtil) {
  }
}
