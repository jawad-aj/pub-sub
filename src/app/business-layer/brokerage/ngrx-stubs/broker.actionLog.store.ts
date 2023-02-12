/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import {actionLogsSelector} from "../../../data-layer/store/selectors/action-logs.selectors";

@Injectable()
export class BrokerActionLogStore {
  brokerLabel: string = BrokerList.BROKER_ACTION_LOG_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        actionLog$: this.store.select(actionLogsSelector).pipe(filter(value => value !== undefined))
      }
    });
  }
}
