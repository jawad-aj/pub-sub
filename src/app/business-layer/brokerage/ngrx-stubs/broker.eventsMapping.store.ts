/**
 * Created by Jawad  on 08/08/2020.
 */
import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import * as eventsMappingActionTypes from "../../shared-types/actions/eventsMapping.action.types"
import * as eventsMappingActions from '../../../data-layer/store/actions/events-mapping.actions';
import {filter} from "rxjs/operators";
import {eventsMappingSelector} from "../../../data-layer/store/selectors/events-mapping.selectors";

@Injectable()
export class BrokerEventsMappingStore {
  brokerLabel: string = BrokerList.BROKER_EVENTS_MAPPING_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        eventsMapping$: this.store.select(eventsMappingSelector).pipe(filter(value => value !== undefined))
      }
    });

  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case eventsMappingActionTypes.GET_EVENTS_MAPPING:
        this.store.dispatch(eventsMappingActions.loadEventsMapping({data: brokerAction.payLoad}));
        break;
    }
  }
}
