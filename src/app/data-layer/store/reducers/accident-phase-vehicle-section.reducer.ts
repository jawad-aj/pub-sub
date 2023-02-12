import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentPhaseVehicleBriefSuccess,
  loadAccidentPhaseVehicleComboDataSuccess,
  loadAccidentPhaseVehicleSectionComboDataSuccess,
  loadAccidentPhaseVehicleSelectedRecordSuccess
} from '../actions/accident-phase-vehicle-section.actions';
import {VehicleSectionComboData} from '../../../business-layer/models/comboData/VehicleSectionComboData';
import {VehicleSmartBrief} from '../../../business-layer/models/brief/VehicleSmart.brief';
import {VehicleSmartComboData} from '../../../business-layer/models/VehicleSmartComboData';
import {loadNonStructuralAccidentApplicationChangeSuccess, loadUpdateAccidentSuccess} from '../actions/application.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadImplicitAccident, loadImplicitAccidentSuccess} from '../actions/searchAccident.actions';

/**
 * VehicleSectionComboData Reducer
 */
export const accidentApplicationVehicleSectionComboDataFeatureKey = 'accidentApplicationVehicleSectionComboData';


export interface AccidentAppVehicleSectionComboData {
  readonly accidentApplicationVehicleSectionComboData: VehicleSectionComboData;
}


export const accidentApplicationVehicleSectionComboDataInitialState: AccidentAppVehicleSectionComboData = {
  accidentApplicationVehicleSectionComboData: undefined,
};


const accidentApplicationVehicleSectionComboDataStateReducer = createReducer(
  accidentApplicationVehicleSectionComboDataInitialState,
  on(loadAccidentPhaseVehicleSectionComboDataSuccess, (accidentApplicationVehicleSectionComboDataState, {data}) => ({accidentApplicationVehicleSectionComboData: data.vehicleSectionComboData})),
  on(loadExitApplication, (accidentApplicationVehicleSectionComboDataState, {data}) => ({accidentApplicationVehicleSectionComboData: data})),
  on(loadLogout, (accidentApplicationVehicleSectionComboDataState, {data}) => ({accidentApplicationVehicleSectionComboData: data})),
);


export function accidentApplicationVehicleSectionComboDataReducer(accidentApplicationVehicleSectionComboDataState: AccidentAppVehicleSectionComboData | undefined, action: Action) {
  return accidentApplicationVehicleSectionComboDataStateReducer(accidentApplicationVehicleSectionComboDataState, action);
}

/**
 * VehicleSectionComboData Reducer
 */
export const accidentPhaseVehicleComboDataFeatureKey = 'accidentPhaseVehicleComboData';


export interface AccidentPhaseVehicleComboData {
  readonly accidentPhaseVehicleComboData: VehicleSmartComboData;
}


export const accidentPhaseVehicleComboDataInitialState: AccidentPhaseVehicleComboData = {
  accidentPhaseVehicleComboData: undefined,
};


const accidentPhaseVehicleComboDataStateReducer = createReducer(
  accidentPhaseVehicleComboDataInitialState,
  on(loadAccidentPhaseVehicleComboDataSuccess, (accidentPhaseVehicleComboDataState, {data}) => ({accidentPhaseVehicleComboData: data.vehicleComboData})),
  on(loadExitApplication, (accidentPhaseVehicleComboDataState, {data}) => ({accidentPhaseVehicleComboData: data})),
  on(loadLogout, (accidentPhaseVehicleComboDataState, {data}) => ({accidentPhaseVehicleComboData: data})),
);


export function accidentPhaseVehicleComboDataReducer(accidentPhaseVehicleComboDataState: AccidentPhaseVehicleComboData | undefined, action: Action) {
  return accidentPhaseVehicleComboDataStateReducer(accidentPhaseVehicleComboDataState, action);
}

/**
 * VehicleSectionBrief Reducer
 */
export const accidentPhaseVehicleBriefFeatureKey = 'accidentPhaseVehicleBrief';


export interface AccidentPhaseVehicleBrief {
  readonly accidentPhaseVehicleBrief: VehicleSmartBrief;
}


export const accidentPhaseVehicleBriefInitialState: AccidentPhaseVehicleBrief = {
  accidentPhaseVehicleBrief: undefined,
};


const accidentPhaseVehicleBriefStateReducer = createReducer(
  accidentPhaseVehicleBriefInitialState,
  on(loadAccidentPhaseVehicleBriefSuccess, (accidentPhaseVehicleBriefState, {data}) => ({accidentPhaseVehicleBrief: data.vehicleBrief})),
  on(loadExitApplication, (accidentPhaseVehicleBriefState, {data}) => ({accidentPhaseVehicleBrief: data})),
  on(loadLogout, (accidentPhaseVehicleBriefState, {data}) => ({accidentPhaseVehicleBrief: data})),
);


export function accidentPhaseVehicleBriefReducer(accidentPhaseVehicleBriefState: AccidentPhaseVehicleBrief | undefined, action: Action) {
  return accidentPhaseVehicleBriefStateReducer(accidentPhaseVehicleBriefState, action);
}

/**
 * VehicleSectionSelectedRecord Reducer
 */
export const accidentPhaseVehicleSelectedRecordFeatureKey = 'accidentPhaseVehicleSelectedRecord';


export interface AccidentPhaseVehicleSelectedRecord {
  readonly accidentPhaseVehicleSelectedRecord: any;
}


export const accidentPhaseVehicleSelectedRecordInitialState: AccidentPhaseVehicleSelectedRecord = {
  accidentPhaseVehicleSelectedRecord: undefined,
};


const accidentPhaseVehicleSelectedRecordStateReducer = createReducer(
  accidentPhaseVehicleSelectedRecordInitialState,
  on(loadAccidentPhaseVehicleSelectedRecordSuccess, (accidentPhaseVehicleSelectedRecordState, {data}) => ({accidentPhaseVehicleSelectedRecord: data.vehicleSelectedRecord})),
  on(loadImplicitAccidentSuccess, (accidentPhaseVehicleSelectedRecordState, {data}) => ({accidentPhaseVehicleSelectedRecord: undefined})),
  on(loadUpdateAccidentSuccess, (accidentPhaseVehicleSelectedRecordState, {data}) => ({accidentPhaseVehicleSelectedRecord: undefined})),
  on(loadExitApplication, (accidentPhaseVehicleSelectedRecordState, {data}) => ({accidentPhaseVehicleSelectedRecord: data})),
  on(loadLogout, (accidentPhaseVehicleSelectedRecordState, {data}) => ({accidentPhaseVehicleSelectedRecord: data})),
);


export function accidentPhaseVehicleSelectedRecordReducer(accidentPhaseVehicleSelectedRecordState: AccidentPhaseVehicleSelectedRecord | undefined, action: Action) {
  return accidentPhaseVehicleSelectedRecordStateReducer(accidentPhaseVehicleSelectedRecordState, action);
}
