import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import * as WebsocketMessagesActionTypes from '../../shared-types/actions/websocketMessages.action.types';
import * as websocketMessagesAction from '../../../data-layer/store/actions/websocket-messages.actions';

@Injectable()
export class BrokerWebsocketMessagesStore {
  brokerLabel: string = BrokerList.BROKER_WEBSOCKET_MESSAGES_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case WebsocketMessagesActionTypes.WEBSOCKET_TAKE_CONTROL:
        this.store.dispatch(websocketMessagesAction.loadWebsocketTakeControl({data: brokerAction.payLoad}));
        break;
      case WebsocketMessagesActionTypes.WEBSOCKET_RE_ASSIGN:
        this.store.dispatch(websocketMessagesAction.loadWebsocketReAssign({data: brokerAction.payLoad}));
        break;
      case WebsocketMessagesActionTypes.WEBSOCKET_ASSIGN:
        this.store.dispatch(websocketMessagesAction.loadWebsocketAssign({data: brokerAction.payLoad}));
        break;
      case WebsocketMessagesActionTypes.WEBSOCKET_SAVE_CLAIM:
        this.store.dispatch(websocketMessagesAction.loadWebsocketSaveClaim({data: brokerAction.payLoad}));
        break;
    }
  }
}
