/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import * as vehicleActionTypes from "../../shared-types/actions/vehicle.action.types"
import * as vehicleActions from "../../../data-layer/store/actions/vehicle.actions"
import {vehicleSummarySelector} from "../../../data-layer/store/selectors/vehicle.selector";

@Injectable()
export class BrokerVehicleSummaryStore {
  brokerLabel: string = BrokerList.BROKER_VEHICLE_SUMMARY_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        vehicleSummary$: this.store.select(vehicleSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case vehicleActionTypes.SHOW_VEHICLE:
        this.store.dispatch(vehicleActions.loadShowVehicle({data: brokerAction.payLoad}));
        break;
    }
  }
}
