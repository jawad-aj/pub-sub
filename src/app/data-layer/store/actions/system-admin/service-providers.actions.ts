import { createAction, props } from '@ngrx/store';

/**
 *  ServiceProvider Types
 */
export const loadServiceProviderTypes = createAction(
  '[ServiceProvider] Load ServiceProviderTypes',
  props<{ data: any }>()
);

export const loadServiceProviderTypesSuccess = createAction(
  '[ServiceProvider] Load ServiceProviderTypes Success',
  props<{ data: any }>()
);

/**
 *  ServiceProviders
 */
export const loadServiceProviders = createAction(
  '[ServiceProvider] Load ServiceProviders',
  props<{ data: any }>()
);

export const loadServiceProvidersSuccess = createAction(
  '[ServiceProvider] Load ServiceProviders Success',
  props<{ data: any }>()
);

/**
 *  PersistServiceProviders
 */
export const loadPersistServiceProviders = createAction(
  '[ServiceProvider] Load PersistServiceProviders',
  props<{ data: any }>()
);

export const loadPersistServiceProvidersSuccess = createAction(
  '[ServiceProvider] Load PersistServiceProviders Success',
  props<{ data: any }>()
);
