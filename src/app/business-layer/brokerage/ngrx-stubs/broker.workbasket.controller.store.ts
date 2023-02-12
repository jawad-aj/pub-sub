/**
 * Created by Jawad  on 24/09/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as workBasketActionsTypes from '../../shared-types/actions/workBasketController.action.types';
import * as workBasketActions from '../../../data-layer/store/actions/workBasketController.actions';
import * as selectedRowActions from '../../../data-layer/store/actions/selected-row.actions';
import {
  assignBriefSelector,
  assignComboDataSelector,
  workBasketBriefSelector,
  workBasketComboDataSelector
} from '../../../data-layer/store/selectors/workbasketcontroller.selectors';
import {claimTypeWQSummarySelector, claimWQSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';

@Injectable()
export class BrokerWorkbasketControllerStore {
  brokerLabel: string = BrokerList.BROKER_WORKBASKET_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        workBasketComboData$: this.store.select(workBasketComboDataSelector).pipe(filter(value => value !== undefined)),
        workBasketBrief$: this.store.select(workBasketBriefSelector).pipe(filter(value => value !== undefined)),
        assignComboData$: this.store.select(assignComboDataSelector).pipe(filter(value => value !== undefined)),
        assignBrief$: this.store.select(assignBriefSelector).pipe(filter(value => value !== undefined)),
        claimWQSummary$: this.store.select(claimWQSummarySelector).pipe(filter(value => value !== undefined)),
        claimTypeWQSummary$: this.store.select(claimTypeWQSummarySelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case workBasketActionsTypes.GET_WORKBASKET_COMBO_DATA:
        this.store.dispatch(workBasketActions.loadWorkBasketComboData({data: brokerAction.payLoad}));
        break;
      case workBasketActionsTypes.GET_WORKBASKET_BRIEF:
        this.store.dispatch(workBasketActions.loadWorkBasketBrief({data: brokerAction.payLoad}));
        break;
      case workBasketActionsTypes.GET_ASSIGN_COMBO_DATA:
        this.store.dispatch(workBasketActions.loadAssignComboData({data: brokerAction.payLoad}));
        break;
      case workBasketActionsTypes.GET_ASSIGN_BRIEF:
        this.store.dispatch(workBasketActions.loadAssignBrief({data: brokerAction.payLoad}));
        break;
      case workBasketActionsTypes.GET_SELECTED_ROW:
        this.store.dispatch(selectedRowActions.loadSelectedRow({data: brokerAction.payLoad}));
        break;
    }
  }
}
