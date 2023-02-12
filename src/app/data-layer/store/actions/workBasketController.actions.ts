import {createAction, props} from '@ngrx/store';

export const loadWorkBasketComboData = createAction(
  '[WorkBasketController] Load WorkBasketComboData',
  props<{ data: any }>()
);
export const loadWorkBasketComboDataSuccess = createAction(
  '[WorkBasketController] Load WorkBasketComboData Success',
  props<{ data: any }>()
);

export const loadWorkBasketBrief = createAction(
  '[WorkbasketBrief] Load WorkBasketBrief',
  props<{ data: any }>()
);
export const loadWorkBasketBriefSuccess = createAction(
  '[WorkbasketBrief] Load WorkBasketBrief Success',
  props<{ data: any }>()
);

export const loadAssignComboData = createAction(
  '[WorkBasketPopup] Load AssignComboData',
  props<{ data: any }>()
);
export const loadAssignComboDataSuccess = createAction(
  '[WorkBasketPopup] Load AssignComboData Success',
  props<{ data: any }>()
);
export const loadAssignBrief = createAction(
  '[WorkBasketPopup] Load AssignBrief',
  props<{ data: any }>()
);
export const loadAssignBriefSuccess = createAction(
  '[WorkBasketPopup] Load AssignBrief Success',
  props<{ data: any }>()
);
