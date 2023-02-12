import { createAction, props } from '@ngrx/store';

export const loadRouterSuccess = createAction(
  '[Router] Load Router Success',
  props<{ data: any }>()
);
