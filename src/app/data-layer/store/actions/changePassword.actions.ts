import {createAction, props} from '@ngrx/store';
import {CmsParams} from '../../../business-layer/models/CmsParams';

export const loadChangePasswords = createAction(
  '[ChangePassword] Load ChangePasswords',
  props<{ data: CmsParams }>()
);

export const loadChangePasswordsSuccess = createAction(
  '[ChangePassword] Load ChangePasswords Success',
  props<{ data: any }>()
);


