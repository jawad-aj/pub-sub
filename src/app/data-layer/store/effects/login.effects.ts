import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as loginAction from '../actions/login.actions';
import {loadLoginsSuccess} from '../actions/login.actions';
import * as logoutAction from '../actions/logout.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {LoginService} from "../../api-services/login.service";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {WebsocketUtil} from "../../../business-layer/services/WebsocketUtil";
import {loadChangePasswordsSuccess} from '../actions/changePassword.actions';
import {DialogService} from '../../../business-layer/services/Dialog.service';
@Injectable()

export class LoginEffects {
  /*░░░░░░░░░░░░░░░░░░░░░░Login Effect░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction.loadLogins),
      switchMap((action) => this.loginService.getLoginData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'loginData');
            return this.notificationUtil.successCheck('loginData', obj, loadLoginsSuccess, 'loadLoginsFailure', 'loadLoginsSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction.loadLogout),
      switchMap((action) => this.loginService.logout(action.data)
        .pipe(
          map((response) => {
            this.websocket.disconnect();
            return this.notificationUtil.voidStringServices(logoutAction.loadLogoutSuccess,'loadLogoutSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );
  implicitLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction.loadIsActive),
      switchMap((action) => this.loginService.isActive(action.data)
        .pipe(
          map((response) => {
            return this.notificationUtil.voidStringServices(loginAction.loadIsActiveSuccess,'loadIsActiveSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );
  forgotPassword$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction.loadForgotPasswords),
    switchMap((action) => this.loginService.forgotPassword(action.data)
      .pipe(
        map((response) => {
          this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', response);
          return this.notificationUtil.stringStatusCheck(response,loginAction.loadForgotPasswordsSuccess, 'loadForgotPasswordFailure','loadForgotPasswordsSuccess',);
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
//The password has been reset, Please check your email.
  constructor(private  actions$: Actions, private loginService: LoginService,private dialogService: DialogService,
              private websocket: WebsocketUtil, private notificationUtil: NotificationUtil) {
  }
}
