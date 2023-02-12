import {createAction, props} from '@ngrx/store';

/**
 * Vehicle Request
 */
export const loadVehicleRequest = createAction(
  '[ThirdParty] Load VehicleRequest',
  props<{ data: any }>()
);

export const loadVehicleRequestSuccess = createAction(
  '[ThirdParty] Load VehicleRequest Success',
  props<{ data: any }>()
);


/**
 * Driver Request
 */
export const loadDriverRequest = createAction(
  '[ThirdParty] Load DriverRequest',
  props<{ data: any }>()
);

export const loadDriverRequestSuccess = createAction(
  '[ThirdParty] Load DriverRequest Success',
  props<{ data: any }>()
);
/**
 * Driver Picture
 */
export const loadDriverPicture = createAction(
  '[ThirdParty] Load DriverPicture',
  props<{ data: any }>()
);

export const loadDriverPictureSuccess = createAction(
  '[ThirdParty] Load DriverPicture Success',
  props<{ data: any }>()
);
