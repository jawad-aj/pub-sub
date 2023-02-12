import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadVehicleBriefSuccess, loadVehicleComboDataSuccess} from '../actions/vehicle-controller.actions';
import {VehicleComboData} from '../../../business-layer/models/VehicleComboData';
import {VehicleSmartBrief} from '../../../business-layer/models/brief/VehicleSmart.brief';
import {loadExitApplication} from '../actions/exit-application.actions';

/**
 * VehicleBrief Reducer
 */
export const vehicleBriefFeatureKey = 'vehicleBrief';


export interface VehicleBriefState {
  readonly vehicleBrief: VehicleSmartBrief;
}


export const vehicleBriefInitialState: VehicleBriefState = {
  vehicleBrief: undefined,
};


const vehicleBriefStateReducer = createReducer(
  vehicleBriefInitialState,
  on(loadVehicleBriefSuccess, (vehicleBriefState, {data}) => ({vehicleBrief: data.vehicleBrief})),
  on(loadExitApplication, (vehicleBriefState, {data}) => ({vehicleBrief: data})),
  on(loadLogout, (vehicleBriefState, {data}) => ({vehicleBrief: data})),
);


export function vehicleBriefReducer(vehicleBriefState: VehicleBriefState | undefined, action: Action) {
  return vehicleBriefStateReducer(vehicleBriefState, action);
}

/**
 * VehicleComboData Reducer
 */
export const vehicleComboDataFeatureKey = 'vehicleComboData';


export interface VehicleComboDataState {
  readonly vehicleComboData: VehicleComboData;
}


export const vehicleComboDataInitialState: VehicleComboDataState = {
  vehicleComboData: undefined,
};


const vehicleComboDataStateReducer = createReducer(
  vehicleComboDataInitialState,
  on(loadVehicleComboDataSuccess, (vehicleComboDataState, {data}) => ({vehicleComboData: data.vehicleComboData})),
  on(loadExitApplication, (vehicleComboDataState, {data}) => ({vehicleComboData: data})),
  on(loadLogout, (vehicleComboDataState, {data}) => ({vehicleComboData: data})),
);


export function vehicleComboDataReducer(vehicleComboDataState: VehicleComboDataState | undefined, action: Action) {
  return vehicleComboDataStateReducer(vehicleComboDataState, action);
}
