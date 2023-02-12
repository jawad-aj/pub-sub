/**
 * Created by Jawad  on 09/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as claimActionTypes from '../../shared-types/actions/claimController.action.types';
import * as claimActions from '../../../data-layer/store/actions/claim.action';
import * as claimControllerActions from '../../../data-layer/store/actions/claim-controller.actions';
import {claimSummarySelector} from '../../../data-layer/store/selectors/claim.selector';
import {
  claimantBriefSelector,
  claimBriefSelector,
  claimComboDataSelector, claimServiceProviderBriefSelector,
} from '../../../data-layer/store/selectors/claim-controller.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';

@Injectable()
export class BrokerClaimControllerStore {
  brokerLabel: string = BrokerList.BROKER_CLAIM_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        claimSummary$: this.store.select(claimSummarySelector).pipe(filter(value => value !== undefined)),
        claimSmartBrief$: this.store.select(claimBriefSelector).pipe(filter(value => value !== undefined)),
        claimantBrief$: this.store.select(claimantBriefSelector).pipe(filter(value => value !== undefined)),
        claimServiceProviderBrief$: this.store.select(claimServiceProviderBriefSelector).pipe(filter(value => value !== undefined)),
        claimSmartComboData$: this.store.select(claimComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case claimActionTypes.SHOW_CLAIM:
        this.store.dispatch(claimActions.loadShowClaim({data: brokerAction.payLoad}));
        break;
      case claimActionTypes.GET_CLAIM_BRIEF:
        this.store.dispatch(claimControllerActions.loadClaimBrief({data: brokerAction.payLoad}));
        break;
      case claimActionTypes.GET_CLAIMANT_BRIEF:
        this.store.dispatch(claimControllerActions.loadClaimantBrief({data: brokerAction.payLoad}));
        break;
      case claimActionTypes.GET_CLAIM_SERVICE_PROVIDER_BRIEF:
        this.store.dispatch(claimControllerActions.loadClaimServiceProviderBrief({data: brokerAction.payLoad}));
        break;
      case claimActionTypes.GET_CLAIM_COMBO_DATA:
        this.store.dispatch(claimControllerActions.loadClaimComboData({data: brokerAction.payLoad}));
        break;
    }
  }
}
