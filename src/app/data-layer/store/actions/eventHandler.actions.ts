import {createAction, props} from '@ngrx/store';

export const loadEventSuccess = createAction(
  '[Event] Load Events Success',
  props<{ data: any }>()
);
