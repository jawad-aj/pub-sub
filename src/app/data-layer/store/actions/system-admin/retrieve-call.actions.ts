import { createAction, props } from '@ngrx/store';

export const loadRetrievePayload = createAction(
  '[RetrieveCall] Load Retrieve Payload',
  props<{ data: any }>()
);
