import {Action, createReducer, on} from '@ngrx/store';
import {LoginData} from '../../../business-layer/models/LoginData';
import {loadIsActive, loadIsActiveSuccess, loadLoginsSuccess} from '../actions/login.actions';
import {loadLogout} from "../actions/logout.actions";

/**░░░░░░░░░░░░░░░░░░░░░░Login░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const loginFeatureKey = 'loginData';

export interface loginDataState {
  readonly loginData: LoginData;
}

export const initialState: loginDataState = {
  loginData: undefined,
};

const loginDataReducer = createReducer(
  initialState,
  on(loadLoginsSuccess, (LoginDataState, {data}) => ({loginData: data.loginData})),
  on(loadLogout, (LoginDataState, {data}) => ({loginData: data}))
);

export function loginReducer(LoginDataState: loginDataState | undefined, action: Action) {
  return loginDataReducer(LoginDataState, action);
}


/**░░░░░░░░░░░░░░░░░░░░░░IsActive░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const isActiveFeatureKey = 'isActive';

export interface isActiveState {
  readonly isActive: boolean;
}

export const isActiveInitialState: isActiveState = {
  isActive: undefined,
};

const isActiveStateReducer = createReducer(
  isActiveInitialState,
  on(loadIsActive, (isActiveState, {data}) => ({isActive: data})),
  on(loadLoginsSuccess, (isActiveState, {data}) => ({isActive: true})),
  on(loadLogout, (isActiveState, {data}) => ({isActive: false}))
);

export function isActiveReducer(isActiveState: isActiveState | undefined, action: Action) {
  return isActiveStateReducer(isActiveState, action);
}


