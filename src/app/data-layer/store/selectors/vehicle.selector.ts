import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromVehicleComponent from '../reducers/vehicle.reducer';
import * as _ from 'lodash-es';


/**
 * VehicleSummary
 */
export const selectVehicleSummary = createFeatureSelector<GlobalState, fromVehicleComponent.vehicleSummaryState>(fromVehicleComponent.vehicleSummaryFeatureKey);
export const vehicleSummarySelector = createSelector(selectVehicleSummary, (vehicleSummaryState: fromVehicleComponent.vehicleSummaryState) => _.cloneDeep(vehicleSummaryState.vehicleSummary));



