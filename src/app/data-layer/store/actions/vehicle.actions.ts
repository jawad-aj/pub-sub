import {createAction, props} from '@ngrx/store';
import {CmsParams} from '../../../business-layer/models/CmsParams';
import {VehicleSummary} from '../../../business-layer/models/VehicleSummary';


/*░░░░░░░░░░░░░░░░░░░░░░Show Vehicle Actions░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const loadShowVehicle = createAction(
  '[Vehicle] Load VehicleSummary',
  props<{ data: any }>()
);

export const loadShowVehicleSuccess = createAction(
  '[Vehicle] Load VehicleSummary Success',
  props<{ data: any }>()
);
