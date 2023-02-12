import { createAction, props } from '@ngrx/store';
/**
 *  Get Parameter Categories
 */
export const loadGetParameterCategories = createAction(
  '[Parameters] Load GetParameterCategories',
  props<{ data: any }>()
);

export const loadGetParameterCategoriesSuccess = createAction(
  '[Parameters] Load GetParameterCategories Success',
  props<{ data: any }>()
);

/**
 *  Get Company Parameters
 */
export const loadGetCompanyParameters = createAction(
  '[Parameters] Load GetCompanyParameters',
  props<{ data: any }>()
);

export const loadGetCompanyParametersSuccess = createAction(
  '[Parameters] Load GetCompanyParameters Success',
  props<{ data: any }>()
);

/**
 *  Update Company Parameters
 */
export const loadUpdateCompanyParameters = createAction(
  '[Parameters] Load UpdateCompanyParameters',
  props<{ data: any }>()
);

export const loadUpdateCompanyParametersSuccess = createAction(
  '[Parameters] Load UpdateCompanyParameters Success',
  props<{ data: any }>()
);

/**
 *  Retrieve Company Parameters
 */
export const loadRetrieveCompanyParameters = createAction(
  '[Parameters] Load RetrieveCompanyParameters',
  props<{ data: any }>()
);

export const loadRetrieveCompanyParametersSuccess = createAction(
  '[Parameters] Load RetrieveCompanyParameters Success',
  props<{ data: any }>()
);
