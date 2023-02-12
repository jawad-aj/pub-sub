import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import * as headerControllerAction from '../actions/header-controller.actions';
import {HeaderControllerService} from '../../api-services/header-controller.service';

@Injectable()
export class HeaderControllerEffects {

  /**
   * Header ComboData
   */
  headerController$ = createEffect(() =>
    this.actions$.pipe(
      ofType(headerControllerAction.loadHeaderComboData),
      switchMap((action) => this.headerControllerService.setHeaderComboData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'headerComboData');
            return this.notificationUtil.successCheck('headerComboData', obj, headerControllerAction.loadHeaderComboDataSuccess, 'loadHeaderComboDataFailure', 'loadHeaderComboDataSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );
  /**
   * Headers
   */
  headers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(headerControllerAction.loadHeaders),
      switchMap((action) => this.headerControllerService.getHeaderData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'headers');
            return this.notificationUtil.successCheck('headers', obj, headerControllerAction.loadHeadersSuccess, 'loadHeadersFailure', 'loadHeadersSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );


  constructor(private  actions$: Actions, private headerControllerService: HeaderControllerService, private notificationUtil: NotificationUtil) {
  }
}
