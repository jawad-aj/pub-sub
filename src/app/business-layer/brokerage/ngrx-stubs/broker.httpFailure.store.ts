/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import {httpFailureSelector} from "../../../data-layer/store/selectors/http-failure.selectors";

@Injectable()
export class BrokerHttpFailureStore {
  brokerLabel: string = BrokerList.BROKER_HTTP_FAILURE_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        httpFailure$: this.store.select(httpFailureSelector).pipe(filter(value => value !== undefined))
      }
    });
  }
}
