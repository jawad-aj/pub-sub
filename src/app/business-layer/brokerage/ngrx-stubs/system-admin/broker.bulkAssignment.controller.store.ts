/**
 * Created by Jawad  on 15/02/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as bulkAssignmentActionsTypes
  from '../../../shared-types/actions/system-admin/bulkAssignmentController.action.types';
import * as bulkAssignmentActions from '../../../../data-layer/store/actions/system-admin/bulk-assignment.actions';
import {GlobalState} from "../../../../data-layer/store/reducers";
import {BrokerAction} from "../../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "../brokerlist";
import {
  bulkAssignmentAccidentsSelector,
  userLookupSelector
} from "../../../../data-layer/store/selectors/system-admin/bulk-assignment.selectors";
import {BrokerActionPayLoad} from '../../../models/BrokerActionPayLoad';
import {SystemAdminGenericPayloadService} from '../../../services/SystemAdmin-GenericPayload.service';

@Injectable()
export class BrokerBulkAssignmentControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_BULK_ASSIGNMENT_STORE;

  constructor(private store: Store<GlobalState>, private genericPayloadService: SystemAdminGenericPayloadService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        userLookup$: this.store.select(userLookupSelector).pipe(filter(value => value !== undefined)),
        bulkAssignmentAccidents$: this.store.select(bulkAssignmentAccidentsSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case bulkAssignmentActionsTypes.GET_USER_LOOKUPS:
        this.store.dispatch(bulkAssignmentActions.loadGetUserLookup({data: brokerAction.payLoad}));
        break;
      case bulkAssignmentActionsTypes.GET_BULK_ASSIGNMENT_ACCIDENTS:
        this.store.dispatch(bulkAssignmentActions.loadGetAccidents({data: brokerAction.payLoad}));
        break;
      case bulkAssignmentActionsTypes.RETRIEVE_BULK_ASSIGNMENT_ACCIDENTS:
        let payload: BrokerActionPayLoad = new BrokerActionPayLoad();
        payload.data = this.genericPayloadService.getPayload();
        payload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(bulkAssignmentActions.loadRetrieveAccidents({data:payload}));
        break;
      case bulkAssignmentActionsTypes.ASSIGN_BULK_ASSIGNMENT_ACCIDENTS:
        this.store.dispatch(bulkAssignmentActions.loadAssignBulkAccidents({data: brokerAction.payLoad}));
        break;
    }
  }
}
