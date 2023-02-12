import { createAction, props } from '@ngrx/store';

export const loadEventsMapping = createAction(
  '[EventsMapping] Load EventsMapping',
  props<{ data: any }>()
);

export const loadEventsMappingSuccess = createAction(
  '[EventsMapping] Load EventsMapping Success',
  props<{ data: any }>()
);
