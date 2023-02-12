/**
 * Created by Jawad  on 07/08/2020.
 */
import {Injectable} from "@angular/core";
import {NGRxBrokerConsumer} from "../consumers/ngrx.broker.consumer";
import {BrokerPublisher} from "../../pubsub-broker/outlet/broker.publisher";

@Injectable()
export class NGRxBrokerRegistrationService {

  constructor(private ngrxBrokerConsumer: NGRxBrokerConsumer,
              private brokerPublisher: BrokerPublisher) {
    this.brokerPublisher.RegisterBrokerConsumer(this.ngrxBrokerConsumer);
  }

}
