import {createAction, props} from '@ngrx/store';

/**
 * SearchAccidentComboData
 */
export const loadSearchAccidentComboData = createAction(
  '[SearchAccident] Load SearchAccidentComboData',
  props<{ data: any }>()
);

export const loadSearchAccidentComboDataSuccess = createAction(
  '[SearchAccident] Load SearchAccidentComboData Success',
  props<{ data: any }>()
);
