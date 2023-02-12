import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromNotificationFailure from "../reducers/notification-failure.reducer";
import * as _ from 'lodash-es';

/**
 * Created by Jawad on 05/09/2020.
 */

export const selectNotificationFailure = createFeatureSelector<GlobalState, fromNotificationFailure.NotificationFailureState>(fromNotificationFailure.notificationFailureFeatureKey);
export const notificationFailureSelector = createSelector(selectNotificationFailure, (notificationFailureState: fromNotificationFailure.NotificationFailureState) => _.cloneDeep(notificationFailureState.notificationFailure));

