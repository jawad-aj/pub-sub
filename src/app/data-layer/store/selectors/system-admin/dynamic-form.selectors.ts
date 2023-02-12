import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromDynamicForm from '../../reducers/system-admin/dynamic-form.reducer';

/**
 * DynamicForm Selector
 */

export const selectDynamicForm = createFeatureSelector<fromDynamicForm.DynamicFormState>(fromDynamicForm.dynamicFormFeatureKey);
export const dynamicFormSelector = createSelector(selectDynamicForm, (dynamicFormState: fromDynamicForm.DynamicFormState) => {
  if (dynamicFormState) {
    return _.cloneDeep(dynamicFormState.dynamicForm);
  }
});
