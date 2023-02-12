import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromLogin from '../reducers/login.reducer';
import * as _ from 'lodash-es';

/**░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Login░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const selectLogin = createFeatureSelector<GlobalState, fromLogin.loginDataState>(fromLogin.loginFeatureKey);
export const loginSelector = createSelector(selectLogin, (LoginDataState: fromLogin.loginDataState) => _.cloneDeep(LoginDataState.loginData));

/**░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░IsActive░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const selectIsActive = createFeatureSelector<GlobalState, fromLogin.isActiveState>(fromLogin.isActiveFeatureKey);
export const isActiveSelector = createSelector(selectIsActive, (isActiveState: fromLogin.isActiveState) => _.cloneDeep(isActiveState.isActive));

