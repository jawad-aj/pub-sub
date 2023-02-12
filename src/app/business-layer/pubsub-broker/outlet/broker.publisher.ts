/**
 * Created by Jawad  on 07/08/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../models/broker.action.model';
import {BrokerResponse} from '../models/broker.response.model';
import {AbstractBrokerTrader} from "./abstract.broker.trader";

@Injectable()
export class BrokerPublisher extends AbstractBrokerTrader {

  constructor() {
    super();
  }

  // This overrides the empty NotifyObservers() in the base class.
  public NotifyBrokerActionConsumers(brokerAction: BrokerAction) {
    this._consumers[0].ReceiveBrokerAction(brokerAction);
  }

  public NotifyBrokerSelectorConsumer(brokerRequest: string, props?: string): BrokerResponse {
    return this._consumers[0].ReceivedBrokerSelectorRequest(brokerRequest, props);
  }


}
