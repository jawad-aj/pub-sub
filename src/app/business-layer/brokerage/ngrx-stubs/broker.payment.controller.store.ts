/**
 * Created by Jawad  on 06/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as paymentActionsTypes from '../../shared-types/actions/paymentController.action.types';
import * as paymentActions from '../../../data-layer/store/actions/payment-controller.actions';
import {paymentBriefSelector, paymentComboDataSelector} from '../../../data-layer/store/selectors/payment-controller.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';

@Injectable()
export class BrokerPaymentControllerStore {
  brokerLabel: string = BrokerList.BROKER_PAYMENT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        brief$: this.store.select(paymentBriefSelector).pipe(filter(value => value !== undefined)),
        comboData$: this.store.select(paymentComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case paymentActionsTypes.GET_PAYMENT_BRIEF:
        this.store.dispatch(paymentActions.loadPaymentBrief({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_PAYMENT_COMBO_DATA:
        this.store.dispatch(paymentActions.loadPaymentComboData({data: brokerAction.payLoad}));
        break;

    }
  }
}
