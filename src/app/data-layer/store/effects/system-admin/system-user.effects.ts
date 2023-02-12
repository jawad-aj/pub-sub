import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as systemUserActions from '../../actions/system-admin/system-user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {loadServiceFailure} from '../../actions/service-failure.actions';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {NotificationUtil} from '../../../api-services/util/NotificationUtil';
import {SystemUserService} from '../../../api-services/system-admin/system-user.service';


@Injectable()
export class SystemUserEffects {

  /**
   *  Get System User Types
   */
  getSystemUserTypes$ = createEffect(() => this.actions$.pipe(
    ofType(systemUserActions.loadSystemUserTypes),
    switchMap((action) => this.systemUserService.getSystemUserTypes(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'systemUserTypes');
          return this.notificationUtil.successCheck('systemUserTypes', obj, systemUserActions.loadSystemUserTypesSuccess, 'System Users types can not be retrieved.', 'loadSystemUserTypesSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Get System Users
   */
  getSystemUsers$ = createEffect(() => this.actions$.pipe(
    ofType(systemUserActions.loadSystemUsers),
    switchMap((action) => this.systemUserService.getSystemUsers(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'systemUsers');
          return this.notificationUtil.successCheck('systemUsers', obj, systemUserActions.loadSystemUsersSuccess, 'System Users  can not be retrieved.', 'loadSystemUsersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  /**
   *  Persist System Users
   */
  persistSystemUsers$ = createEffect(() => this.actions$.pipe(
    ofType(systemUserActions.loadPersistSystemUsers),
    switchMap((action) => this.systemUserService.persistSystemUsers(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'systemUsers');
          return this.notificationUtil.successCheck('systemUsers', obj, systemUserActions.loadPersistSystemUsersSuccess, 'System Users  can not be updated.', 'loadPersistSystemUsersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );



  /**
   *  Retrieve System Users
   */
  retrieveSystemUsers$ = createEffect(() => this.actions$.pipe(
    ofType(systemUserActions.loadRetrieveSystemUsers),
    switchMap((action) => this.systemUserService.retrieveSystemUsers(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'systemUsers');
          return this.notificationUtil.successCheck('systemUsers', obj, systemUserActions.loadRetrieveSystemUsersSuccess, 'System Users  can not be retrieved.', 'loadRetrieveSystemUsersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  /**
   *  Send System User Password
   */
  sendSystemUserPassword$ = createEffect(() => this.actions$.pipe(
    ofType(systemUserActions.loadSendSystemUserPassword),
    switchMap((action) => this.systemUserService.sendSystemUserPassword(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'systemUsers');
          return this.notificationUtil.sendPasswordSuccessCheck('systemUsers', obj, action.data.data.paramStr, systemUserActions.loadSendSystemUserPasswordSuccess, 'System Users Password can not be sent.', 'loadSendSystemUserPasswordSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private systemUserService: SystemUserService, private notificationUtil: NotificationUtil) {
  }
}
