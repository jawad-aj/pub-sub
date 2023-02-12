import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadNotificationFailure} from '../actions/notification-failure.actions';


export const notificationFailureFeatureKey = 'notificationFailure';


export interface NotificationFailureState {
  notificationFailure: any
}

export const notificationFailureInitialState: NotificationFailureState = {
  notificationFailure: undefined
};


export const notificationFailureStateReducer = createReducer(
  notificationFailureInitialState,
  on(loadNotificationFailure, (notificationFailureState, {data}) => ({notificationFailure: data.notificationFailure})),
  on(loadExitApplication, (notificationFailureState, {data}) => ({notificationFailure: data})),
  on(loadLogout, (notificationFailureState, {data}) => ({notificationFailure: data}))
);

export function notificationFailureReducer(notificationFailureState: NotificationFailureState | undefined, action: Action) {
  return notificationFailureStateReducer(notificationFailureState, action);
}
