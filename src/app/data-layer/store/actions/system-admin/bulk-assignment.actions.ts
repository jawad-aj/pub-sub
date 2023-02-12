import { createAction, props } from '@ngrx/store';

/**
 *  Get User Lookup
 */
export const loadGetUserLookup = createAction(
  '[Bulk Assignment] Load GetUserLookup',
  props<{ data: any }>()
);

export const loadGetUserLookupSuccess = createAction(
  '[Bulk Assignment] Load GetUserLookup Success',
  props<{ data: any }>()
);



/**
 *  Get Accidents
 */
export const loadGetAccidents = createAction(
  '[Bulk Assignment] Load GetAccidents',
  props<{ data: any }>()
);

export const loadGetAccidentsSuccess = createAction(
  '[Bulk Assignment] Load GetAccidents Success',
  props<{ data: any }>()
);



/**
 *  Assign Bulk Accidents
 */
export const loadAssignBulkAccidents = createAction(
  '[Bulk Assignment] Load AssignBulkAccidents',
  props<{ data: any }>()
);

export const loadAssignBulkAccidentsSuccess = createAction(
  '[Bulk Assignment] Load AssignBulkAccidents Success',
  props<{ data: any }>()
);

/**
 *  Bulk Assignment RetrieveAccidents
 */
export const loadRetrieveAccidents = createAction(
  '[Bulk Assignment] Load RetrieveAccidents',
  props<{ data: any }>()
);

export const loadRetrieveAccidentsSuccess = createAction(
  '[Bulk Assignment] Load RetrieveAccidents Success',
  props<{ data: any }>()
);
