/**
 * Created by Jawad  on 24/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as claimOfferActionsTypes from '../../shared-types/actions/claimOfferController.action.types';
import * as claimOfferActions from '../../../data-layer/store/actions/claim-offer-controller.actions';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {
  claimOfferApprovedBriefSelector,
  claimOfferBriefSelector,
  claimOfferClaimAuthorizationBriefSelector, claimOfferComboDataSelector
} from '../../../data-layer/store/selectors/claim-offer-controller.selectors';
import {independentReviewClaimAuthorizationComboDataSelector} from '../../../data-layer/store/selectors/independent-review-controller.selectors';

@Injectable()
export class BrokerClaimOfferControllerStore {
  brokerLabel: string = BrokerList.BROKER_CLAIM_OFFER_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        claimOfferBrief$: this.store.select(claimOfferBriefSelector).pipe(filter(value => value !== undefined)),
        claimOfferComboData$: this.store.select(claimOfferComboDataSelector).pipe(filter(value => value !== undefined)),
        claimOfferClaimAuthorizationBrief$: this.store.select(claimOfferClaimAuthorizationBriefSelector).pipe(filter(value => value !== undefined)),
        claimOfferApprovedBrief$: this.store.select(claimOfferApprovedBriefSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case claimOfferActionsTypes.GET_CLAIM_OFFER_BRIEF:
        this.store.dispatch(claimOfferActions.loadClaimOfferBrief({data: brokerAction.payLoad}));
        break;
      case claimOfferActionsTypes.GET_CLAIM_OFFER_CLAIM_AUTHORIZATION_BRIEF:
        this.store.dispatch(claimOfferActions.loadClaimOfferClaimAuthorizationBrief({data: brokerAction.payLoad}));
        break;
      case claimOfferActionsTypes.GET_CLAIM_OFFER_COMBO_DATA:
        this.store.dispatch(claimOfferActions.loadClaimOfferComboData({data: brokerAction.payLoad}));
        break;
      case claimOfferActionsTypes.GET_CLAIM_OFFER_APPROVED_BRIEF:
        this.store.dispatch(claimOfferActions.loadClaimOfferApprovedBrief({data: brokerAction.payLoad}));
        break;
    }
  }
}
