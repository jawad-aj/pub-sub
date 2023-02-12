import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as workBasketControllerActions from "../actions/workBasketController.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {WorkBasketControllerService} from "../../api-services/work-basket-controller.service";


@Injectable()
export class WorkBasketControllerEffects {

  /**
   *  WorkBasket ComboData
   */
  workBasketComboData$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketControllerActions.loadWorkBasketComboData),
    switchMap((action) => this.workBasketControllerService.setWorkBasketComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'workBasketComboData');
          return this.notificationUtil.successCheck('workBasketComboData', obj, workBasketControllerActions.loadWorkBasketComboDataSuccess, 'loadWorkBasketComboDataFailure', 'loadWorkBasketComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  WorkBasket Brief
   */
  workBasketBrief$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketControllerActions.loadWorkBasketBrief),
    switchMap((action) => this.workBasketControllerService.setWorkBasketBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'workBasketBrief');
          return this.notificationUtil.successCheck('workBasketBrief', obj, workBasketControllerActions.loadWorkBasketBriefSuccess, 'loadWorkBasketBriefFailure', 'loadWorkBasketBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Assign ComboData
   */
  assignComboData$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketControllerActions.loadAssignComboData),
    switchMap((action) => this.workBasketControllerService.setAssignComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'assignComboData');
          return this.notificationUtil.successCheck('assignComboData', obj, workBasketControllerActions.loadAssignComboDataSuccess, 'loadAssignComboDataFailure', 'loadAssignComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Assign Brief
   */
  assignBrief$ = createEffect(() => this.actions$.pipe(
    ofType(workBasketControllerActions.loadAssignBrief),
    switchMap((action) => this.workBasketControllerService.setAssignBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'assignBrief');
          return this.notificationUtil.successCheck('assignBrief', obj, workBasketControllerActions.loadAssignBriefSuccess, 'loadAssignBriefFailure', 'loadAssignBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private workBasketControllerService: WorkBasketControllerService, private notificationUtil: NotificationUtil) {
  }

}
