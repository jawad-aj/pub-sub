/**
 * Created by Jawad  on 11/02/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as paymentActionsTypes from '../../../shared-types/actions/system-admin/paymentsController.action.types';
import * as paymentActions from '../../../../data-layer/store/actions/system-admin/payments.actions';
import {PaymentFilter} from '../../../models/PaymentFilter';
import {GlobalState} from '../../../../data-layer/store/reducers';
import {BrokerAction} from '../../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from '../brokerlist';
import {
  paymentBatchSelector,
  paymentFilterSelector,
  paymentsSelector,
  paymentTypesSelector,
  unBatchedPaymentsSelector
} from '../../../../data-layer/store/selectors/system-admin/payments.selectors';
import {SystemAdminPaymentFilterService} from '../../../services/SystemAdmin-PaymentFilter.service';

@Injectable()
export class BrokerPaymentsControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_PAYMENT_STORE;

  constructor(private store: Store<GlobalState>, private paymentFilterService: SystemAdminPaymentFilterService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        payments$: this.store.select(paymentsSelector).pipe(filter(value => value !== undefined)),
        paymentTypes$: this.store.select(paymentTypesSelector).pipe(filter(value => value !== undefined)),
        paymentBatches$: this.store.select(paymentBatchSelector).pipe(filter(value => value !== undefined)),
        unBatchedPayments$: this.store.select(unBatchedPaymentsSelector).pipe(filter(value => value !== undefined)),
        paymentFilter$: this.store.select(paymentFilterSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case paymentActionsTypes.GET_PAYMENTS:
        let payload: PaymentFilter = new PaymentFilter();
        payload.filterType = null;
        payload.fromDate = null;
        payload.toDate = null;
        payload.paymentType = null;
        payload.toAmount = 0.0;
        payload.fromAmount = 0.0;
        brokerAction.payLoad.data = payload;
        this.store.dispatch(paymentActions.loadGetPayments({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_FILTERED_PAYMENTS:
        if (brokerAction.payLoad.data === true) {
          brokerAction.payLoad.data = this.paymentFilterService.getFilter();
        }
        this.store.dispatch(paymentActions.loadGetFilteredPayments({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_PAYMENT_TYPES:
        this.store.dispatch(paymentActions.loadGetPaymentTypes({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_PAYMENT_BATCHES:
        this.store.dispatch(paymentActions.loadGetPaymentBatch({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.CREATE_BATCH:
        this.store.dispatch(paymentActions.loadCreateBatch({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.CHANGE_BATCH_STATUS:
        this.store.dispatch(paymentActions.loadChangeBatchStatus({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.EDIT_BATCH_PAYMENTS:
        this.store.dispatch(paymentActions.loadEditBatchPayment({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_UN_BATCH_PAYMENTS:
        this.store.dispatch(paymentActions.loadUnBatchedPayments({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.GET_PAYMENT_FILTER:
        this.store.dispatch(paymentActions.loadPaymentFilter({data: brokerAction.payLoad}));
        break;
      case paymentActionsTypes.EXPORT_BATCH_PAYMENTS:
        this.store.dispatch(paymentActions.loadExportBatch({data: brokerAction.payLoad}));
        break;
    }
  }
}
