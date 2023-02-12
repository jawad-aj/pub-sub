import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import * as WebsocketServiceActionTypes from '../../shared-types/actions/websocketService.action.types';
import * as websocketConnect from '../../../data-layer/store/actions/websocket-connect.actions';

@Injectable()
export class BrokerWebsocketServiceStore {
  brokerLabel: string = BrokerList.BROKER_WEBSOCKETSERVICE_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case WebsocketServiceActionTypes.Websocket_CONNECT:
        this.store.dispatch(websocketConnect.loadWebsocketConnect({data: brokerAction.payLoad}));
        break;
      case WebsocketServiceActionTypes.Websocket_AUTHENTICATION:
        this.store.dispatch(websocketConnect.loadWebsocketAuthentication({data: brokerAction.payLoad}));
        break;
      case WebsocketServiceActionTypes.Websocket_IDENTITY:
        this.store.dispatch(websocketConnect.loadWebsocketIdentity({data: brokerAction.payLoad}));
        break;
    }
  }
}
