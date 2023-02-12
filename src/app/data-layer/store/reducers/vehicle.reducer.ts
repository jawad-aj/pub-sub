import {Action, createReducer, on} from '@ngrx/store';
import {VehicleSummary} from '../../../business-layer/models/VehicleSummary';
import {loadShowVehicleSuccess} from '../actions/vehicle.actions';
import {loadLogout} from "../actions/logout.actions";
import {loadExitApplication} from "../actions/exit-application.actions";
/*░░░░░░░░░░░░░░░░░░░░░░Feature Keys░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const vehicleSummaryFeatureKey = 'vehicleSummary';

/*░░░░░░░░░░░░░░░░░░░░░░Vehicle Accident Summary░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export interface vehicleSummaryState {
  readonly vehicleSummary: Array<VehicleSummary>;
}


export const vehicleSummaryInitialState: vehicleSummaryState = {
  vehicleSummary: undefined,
};


const showVehicleReducer = createReducer(
  vehicleSummaryInitialState,
  on(loadShowVehicleSuccess, (vehicleSummaryState, {data}) => ({vehicleSummary: data.vehicleSummary})),
  on(loadExitApplication, (vehicleSummaryState, {data}) => ({vehicleSummary: data})),
  on(loadLogout, (vehicleSummaryState, {data}) => ({vehicleSummary: data})),
);


export function vehicleSummaryReducer(vehicleSummaryState: vehicleSummaryState | undefined, action: Action) {
  return showVehicleReducer(vehicleSummaryState, action);
}
