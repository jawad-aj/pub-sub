/**
 * Created by Jawad  on 24/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as independentReviewActionsTypes from '../../shared-types/actions/independentReviewController.action.types';
import * as independentReviewActions from '../../../data-layer/store/actions/independent-review-controller.actions';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {
  independentReviewApprovedBriefSelector,
  independentReviewBriefSelector,
  independentReviewClaimAuthorizationBriefSelector,
  independentReviewClaimAuthorizationComboDataSelector,
  independentReviewComboDataSelector
} from '../../../data-layer/store/selectors/independent-review-controller.selectors';

@Injectable()
export class BrokerIndependentReviewControllerStore {
  brokerLabel: string = BrokerList.BROKER_INDEPENDENT_REVIEW_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        independentReviewBrief$: this.store.select(independentReviewBriefSelector).pipe(filter(value => value !== undefined)),
        independentReviewComboData$: this.store.select(independentReviewComboDataSelector).pipe(filter(value => value !== undefined)),
        independentReviewClaimAuthorizationBrief$: this.store.select(independentReviewClaimAuthorizationBriefSelector).pipe(filter(value => value !== undefined)),
        independentReviewClaimAuthorizationComboData$: this.store.select(independentReviewClaimAuthorizationComboDataSelector).pipe(filter(value => value !== undefined)),
        independentReviewApprovedBrief$: this.store.select(independentReviewApprovedBriefSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case independentReviewActionsTypes.GET_INDEPENDENT_REVIEW_BRIEF:
        this.store.dispatch(independentReviewActions.loadIndependentReviewBrief({data: brokerAction.payLoad}));
        break;
      case independentReviewActionsTypes.GET_INDEPENDENT_REVIEW_COMBO_DATA:
        this.store.dispatch(independentReviewActions.loadIndependentReviewComboData({data: brokerAction.payLoad}));
        break;
      case independentReviewActionsTypes.GET_INDEPENDENT_REVIEW_CLAIM_AUTHORIZATION_BRIEF:
        this.store.dispatch(independentReviewActions.loadIndependentReviewClaimAuthorizationBrief({data: brokerAction.payLoad}));
        break;
      case independentReviewActionsTypes.GET_INDEPENDENT_REVIEW_CLAIM_AUTHORIZATION_COMBO_DATA:
        this.store.dispatch(independentReviewActions.loadIndependentReviewClaimAuthorizationComboData({data: brokerAction.payLoad}));
        break;
      case independentReviewActionsTypes.GET_INDEPENDENT_REVIEW_APPROVED_BRIEF:
        this.store.dispatch(independentReviewActions.loadIndependentReviewApprovedBrief({data: brokerAction.payLoad}));
        break;
    }
  }
}
