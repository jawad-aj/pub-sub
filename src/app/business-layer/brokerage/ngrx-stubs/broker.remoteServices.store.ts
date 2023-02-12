/**
 * Created by Jawad  on 08/08/2020.
 */
import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import * as remoteServicesActionTypes from "../../shared-types/actions/remoteServices.action.types"
import * as remoteServicesAction from '../../../data-layer/store/actions/remote-services.actions';
import {filter} from "rxjs/operators";
import {remoteServiceSelector} from "../../../data-layer/store/selectors/remote-service.selectors";

@Injectable()
export class BrokerRemoteServicesStore {
  brokerLabel: string = BrokerList.BROKER_REMOTESERVICES_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        remoteServices$: this.store.select(remoteServiceSelector).pipe(filter(value => value !== undefined))
      }
    });

  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case remoteServicesActionTypes.REMOTE_SERVICES:
        this.store.dispatch(remoteServicesAction.loadRemoteServices({data: brokerAction.payLoad}));
        break;
      case remoteServicesActionTypes.GET_VERSION:
        brokerAction.payLoad = 'version.json';
        this.store.dispatch(remoteServicesAction.loadVersion({data: brokerAction.payLoad}));
        break;
    }
  }
}
