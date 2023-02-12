import {createAction, props} from '@ngrx/store';

export const loadLogout = createAction(
  '[Logout] Load Logout',
  props<{ data: any }>()
);



export const loadLogoutSuccess = createAction(
  '[Logout] Load Logout Success',
  props<{ data: any }>()
);


