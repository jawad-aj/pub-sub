/**
 * Created by Jawad  on 11/03/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as dynamicFormActionsTypes from '../../../shared-types/actions/system-admin/dynamicFormsController.action.types';
import * as dynamicFormActions from '../../../../data-layer/store/actions/system-admin/dynamic-form.actions';
import {GlobalState} from '../../../../data-layer/store/reducers';
import {BrokerAction} from '../../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from '../brokerlist';
import {dynamicFormSelector} from '../../../../data-layer/store/selectors/system-admin/dynamic-form.selectors';

@Injectable()
export class BrokerDynamicFormsControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_DYNAMIC_FORMS_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        dynamicFormSelector$: this.store.select(dynamicFormSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case dynamicFormActionsTypes.GET_DYNAMIC_FORMS:
        this.store.dispatch(dynamicFormActions.loadDynamicForms({data: brokerAction.payLoad}));
        break;
    }
  }
}
