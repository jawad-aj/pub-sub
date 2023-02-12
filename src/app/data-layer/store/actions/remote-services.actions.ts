import { createAction, props } from '@ngrx/store';

export const loadRemoteServices = createAction(
  '[RemoteServices] Load RemoteServices',
  props<{ data: any }>()
);

export const loadRemoteServicesSuccess = createAction(
  '[RemoteServices] Load RemoteServices Success',
  props<{ data: any }>()
);

export const loadVersion = createAction(
  '[Version] Load Version',
  props<{ data: any }>()
);

export const loadVersionSuccess = createAction(
  '[Version] Load Version Success',
  props<{ data: any }>()
);

