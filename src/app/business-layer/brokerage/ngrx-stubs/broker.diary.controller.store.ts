/**
 * Created by Jawad  on 29/10/2020.
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

@Injectable()
export class BrokerDiaryControllerStore {
  brokerLabel: string = BrokerList.BROKER_DIARY_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        brief$: this.store.select(diaryBriefSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case diaryActionsTypes.GET_DIARY_BRIEF:
        this.store.dispatch(diaryActions.loadDiaryBrief({data: brokerAction.payLoad}));
        break;
    }
  }
}
