/**
 * Created by Jawad  on 06/04/2021.
 */

import {Injectable} from '@angular/core';
import * as retrieveCallActionsTypes from '../../../shared-types/actions/system-admin/genericRetrieveController.action.types';
import * as retrieveCallActions from '../../../../data-layer/store/actions/system-admin/retrieve-call.actions';
import {GlobalState} from '../../../../data-layer/store/reducers';
import {BrokerAction} from '../../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from '../brokerlist';
import {filter} from 'rxjs/operators';
import {retrievePayloadSelector} from '../../../../data-layer/store/selectors/system-admin/retrieve-call.selectors';
import {SystemAdminGenericPayloadService} from '../../../services/SystemAdmin-GenericPayload.service';
import {BrokerActionPayLoad} from '../../../models/BrokerActionPayLoad';

@Injectable()
export class BrokerGenericRetrieveControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_GENERIC_RETRIEVE_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        retrievePayload$: this.store.select(retrievePayloadSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case retrieveCallActionsTypes.GET_RETRIEVE_PAYLOAD:
        this.store.dispatch(retrieveCallActions.loadRetrievePayload({data: brokerAction.payLoad}));
        break;
    }
  }
}
