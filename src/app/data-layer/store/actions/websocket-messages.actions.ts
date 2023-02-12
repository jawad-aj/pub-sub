import {createAction, props} from '@ngrx/store';

export const loadWebsocketTakeControl = createAction(
  '[WebsocketMessages] Load Websocket TakeControl',
  props<{ data: any }>()
);

export const loadWebsocketTakeControlSuccess = createAction(
  '[WebsocketMessages] Load Websocket TakeControl Success',
  props<{ data: any }>()
);

export const loadWebsocketReAssign = createAction(
  '[WebsocketMessages] Load Websocket ReAssign',
  props<{ data: any }>()
);

export const loadWebsocketReAssignSuccess = createAction(
  '[WebsocketMessages] Load Websocket ReAssign Success',
  props<{ data: any }>()
);

export const loadWebsocketAssign = createAction(
  '[WebsocketMessages] Load Websocket Assign',
  props<{ data: any }>()
);

export const loadWebsocketAssignSuccess = createAction(
  '[WebsocketMessages] Load Websocket Assign Success',
  props<{ data: any }>()
);

export const loadWebsocketSaveClaim = createAction(
  '[WebsocketMessages] Load Websocket SaveClaim',
  props<{ data: any }>()
);

export const loadWebsocketSaveClaimSuccess = createAction(
  '[WebsocketMessages] Load Websocket SaveClaim Success',
  props<{ data: any }>()
);
