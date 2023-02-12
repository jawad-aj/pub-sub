import {createAction, props} from '@ngrx/store';
import {CmsParams} from '../../../business-layer/models/CmsParams';
import {JsonData} from '../../../business-layer/models/JsonData';


/**
 *  RetrieveClaim Actions
 */

export const loadClaimAccidentSummary = createAction(
  '[WorkBasket] Load ClaimAccidentSummary',
  props<{ data: CmsParams }>()
);

export const loadClaimAccidentSummarySuccess = createAction(
  '[WorkBasket] Load ClaimAccidentSummary Success',
  props<{ data: any }>()
);
/**
 *  ImplicitClaimAccidentSummary Actions
 */

export const loadImplicitClaimAccidentSummary = createAction(
  '[WorkBasket] Load ImplicitClaimAccidentSummary',
  props<{ data: CmsParams }>()
);

export const loadImplicitClaimAccidentSummarySuccess = createAction(
  '[WorkBasket] Load ImplicitClaimAccidentSummary Success',
  props<{ data: any }>()
);

/**
 *  Assign Actions
 */

export const loadAssignClaim = createAction(
  '[WorkBasket] load Assign Claim',
  props<{ data: CmsParams }>()
);

export const loadAssignClaimSuccess = createAction(
  '[WorkBasket] load Assign Claim Success',
  props<{ data: CmsParams }>()
);

export const loadReAssignClaim = createAction(
  '[WorkBasket] load Re-Assign Claim',
  props<{ data: CmsParams }>()
);

export const loadReAssignClaimSuccess = createAction(
  '[WorkBasket] load Re-Assign Claim Success',
  props<{ data: CmsParams }>()
);

export const loadTakeControlClaim = createAction(
  '[WorkBasket] load TakeControl Claim',
  props<{ data: CmsParams }>()
);

export const loadTakeControlClaimSuccess = createAction(
  '[WorkBasket] load TakeControl Claim Success',
  props<{ data: CmsParams }>()
);


/**
 *  ClaimWQSummary Actions
 */

export const loadCLClaimWQSummary = createAction(
  '[WorkBasket] Load Get CL ClaimWQSummary',
  props<{ data: any }>()
);

export const loadCLClaimWQSummarySuccess = createAction(
  '[WorkBasket] Load Get CL ClaimWQSummary Success',
  props<{ data: any }>()
);

export const loadBPCClaimWQSummary = createAction(
  '[WorkBasket] Load Get BPC ClaimWQSummary',
  props<{ data: JsonData }>()
);

export const loadBPCClaimWQSummarySuccess = createAction(
  '[WorkBasket] Load Get BPC ClaimWQSummary Success',
  props<{ data: any }>()
);

export const loadSearchClaimWQSummary = createAction(
  '[WorkBasket] Load Get Search ClaimWQSummary',
  props<{ data: JsonData }>()
);

export const loadSearchClaimWQSummarySuccess = createAction(
  '[WorkBasket] Load Get Search ClaimWQSummary Success',
  props<{ data: any }>()
);
/**
 *  Claim Type WQ Summary Actions
 */

export const loadClaimTypeWQSummarySuccess = createAction(
  '[WorkBasket] Load ClaimTypeWQSummary Success',
  props<{ data: string }>()
);

