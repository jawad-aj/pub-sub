import {createAction, props} from '@ngrx/store';

export const loadFooter = createAction(
  '[Footer] Load Footer',
  props<{ data: any }>()
);

export const loadFooterSuccess = createAction(
  '[Footer] Load Footer Success',
  props<{ data: any }>()
);
