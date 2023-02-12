import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as accidentControllerActions from "../actions/accident-controller.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {AccidentControllerService} from "../../api-services/accident-controller.service";


@Injectable()
export class AccidentControllerEffects {

  /**
   *  Accident Brief
   */
  accidentBrief$ = createEffect(() => this.actions$.pipe(
    ofType(accidentControllerActions.loadAccidentBrief),
    switchMap((action) => this.accidentControllerService.setAccidentBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accidentBrief');
          return this.notificationUtil.successCheck('accidentBrief', obj, accidentControllerActions.loadAccidentBriefSuccess, 'loadAccidentBriefFailure', 'loadAccidentBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Accident ComboData
   */
  accidentComboData$ = createEffect(() => this.actions$.pipe(
    ofType(accidentControllerActions.loadAccidentComboData),
    switchMap((action) => this.accidentControllerService.setAccidentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accidentComboData');
          return this.notificationUtil.successCheck('accidentComboData', obj, accidentControllerActions.loadAccidentComboDataSuccess, 'loadAccidentComboDataFailure', 'loadAccidentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   * accidentAppAccidentBrief$
   */
  accidentAppAccidentBrief$ = createEffect(() => this.actions$.pipe(
    ofType(accidentControllerActions.loadAccidentApplicationAccidentBrief),
    switchMap((action) => this.accidentControllerService.setAccidentApplicationAccidentBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accidentBrief');
          return this.notificationUtil.successCheck('accidentBrief', obj, accidentControllerActions.loadAccidentApplicationAccidentBriefSuccess, 'loadAccidentApplicationAccidentBriefFailure', 'loadAccidentApplicationAccidentBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  accidentAppComboData$
   */
  accidentAppComboData$ = createEffect(() => this.actions$.pipe(
    ofType(accidentControllerActions.loadAccidentApplicationAccidentComboData),
    switchMap((action) => this.accidentControllerService.setAccidentApplicationAccidentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accidentComboData');
          return this.notificationUtil.successCheck('accidentComboData', obj, accidentControllerActions.loadAccidentApplicationAccidentComboDataSuccess, 'loadAccidentApplicationAccidentComboDataFailure', 'loadAccidentApplicationAccidentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private accidentControllerService: AccidentControllerService, private notificationUtil: NotificationUtil) {
  }

}
