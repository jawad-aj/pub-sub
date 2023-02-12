/**
 * Created by Jawad  on 09/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as fileURLActionsTypes from '../../shared-types/actions/fileURL.action.types';
import * as fileActions from '../../../data-layer/store/actions/attachment.actions';
import {fileUrlSelector} from '../../../data-layer/store/selectors/file-url.selectors';

@Injectable()
export class BrokerFileURLStore {
  brokerLabel: string = BrokerList.BROKER_FILE_URL_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        fileURL$: this.store.select(fileUrlSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case fileURLActionsTypes.UPLOAD_NEW_ATTACHMENT:
        this.store.dispatch(fileActions.loadUploadNewDocument({data: brokerAction.payLoad}));
        break;
      case fileURLActionsTypes.UPLOAD_NEW_ACCIDENT_ATTACHMENT:
        this.store.dispatch(fileActions.loadUploadAccidentNewDocument({data: brokerAction.payLoad}));
        break;
      case fileURLActionsTypes.DOWNLOAD_SUPPORTING_DOCUMENT:
        this.store.dispatch(fileActions.loadDownloadSupportingDocuments({data: brokerAction.payLoad}));
        break;
      case fileURLActionsTypes.RESET_FILE_URL:
        this.store.dispatch(fileActions.loadResetFileURL({data: brokerAction.payLoad}));
        break;

    }
  }
}
