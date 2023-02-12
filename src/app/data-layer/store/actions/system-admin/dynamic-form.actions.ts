import {createAction, props} from '@ngrx/store';

export const loadDynamicForms = createAction(
  '[DynamicForm] Load DynamicForms',
  props<{ data: any }>()
);

export const loadDynamicFormsSuccess = createAction(
  '[DynamicForm] Load DynamicForms Success',
  props<{ data: any }>()
);
