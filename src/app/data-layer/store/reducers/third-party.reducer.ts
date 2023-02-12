import { Action, createReducer, on } from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadDriverPictureSuccess, loadDriverRequestSuccess, loadVehicleRequestSuccess} from '../actions/third-party.actions';
import {VehicleSmartBrief} from '../../../business-layer/models/brief/VehicleSmart.brief';
import {loadExitApplication} from '../actions/exit-application.actions';


/**
 * CtpVirm Reducer -- Third Party Vehicle Request Effect
 */
export const ctpVirmFeatureKey = 'ctpVirm';


export interface CtpVirmState {
  readonly ctpVirm: any;
}


export const ctpVirmInitialState: CtpVirmState = {
  ctpVirm: undefined,
};


const ctpVirmStateReducer = createReducer(
  ctpVirmInitialState,
  on(loadVehicleRequestSuccess, (ctpVirmState, {data}) => ({ctpVirm: data.vehicleResponse})),
  on(loadExitApplication, (ctpVirmState, {data}) => ({ctpVirm: data})),
  on(loadLogout, (ctpVirmState, {data}) => ({ctpVirm: data})),
);


export function ctpVirmReducer(ctpVirmState: CtpVirmState | undefined, action: Action) {
  return ctpVirmStateReducer(ctpVirmState, action);
}



/**
 * DriverValidation Reducer -- Third Party Driver Request Effect
 */
export const driverValidationFeatureKey = 'driverValidation';


export interface DriverValidationState {
  readonly driverValidation: any;
}


export const driverValidationInitialState: DriverValidationState = {
  driverValidation: undefined,
};


const driverValidationStateReducer = createReducer(
  driverValidationInitialState,
  on(loadDriverRequestSuccess, (driverValidationState, {data}) => ({driverValidation: data.driverResponse})),
  on(loadExitApplication, (driverValidationState, {data}) => ({driverValidation: data})),
  on(loadLogout, (driverValidationState, {data}) => ({driverValidation: data})),
);


export function driverValidationReducer(driverValidationState: DriverValidationState | undefined, action: Action) {
  return driverValidationStateReducer(driverValidationState, action);
}


/**
 * DriverPicture Reducer
 */
export const driverPictureFeatureKey = 'driverPicture';


export interface DriverPictureState {
  readonly driverPicture: any;
}


export const driverPictureInitialState: DriverPictureState = {
  driverPicture: undefined,
};


const driverPictureStateReducer = createReducer(
  driverPictureInitialState,
  on(loadDriverPictureSuccess, (driverPictureState, {data}) => ({driverPicture: data.driverPicture})),
  on(loadExitApplication, (driverPictureState, {data}) => ({driverPicture: data})),
  on(loadLogout, (driverPictureState, {data}) => ({driverPicture: data})),
);


export function driverPictureReducer(driverPictureState: DriverPictureState | undefined, action: Action) {
  return driverPictureStateReducer(driverPictureState, action);
}
