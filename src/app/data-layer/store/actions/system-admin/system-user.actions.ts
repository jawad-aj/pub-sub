import { createAction, props } from '@ngrx/store';

/**
 *  Get SystemUsers
 */
export const loadSystemUsers = createAction(
  '[SystemUser] Load SystemUsers',
  props<{ data: any }>()
);

export const loadSystemUsersSuccess = createAction(
  '[SystemUser] Load SystemUsers Success',
  props<{ data: any }>()
);
/**
 *  Get SystemUserTypes
 */
export const loadSystemUserTypes = createAction(
  '[SystemUser] Load SystemUserTypes',
  props<{ data: any }>()
);

export const loadSystemUserTypesSuccess = createAction(
  '[SystemUser] Load SystemUserTypes Success',
  props<{ data: any }>()
);

/**
 *   PersistSystemUsers
 */
export const loadPersistSystemUsers = createAction(
  '[SystemUser] Load PersistSystemUsers',
  props<{ data: any }>()
);

export const loadPersistSystemUsersSuccess = createAction(
  '[SystemUser] Load PersistSystemUsers Success',
  props<{ data: any }>()
);

/**
 *   SendSystemUserPassword
 */
export const loadSendSystemUserPassword = createAction(
  '[SystemUser] Load SendSystemUserPassword',
  props<{ data: any }>()
);

export const loadSendSystemUserPasswordSuccess = createAction(
  '[SystemUser] Load SendSystemUserPassword Success',
  props<{ data: any }>()
);

/**
 *   RetrieveSystemUsers
 */
export const loadRetrieveSystemUsers = createAction(
  '[SystemUser] Load RetrieveSystemUsers',
  props<{ data: any }>()
);

export const loadRetrieveSystemUsersSuccess = createAction(
  '[SystemUser] Load RetrieveSystemUsers Success',
  props<{ data: any }>()
);
