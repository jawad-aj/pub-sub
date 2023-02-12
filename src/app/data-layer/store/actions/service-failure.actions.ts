import { createAction, props } from '@ngrx/store';

export const loadServiceFailure = createAction(
  '[ServiceFailure] Load ServiceFailure',
  props<{ error: any }>()
);
