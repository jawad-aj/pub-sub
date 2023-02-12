/**
 * Created by Jawad  on 13/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as headerActionsTypes from '../../shared-types/actions/headerController.action.types';
import * as headerActions from '../../../data-layer/store/actions/header-controller.actions';
import {headerComboDataSelector, headersSelector} from '../../../data-layer/store/selectors/header-controller.selectors';
import {applicationHeaderInfoSelector} from '../../../data-layer/store/selectors/application-header-info.selectors';

@Injectable()
export class BrokerHeaderControllerStore {
  brokerLabel: string = BrokerList.BROKER_HEADER_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        headerComboData$: this.store.select(headerComboDataSelector).pipe(filter(value => value !== undefined)),
        headerData$: this.store.select(headersSelector).pipe(filter(value => value !== undefined)),
        applicationHeaderInfo$: this.store.select(applicationHeaderInfoSelector)
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case headerActionsTypes.GET_HEADER_COMBO_DATA:
        this.store.dispatch(headerActions.loadHeaderComboData({data: brokerAction.payLoad}));
        break;
      case headerActionsTypes.GET_HEADER_DATA:
        this.store.dispatch(headerActions.loadHeaders({data: "header.json"}));
        break;
    }
  }
}
