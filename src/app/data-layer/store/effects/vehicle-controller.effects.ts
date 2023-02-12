import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as vehicleControllerActions from '../actions/vehicle-controller.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {VehicleControllerService} from '../../api-services/vehicle-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class VehicleControllerEffects {

  /**
   *  Vehicle Brief
   */
  vehicleBrief$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleControllerActions.loadVehicleBrief),
    switchMap((action) => this.vehicleControllerService.setVehicleBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleBrief');
          return this.notificationUtil.successCheck('vehicleBrief', obj, vehicleControllerActions.loadVehicleBriefSuccess, 'loadVehicleBriefFailure', 'loadVehicleBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Vehicle ComboData
   */
  vehicleComboData$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleControllerActions.loadVehicleComboData),
    switchMap((action) => this.vehicleControllerService.setVehicleComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleComboData');
          return this.notificationUtil.successCheck('vehicleComboData', obj, vehicleControllerActions.loadVehicleComboDataSuccess, 'loadVehicleComboDataFailure', 'loadVehicleComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private vehicleControllerService: VehicleControllerService, private notificationUtil: NotificationUtil) {
  }
}
