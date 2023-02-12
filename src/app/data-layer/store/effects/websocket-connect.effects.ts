import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as websocketConnectAction from '../actions/websocket-connect.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {WebsocketConnectService} from '../../../business-layer/services/websocket-connect.service';
import {NotificationUtil} from "../../api-services/util/NotificationUtil";


@Injectable()
export class WebsocketConnectEffects {
  constructor(private actions$: Actions, private websocketConnectService: WebsocketConnectService,
              private notificationUtil: NotificationUtil) {
  }

  websocketConnect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketConnectAction.loadWebsocketConnect),
      switchMap((action) => this.websocketConnectService.websocketConnectService(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketConnect');
            return this.notificationUtil.successCheck('websocketConnect', obj, websocketConnectAction.loadWebsocketConnectSuccess, 'loadWebsocketConnectFailure', 'loadWebsocketConnectSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  websocketAuthentication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketConnectAction.loadWebsocketAuthentication),
      switchMap((action) => this.websocketConnectService.websocketAuthentication(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketAuthentication');
            return this.notificationUtil.successCheck('websocketAuthentication', obj, websocketConnectAction.loadWebsocketAuthenticationSuccess, 'loadWebsocketAuthenticationFailure', 'loadWebsocketAuthenticationSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  websocketIdentity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketConnectAction.loadWebsocketIdentity),
      switchMap((action) => this.websocketConnectService.websocketIdentity()
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketIdentity');
            return this.notificationUtil.successCheck('websocketIdentity', obj, websocketConnectAction.loadWebsocketIdentitySuccess, 'loadWebsocketIdentityFailure', 'loadWebsocketIdentitySuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

}
