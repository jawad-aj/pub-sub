/**
 * Created by Jawad  on 14/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as accidentActionsTypes from '../../shared-types/actions/accidentController.action.types';
import * as accidentActions from '../../../data-layer/store/actions/accident-controller.actions';
import {
  accidentApplicationAccidentBriefSelector,
  accidentApplicationAccidentComboDataSelector,
  accidentBriefSelector,
  accidentComboDataSelector
} from '../../../data-layer/store/selectors/accident-controller.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';

@Injectable()
export class BrokerAccidentControllerStore {
  brokerLabel: string = BrokerList.BROKER_ACCIDENT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        accidentBrief$: this.store.select(accidentBriefSelector).pipe(filter(value => value !== undefined)),
        accidentComboData$: this.store.select(accidentComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentApplicationAccidentBrief$: this.store.select(accidentApplicationAccidentBriefSelector).pipe(filter(value => value !== undefined)),
        accidentApplicationAccidentComboData$: this.store.select(accidentApplicationAccidentComboDataSelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case accidentActionsTypes.GET_ACCIDENT_BRIEF:
        this.store.dispatch(accidentActions.loadAccidentBrief({data: brokerAction.payLoad}));
        break;
      case accidentActionsTypes.GET_ACCIDENT_COMBO_DATA:
        this.store.dispatch(accidentActions.loadAccidentComboData({data: brokerAction.payLoad}));
        break;
      case accidentActionsTypes.GET_ACCIDENT_APP_ACCIDENT_BRIEF:
        this.store.dispatch(accidentActions.loadAccidentApplicationAccidentBrief({data: brokerAction.payLoad}));
        break;
      case accidentActionsTypes.GET_ACCIDENT_APP_ACCIDENT_COMBO_DATA:
        this.store.dispatch(accidentActions.loadAccidentApplicationAccidentComboData({data: brokerAction.payLoad}));
        break;

    }
  }
}
