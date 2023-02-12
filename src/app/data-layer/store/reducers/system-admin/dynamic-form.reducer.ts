import {Action, createReducer, on} from '@ngrx/store';
import {loadDynamicFormsSuccess} from '../../actions/system-admin/dynamic-form.actions';


export const dynamicFormFeatureKey = 'dynamicForm';

export interface DynamicFormState {
  readonly  dynamicForm: any
}

export const initialState: DynamicFormState = {
  dynamicForm: undefined
};


export const RemoteStateReducer = createReducer(
  initialState,
  on(loadDynamicFormsSuccess, (DynamicFormState, {data}) => ({dynamicForm: data.dynamicForms}))
);

export function dynamicFormReducer(dynamicFormState: DynamicFormState | undefined, action: Action) {
  return RemoteStateReducer(dynamicFormState, action);
}

