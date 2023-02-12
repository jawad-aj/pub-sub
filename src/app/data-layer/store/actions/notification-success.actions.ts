import { createAction, props } from '@ngrx/store';


export const loadNotificationSuccess = createAction(
  '[Notification] Load Notification Success',
  props<{ data: any }>()
);
