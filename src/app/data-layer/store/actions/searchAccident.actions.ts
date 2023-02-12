import { createAction, props } from '@ngrx/store';
import {SummaryFilter} from "../../../business-layer/models/SummaryFilter";
import {AccidentListSummary} from "../../../business-layer/models/AccidentListSummary";
import {CmsParams} from "../../../business-layer/models/CmsParams";
import {Accident} from "../../../business-layer/models/Accident";

export const loadSearchAccidents = createAction(
  '[SearchAccident] Load SearchAccidents',
  props<{ data: any }>()
);

export const loadSearchAccidentsSuccess = createAction(
  '[SearchAccident] Load SearchAccidents Success',
  props<{ data: any }>()
);

export const loadClearSearchAccidents = createAction(
  '[SearchAccident] Load ClearSearchAccidents',
  props<{ data: any }>()
);

export const loadAccident = createAction(
  '[Accident] Load Accident',
  props<{ data: any }>()
);

export const loadAccidentSuccess = createAction(
  '[Accident] Load Accident Success',
  props<{ data: any }>()
);



export const loadImplicitAccident = createAction(
  '[Accident] Load ImplicitAccident',
  props<{ data: any }>()
);

export const loadImplicitAccidentSuccess = createAction(
  '[Accident] Load ImplicitAccident Success',
  props<{ data: any }>()
);

