import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromNotificationSuccess from "../reducers/notification-success.reducer";
import * as _ from 'lodash-es';

/**
 * Created by Jawad on 06/08/2020.
 */

export const selectNotificationSuccess = createFeatureSelector<GlobalState, fromNotificationSuccess.NotificationSuccessState>(fromNotificationSuccess.notificationSuccessFeatureKey);
export const notificationSuccessSelector = createSelector(selectNotificationSuccess, (notificationSuccessState: fromNotificationSuccess.NotificationSuccessState) => _.cloneDeep(notificationSuccessState.notificationSuccess));

