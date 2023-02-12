import { createAction, props } from '@ngrx/store';

export const loadAccidentPhaseVehicleSectionComboData = createAction(
  '[AccidentPhaseVehicleSection] Load AccidentPhaseVehicleSectionComboData',
  props<{ data: any }>()
);

export const loadAccidentPhaseVehicleSectionComboDataSuccess = createAction(
  '[AccidentPhaseVehicleSection] Load AccidentPhaseVehicleSectionComboData Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseVehicle Brief
 */
export const loadAccidentPhaseVehicleBrief = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleBrief',
  props<{ data: any }>()
);
export const loadAccidentPhaseVehicleBriefSuccess = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleBrief Success',
  props<{ data: any }>()
);

/**
 *  AccidentPhaseVehicle ComboData
 */
export const loadAccidentPhaseVehicleComboData = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleComboData',
  props<{ data: any }>()
);
export const loadAccidentPhaseVehicleComboDataSuccess = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleComboData Success',
  props<{ data: any }>()
);


/**
 *  AccidentPhaseVehicle SelectedRecord
 */
export const loadAccidentPhaseVehicleSelectedRecord = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleSelectedRecord',
  props<{ data: any }>()
);
export const loadAccidentPhaseVehicleSelectedRecordSuccess = createAction(
  '[AccidentPhaseVehicle] Load AccidentPhaseVehicleSelectedRecord Success',
  props<{ data: any }>()
);
