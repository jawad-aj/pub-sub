import {createAction, props} from '@ngrx/store';

export const loadSelectedRow = createAction(
  '[SelectedRow] Load SelectedRow',
  props<{ data: any }>()
);

export const loadSelectedRowSuccess = createAction(
  '[SelectedRow] Load SelectedRow Success',
  props<{ data: any }>()
);
