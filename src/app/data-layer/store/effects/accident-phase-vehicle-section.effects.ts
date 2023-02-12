import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as vehicleSectionControllerActions from '../actions/accident-phase-vehicle-section.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {VehicleSectionControllerService} from '../../api-services/vehicle-section-controller.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class AccidentPhaseVehicleSectionEffects {


  /**
   *  accidentAppVehicleSectionComboData$
   */
  accidentAppVehicleSectionComboData$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleSectionControllerActions.loadAccidentPhaseVehicleSectionComboData),
    switchMap((action) => this.vehicleSectionControllerService.setAccidentPhaseVehicleSectionComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleSectionComboData');
          return this.notificationUtil.successCheck('vehicleSectionComboData', obj, vehicleSectionControllerActions.loadAccidentPhaseVehicleSectionComboDataSuccess, 'loadAccidentPhaseVehicleSectionComboDataFailure', 'loadAccidentPhaseVehicleSectionComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Vehicle Brief
   */
  vehicleBrief$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleSectionControllerActions.loadAccidentPhaseVehicleBrief),
    switchMap((action) => this.vehicleSectionControllerService.setVehicleBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleBrief');
          return this.notificationUtil.successCheck('vehicleBrief', obj, vehicleSectionControllerActions.loadAccidentPhaseVehicleBriefSuccess, 'loadAccidentPhaseVehicleBriefFailure', 'loadAccidentPhaseVehicleBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Vehicle ComboData
   */
  vehicleComboData$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleSectionControllerActions.loadAccidentPhaseVehicleComboData),
    switchMap((action) => this.vehicleSectionControllerService.setVehicleComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleComboData');
          return this.notificationUtil.successCheck('vehicleComboData', obj, vehicleSectionControllerActions.loadAccidentPhaseVehicleComboDataSuccess, 'loadAccidentPhaseVehicleComboDataFailure', 'loadAccidentPhaseVehicleComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Vehicle SelectedRecord
   */
  vehicleSelectedRecord$ = createEffect(() => this.actions$.pipe(
    ofType(vehicleSectionControllerActions.loadAccidentPhaseVehicleSelectedRecord),
    switchMap((action) => this.vehicleSectionControllerService.setSelectedRow(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'vehicleSelectedRecord');
          return this.notificationUtil.successCheck('vehicleSelectedRecord', obj, vehicleSectionControllerActions.loadAccidentPhaseVehicleSelectedRecordSuccess, 'loadAccidentPhaseVehicleSelectedRecordFailure', 'loadAccidentPhaseVehicleSelectedRecordSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private vehicleSectionControllerService: VehicleSectionControllerService, private notificationUtil: NotificationUtil) {
  }
}

