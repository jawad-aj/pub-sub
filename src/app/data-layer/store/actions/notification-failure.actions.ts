import { createAction, props } from '@ngrx/store';

export const loadNotificationFailure = createAction(
  '[NotificationFailure] Load NotificationFailure ',
  props<{ data: any }>()
);
