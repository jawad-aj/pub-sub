import {Notification} from '../models/Notification';
import {Injectable} from '@angular/core';
import {loadNotificationFailure} from '../../store/actions/notification-failure.actions';
import {DialogService} from '../../../business-layer/services/Dialog.service';

@Injectable()
export class NotificationUtil {
  constructor(private dialogService: DialogService) {
  }

  notificationHandler(response, returnType) {
    let obj = {};
    obj[returnType] = response;
    return obj;
  }

  successCheck(returnType: string, payload, action, actionFailure: string, actionSuccess: string) {
    let notification: Notification = new Notification();
    if (payload[returnType]) {
      notification.actionName = actionSuccess;
      notification.success = true;
      payload['notificationSuccess'] = notification;
      return {type: action.type, data: payload};
    } else {
      notification.actionName = actionFailure;
      notification.success = false;
      notification.failure = 'notificationFailure';
      payload['notificationFailure'] = notification;
      return {type: loadNotificationFailure.type, data: payload};
    }
  }

  sendPasswordSuccessCheck(returnType: string, payload, requestCode: string, action, actionFailure: string, actionSuccess: string) {
    let notification: Notification = new Notification();
    if (payload[returnType]) {
      notification.actionName = actionSuccess;
      notification.success = true;
      payload['notificationSuccess'] = notification;
      if (requestCode === 'S') {
        this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Password sent successfully');
      } else {
        this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Password regenerated and sent successfully');
      }
      return {type: action.type, data: payload};
    } else {
      notification.actionName = actionFailure;
      notification.success = false;
      notification.failure = 'notificationFailure';
      payload['notificationFailure'] = notification;
      return {type: loadNotificationFailure.type, data: payload};
    }
  }

  ctpVirmSuccessCheck(returnType: string, payload, action, actionFailure: string, actionSuccess: string) {
    let notification: Notification = new Notification();
    if (payload[returnType] && !payload[returnType]['errorString']) {
      notification.actionName = actionSuccess;
      notification.success = true;
      payload['notificationSuccess'] = notification;
      return {type: action.type, data: payload};
    } else {
      notification.actionName = payload[returnType]['errorString'];
      notification.success = false;
      notification.failure = 'notificationFailure';
      payload['notificationFailure'] = notification;
      return {type: loadNotificationFailure.type, data: payload};
    }
  }

  stringStatusCheck(response, action, actionFailure: string, actionSuccess: string) {
    let notification: Notification = new Notification();
    let obj = {};
    if (response) {
      notification.actionName = actionSuccess;
      notification.success = true;
      obj['notificationSuccess'] = notification;
      obj['response'] = response;
      return {type: action.type, data: obj};
    } else {
      notification.actionName = actionFailure;
      notification.success = false;
      notification.failure = 'notificationFailure';
      obj['notificationFailure'] = notification;
      return {type: loadNotificationFailure.type, data: obj};
    }
  }

  voidStringServices(action, actionName) {
    let obj: any = {};
    let notification: Notification = new Notification();
    notification.actionName = actionName;
    notification.success = true;
    obj ['notificationSuccess'] = notification;
    return {type: action.type, data: obj};
  }
}
