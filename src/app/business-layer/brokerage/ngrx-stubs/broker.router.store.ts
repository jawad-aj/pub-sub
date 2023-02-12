/**
 * Created by Jawad  on 23/09/2020.
 */

import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import * as RouterTypes from "../../shared-types/actions/router.action.types"
import * as routerActions from "../../../data-layer/store/actions/router.actions"
import {routerSelector} from "../../../data-layer/store/selectors/router.selectors";

@Injectable()
export class BrokerRouterStore {
  brokerLabel: string = BrokerList.BROKER_ROUTER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        router$: this.store.select(routerSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case RouterTypes.ROUTER:
        this.store.dispatch(routerActions.loadRouterSuccess({data: brokerAction.payLoad}));
        break;
    }
  }
}
