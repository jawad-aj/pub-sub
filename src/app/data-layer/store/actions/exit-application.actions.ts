import { createAction, props } from '@ngrx/store';

export const loadExitApplication = createAction(
  '[ExitApplication] Load ExitApplication',
  props<{ data: any }>()
);
