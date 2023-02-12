import { createAction, props } from '@ngrx/store';

export const loadHeaderComboData = createAction(
  '[HeaderController] Load HeaderComboData',
  props<{ data: any }>()
);

export const loadHeaderComboDataSuccess = createAction(
  '[HeaderController] Load HeaderComboData Success',
  props<{ data: any }>()
);

export const loadHeaders = createAction(
  '[HeaderController] Load Headers',
  props<{ data: any }>()
);

export const loadHeadersSuccess = createAction(
  '[HeaderController] Load Headers Success',
  props<{ data: any }>()
);
