/**
 * Created by Jawad  on 20/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as diaryActionsTypes from '../../shared-types/actions/diaryController.action.types';
import * as diaryActions from '../../../data-layer/store/actions/diary-controller.actions';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {diaryBriefSelector} from '../../../data-layer/store/selectors/diary-controller.selectors';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';

@Injectable()
export class BrokerApplicationPrintControllerStore {
  brokerLabel: string = BrokerList.BROKER_APPLICATION_PRINT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
  }
}
