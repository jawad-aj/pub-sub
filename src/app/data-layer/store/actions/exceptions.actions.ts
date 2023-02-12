import {createAction, props} from '@ngrx/store';

export const serviceException = createAction(
  '[Every Page] ServiceException',
  props<{ msg: string }>()
);
