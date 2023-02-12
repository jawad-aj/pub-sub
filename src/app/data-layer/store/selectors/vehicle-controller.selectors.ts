import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromVehicleController from '../reducers/vehicle-controller.reducer';
import * as _ from 'lodash-es';

/**
 * VehicleBrief Selector
 */

export const selectVehicleBrief = createFeatureSelector<GlobalState, fromVehicleController.VehicleBriefState>(fromVehicleController.vehicleBriefFeatureKey);
export const vehicleBriefSelector = createSelector(selectVehicleBrief, (vehicleBriefState: fromVehicleController.VehicleBriefState) => _.cloneDeep(vehicleBriefState.vehicleBrief));
/**
 * VehicleComboData Selector
 */

export const selectVehicleComboData = createFeatureSelector<GlobalState, fromVehicleController.VehicleComboDataState>(fromVehicleController.vehicleComboDataFeatureKey);
export const vehicleComboDataSelector = createSelector(selectVehicleComboData, (vehicleComboDataState: fromVehicleController.VehicleComboDataState) => _.cloneDeep(vehicleComboDataState.vehicleComboData));
