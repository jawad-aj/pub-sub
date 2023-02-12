import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as thirdPartyActions from '../actions/third-party.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {ThirdPartyService} from '../../api-services/third-party.service';

@Injectable()
export class ThirdPartyEffects {

  /**
   *  sendVehicleRequest
   */
  sendVehicleRequest$ = createEffect(() => this.actions$.pipe(
    ofType(thirdPartyActions.loadVehicleRequest),
    switchMap((action) => this.thirdPartyService.sendVehicleRequest(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleResponse');
          return this.notificationUtil.ctpVirmSuccessCheck('vehicleResponse', obj, thirdPartyActions.loadVehicleRequestSuccess, 'loadVehicleRequestFailure', 'loadVehicleRequestSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  sendDriverRequest
   */
  sendDriverRequest$ = createEffect(() => this.actions$.pipe(
    ofType(thirdPartyActions.loadDriverRequest),
    switchMap((action) => this.thirdPartyService.sendDriverRequest(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'driverResponse');
          return this.notificationUtil.successCheck('driverResponse', obj, thirdPartyActions.loadDriverRequestSuccess, 'The system is unable to connect with server.', 'loadDriverRequestSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  getDriverPicture
   */
  getDriverPicture$ = createEffect(() => this.actions$.pipe(
    ofType(thirdPartyActions.loadDriverPicture),
    switchMap((action) => this.thirdPartyService.getDriverPicture(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'driverPicture');
          return this.notificationUtil.successCheck('driverPicture', obj, thirdPartyActions.loadDriverPictureSuccess, 'The system is unable to connect with server.', 'loadDriverPictureSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  constructor(private  actions$: Actions, private thirdPartyService: ThirdPartyService, private notificationUtil: NotificationUtil) {
  }
}
