/**
 * Created by Jawad  on 21/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import {isDirtySelector} from '../../../data-layer/store/selectors/isdirty.selectors';

@Injectable()
export class BrokerIsDirtyStore {
  brokerLabel: string = BrokerList.BROKER_IS_DIRTY_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        isDirty$: this.store.select(isDirtySelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {

  }
}
