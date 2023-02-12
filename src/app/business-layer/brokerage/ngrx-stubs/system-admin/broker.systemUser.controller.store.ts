/**
 * Created by Jawad  on 15/02/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as systemUserActionsTypes
  from '../../../shared-types/actions/system-admin/systemUserController.action.types';
import * as systemUserActions from '../../../../data-layer/store/actions/system-admin/system-user.actions';
import {GlobalState} from "../../../../data-layer/store/reducers";
import {BrokerAction} from "../../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "../brokerlist";
import {
  systemUsersSelector,
  systemUserTypesSelector
} from "../../../../data-layer/store/selectors/system-admin/system-user.selectors";
import {BrokerActionPayLoad} from '../../../models/BrokerActionPayLoad';
import {SystemAdminGenericPayloadService} from '../../../services/SystemAdmin-GenericPayload.service';

@Injectable()
export class BrokerSystemUserControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_SYSTEM_USER_STORE;

  constructor(private store: Store<GlobalState>, private genericPayloadService: SystemAdminGenericPayloadService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        systemUserTypes$: this.store.select(systemUserTypesSelector).pipe(filter(value => value !== undefined)),
        systemUsers$: this.store.select(systemUsersSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case systemUserActionsTypes.GET_SYSTEM_USER_TYPES:
        this.store.dispatch(systemUserActions.loadSystemUserTypes({data: brokerAction.payLoad}));
        break;
      case systemUserActionsTypes.GET_SYSTEM_USERS:
        this.store.dispatch(systemUserActions.loadSystemUsers({data: brokerAction.payLoad}));
        break;
      case systemUserActionsTypes.PERSIST_SYSTEM_USERS:
        this.store.dispatch(systemUserActions.loadPersistSystemUsers({data: brokerAction.payLoad}));
        break;
      case systemUserActionsTypes.RETRIEVE_SYSTEM_USERS:
        let payload: BrokerActionPayLoad = new BrokerActionPayLoad();
        payload.data = this.genericPayloadService.getPayload();
        payload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(systemUserActions.loadRetrieveSystemUsers({data:payload}));
        break;
      case systemUserActionsTypes.SEND_SYSTEM_USER_PASSWORD:
        this.store.dispatch(systemUserActions.loadSendSystemUserPassword({data: brokerAction.payLoad}));
        break;
    }
  }
}
