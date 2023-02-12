import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as vehicleComponentActions from '../actions/vehicle.actions';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {VehicleService} from '../../api-services/vehicle.service';

@Injectable()
export class VehicleEffects {

  /***
   *  showVehicles Effect
   */
  getVehicles$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleComponentActions.loadShowVehicle),
    switchMap((action) => this.vehicleService.getVehicles(action.data)
      .pipe(map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleSummary');
          return this.notificationUtil.successCheck('vehicleSummary', obj, vehicleComponentActions.loadShowVehicleSuccess, 'Vehicle Summary can not be retrieved.', 'loadShowVehicleSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private vehicleService: VehicleService, private notificationUtil: NotificationUtil) {
  }
}
