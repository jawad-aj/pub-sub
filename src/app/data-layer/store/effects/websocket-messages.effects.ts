import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as websocketMessageAction from '../actions/websocket-messages.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {WebsocketMessagesService} from '../../../business-layer/services/WebsocketMessages.service';
import {NotificationUtil} from "../../api-services/util/NotificationUtil";


@Injectable()
export class WebsocketMessagesEffects {

  constructor(private actions$: Actions, private websocketMessagesService: WebsocketMessagesService,
              private notificationUtil: NotificationUtil) {
  }

  websocketTakeControl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketMessageAction.loadWebsocketTakeControl),
      switchMap((action) => this.websocketMessagesService.websocketMessagesHandler(action.data, 'takeControl')
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketTakeControl');
            return this.notificationUtil.successCheck('websocketTakeControl', obj, websocketMessageAction.loadWebsocketTakeControlSuccess, 'loadWebsocketTakeControlFailure', 'loadWebsocketTakeControlSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  websocketReAssign$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketMessageAction.loadWebsocketReAssign),
      switchMap((action) => this.websocketMessagesService.websocketMessagesHandler(action.data, 'reAssign')
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketReAssign');
            return this.notificationUtil.successCheck('websocketReAssign', obj, websocketMessageAction.loadWebsocketReAssignSuccess, 'loadWebsocketReAssignFailure', 'loadWebsocketReAssignSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  websocketAssign$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketMessageAction.loadWebsocketAssign),
      switchMap((action) => this.websocketMessagesService.websocketMessagesHandler(action.data, 'assign')
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketAssign');
            return this.notificationUtil.successCheck('websocketAssign', obj, websocketMessageAction.loadWebsocketAssignSuccess, 'loadWebsocketAssignFailure', 'loadWebsocketAssignSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  websocketSaveClaim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(websocketMessageAction.loadWebsocketSaveClaim),
      switchMap((action) => this.websocketMessagesService.websocketMessagesHandler(action.data, 'saveClaim')
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'websocketSaveClaim');
            return this.notificationUtil.successCheck('websocketSaveClaim', obj, websocketMessageAction.loadWebsocketSaveClaimSuccess, 'loadWebsocketSaveClaimFailure', 'loadWebsocketSaveClaimSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

}
