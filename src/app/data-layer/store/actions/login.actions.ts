import {createAction, props} from '@ngrx/store';
import {CmsParams} from '../../../business-layer/models/CmsParams';

/**
 *  Login Actions
 */

export const loadLogins = createAction(
  '[Login] Load Logins',
  props<{ data: CmsParams }>()
);

export const loadLoginsSuccess = createAction(
  '[Login] Load Logins Success',
  props<{ data: any }>()
);
/**
 *  ForgotPassword Actions
 */

export const loadForgotPasswords = createAction(
  '[Login] Load Forgot Password',
  props<{ data: CmsParams }>()
);

export const loadForgotPasswordsSuccess = createAction(
  '[Login] Load Forgot Password Success',
  props<{ data: any }>()
);
/**
 *  IsActive Actions
 */

export const loadIsActive = createAction(
  '[IsActive] Load IsActive',
  props<{ data: any }>()
);

export const loadIsActiveSuccess = createAction(
  '[IsActive] Load IsActive Success',
  props<{ data: any }>()
);
