/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import {notificationSuccessSelector} from "../../../data-layer/store/selectors/notification-success.selectors";
import {notificationFailureSelector} from "../../../data-layer/store/selectors/notification-failure.selectors";

@Injectable()
export class BrokerNotificationStore {
  brokerLabel: string = BrokerList.BROKER_NOTIFICATION_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        notificationSuccess$: this.store.select(notificationSuccessSelector).pipe(filter(value => value !== undefined)),
        notificationFailure$: this.store.select(notificationFailureSelector).pipe(filter(value => value !== undefined))
      }
    });
  }
}
