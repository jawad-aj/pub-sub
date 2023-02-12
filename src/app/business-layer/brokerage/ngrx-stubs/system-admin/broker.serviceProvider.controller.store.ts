/**
 * Created by Jawad  on 12/02/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as serviceProviderActionsTypes
  from '../../../shared-types/actions/system-admin/serviceProviderController.action.types';
import * as serviceProviderActions from '../../../../data-layer/store/actions/system-admin/service-providers.actions';
import {GlobalState} from "../../../../data-layer/store/reducers";
import {BrokerAction} from "../../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "../brokerlist";
import {
  serviceProvidersSelector,
  serviceProviderTypesSelector
} from "../../../../data-layer/store/selectors/system-admin/service-providers.selectors";

@Injectable()
export class BrokerServiceProviderControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_SERVICE_PROVIDER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        serviceProviderTypes$: this.store.select(serviceProviderTypesSelector).pipe(filter(value => value !== undefined)),
        serviceProviders$: this.store.select(serviceProvidersSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case serviceProviderActionsTypes.GET_SERVICE_PROVIDER_TYPES:
        this.store.dispatch(serviceProviderActions.loadServiceProviderTypes({data: brokerAction.payLoad}));
        break;
      case serviceProviderActionsTypes.GET_SERVICE_PROVIDERS:
        this.store.dispatch(serviceProviderActions.loadServiceProviders({data: brokerAction.payLoad}));
        break;
      case serviceProviderActionsTypes.PERSIST_SERVICE_PROVIDERS:
        this.store.dispatch(serviceProviderActions.loadPersistServiceProviders({data: brokerAction.payLoad}));
        break;
    }
  }
}
