/**
 * Created by Jawad  on 12/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as footerActionsTypes from '../../shared-types/actions/footerController.action.types';
import * as footerActions from '../../../data-layer/store/actions/footer.actions';
import {footerSelector} from '../../../data-layer/store/selectors/footer.selectors';

@Injectable()
export class BrokerFooterControllerStore {
  brokerLabel: string = BrokerList.BROKER_FOOTER_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        footerBrief$: this.store.select(footerSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case footerActionsTypes.GET_FOOTER_BRIEF:
        this.store.dispatch(footerActions.loadFooter({data: brokerAction.payLoad}));
        break;

    }
  }
}
