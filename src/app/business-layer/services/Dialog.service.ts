import {Injectable} from '@angular/core';
import {StoreService} from './store.service';
import {CMSEvents} from '../models/CMSEvents';
import {ApplicationHeaderInfo} from '../models/ApplicationHeaderInfo';

@Injectable()
export class DialogService {
  constructor(private storeService: StoreService,) {
  }

  dispatchEvent(obj, code, parentKey = '', childKey = 'message', message = '') {
    if (obj['notificationSuccess']) {
      let event: CMSEvents = new CMSEvents();
      event.code = code;
      if (parentKey === '') {
        event.data = message + obj[childKey];
      } else {
        event.data = message + obj[parentKey][childKey];
      }
      this.storeService.eventDispatcher(event);
    }
  }

  dispatchDynamicMessage(code, message) {
    let event: CMSEvents = new CMSEvents();
    event.code = code;
    event.data = message;
    this.storeService.eventDispatcher(event);
  }

  persistAccidentHeaderInfo(obj) {
    if (obj['notificationSuccess']) {
      let event: CMSEvents = new CMSEvents();
      event.code = 'loadApplicationHeaderInfo';
      let info: ApplicationHeaderInfo = new ApplicationHeaderInfo();
      info.accidentNumber = obj['accident']['accidentNumber'];
      event.data = info;
      this.storeService.eventDispatcher(event);
    }
  }
}
