/**
 * Created by Jawad  on 07/08/2020.
 */
import {BrokerResponse} from "../models/broker.response.model";
import {BrokerAction} from "../models/broker.action.model";
import {IConsumer} from "./IConsumer";

export interface ISupplier {
  RegisterBrokerConsumer(Consumer: IConsumer);

  RemoveBrokerConsumer(Consumer: IConsumer);

  NotifyBrokerActionConsumers(brokerAction: BrokerAction);

  NotifyBrokerSelectorConsumer(brokerType: string): BrokerResponse;
}
