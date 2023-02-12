import {Injectable} from "@angular/core";
import {BrokerDispatcherService} from "../pubsub-broker/services/broker.dispatcher.service";
import {BrokerResponse} from "../pubsub-broker/models/broker.response.model";
import {BrokerAction} from "../pubsub-broker/models/broker.action.model";
import {BrokerActionPayLoad} from "../models/BrokerActionPayLoad";
import {CMSEvents} from "../models/CMSEvents";
import {LOAD_EVENT} from "../shared-types/actions/eventHandler.action.types";
import {BrokerList} from "../brokerage/ngrx-stubs/brokerlist";

@Injectable()
export class StoreService {

  constructor(private dispatchEvent: BrokerDispatcherService) {
  }

  /**
   * Dispatch Selector Function
   */
  selectorDispatcher(brokerStore, props?) {
    var brokerResponse: BrokerResponse;
    if (props) {
      brokerResponse = this.dispatchEvent.dispatchBrokerSelector(brokerStore, props);

    } else {
      brokerResponse = this.dispatchEvent.dispatchBrokerSelector(brokerStore);
    }
    return brokerResponse.brokerRequested.storeObs;
  }


  /**
   * Dispatch Action Function
   */
  actionDispatcher(action, brokerType, data, serviceUtilParams?) {
    var brokerAction: BrokerAction = new BrokerAction();
    if (serviceUtilParams) {
      var brokerActionPayLoad: BrokerActionPayLoad = new BrokerActionPayLoad();
      brokerActionPayLoad.data = data;
      brokerActionPayLoad.serviceUtilParam = serviceUtilParams;
      brokerAction.payLoad = brokerActionPayLoad;
    } else {
      brokerAction.payLoad = data;
    }
    brokerAction.actionType = action;
    brokerAction.brokerType = brokerType;
    this.dispatchEvent.dispatchBrokerAction(brokerAction);
  }

  /**
   * Dispatch Event Function
   */
  eventDispatcher(event: CMSEvents) {
    let brokerAction: BrokerAction = new BrokerAction();
    brokerAction.actionType = LOAD_EVENT;
    brokerAction.brokerType = BrokerList.BROKER_EVENT_HANDLER_STORE;
    brokerAction.payLoad = event;
    this.dispatchEvent.dispatchBrokerAction(brokerAction);
  }
}
