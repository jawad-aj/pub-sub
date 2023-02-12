import {createAction, props} from '@ngrx/store';

export const loadWebsocketConnect = createAction(
  '[WebsocketConnect] Load WebsocketConnect',
  props<{ data: any }>()
);

export const loadWebsocketConnectSuccess = createAction(
  '[WebsocketConnect] Load WebsocketConnect Success',
  props<{ data: any }>()
);

export const loadWebsocketConnectFailure = createAction(
  '[WebsocketConnect] Load WebsocketConnect Failure',
  props<{ error: any }>()
);

export const loadWebsocketAuthentication = createAction(
  '[WebsocketAuthentication] Load WebsocketAuthentication',
  props<{ data: any }>()
);

export const loadWebsocketAuthenticationSuccess = createAction(
  '[WebsocketAuthentication] Load WebsocketAuthentication Success',
  props<{ data: any }>()
);

export const loadWebsocketIdentity = createAction(
  '[WebsocketIdentity] Load WebsocketIdentity',
  props<{ data: any }>()
);

export const loadWebsocketIdentitySuccess = createAction(
  '[WebsocketIdentity] Load WebsocketIdentity Success',
  props<{ data: any }>()
);
