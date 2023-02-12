import {createAction, props} from '@ngrx/store';

/**
 *  Vehicle Brief Controller
 */
export const loadVehicleBrief = createAction(
  '[VehicleController] Load VehicleBrief',
  props<{ data: any }>()
);
export const loadVehicleBriefSuccess = createAction(
  '[VehicleController] Load VehicleBrief Success',
  props<{ data: any }>()
);

/**
 *  Vehicle ComboData Controller
 */
export const loadVehicleComboData = createAction(
  '[VehicleController] Load VehicleComboData',
  props<{ data: any }>()
);
export const loadVehicleComboDataSuccess = createAction(
  '[VehicleController] Load VehicleComboData Success',
  props<{ data: any }>()
);
