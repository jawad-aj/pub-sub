/**
 * Created by Jawad on 06/08/2020.
 */
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as remoteServiceAction from '../actions/remote-services.actions';
import {loadRemoteServicesSuccess, loadVersionSuccess} from '../actions/remote-services.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RemoteDataService} from "../../api-services/remote-data.service";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";


@Injectable()
export class RemoteServiceEffects {

  remoteService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(remoteServiceAction.loadRemoteServices),
      switchMap((action) => this.remoteDataService.getRemoteServiceData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'remoteServices');
            return this.notificationUtil.successCheck('remoteServices', obj, loadRemoteServicesSuccess, 'loadRemoteServicesFailure', 'loadRemoteServicesSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  version$ = createEffect(() =>
    this.actions$.pipe(
      ofType(remoteServiceAction.loadVersion),
      switchMap((action) => this.remoteDataService.getRemoteServiceData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'version');
            return this.notificationUtil.successCheck('version', obj, loadVersionSuccess, 'loadVersionFailure', 'loadVersionSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  constructor(private actions$: Actions, private remoteDataService: RemoteDataService, private notificationUtil: NotificationUtil) {
  }
}
