/**
 * Created by Jawad  on 23/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as fraudCheckActionsTypes from '../../shared-types/actions/fraudCheckController.action.types';
import * as fraudCheckActions from '../../../data-layer/store/actions/fraud-check-controller.actions';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {
  fraudCheckApprovedBriefSelector,
  fraudCheckBriefSelector,
  fraudCheckComboDataSelector, investigationApprovalBriefSelector,
  investigationApprovalComboDataSelector,
  reviewApprovedBriefSelector,
  reviewApprovedComboDataSelector
} from '../../../data-layer/store/selectors/fraud-check-controller.selectors';

@Injectable()
export class BrokerFraudCheckControllerStore {
  brokerLabel: string = BrokerList.BROKER_FRAUD_CHECK_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        fraudCheckBrief$: this.store.select(fraudCheckBriefSelector).pipe(filter(value => value !== undefined)),
        fraudCheckComboData$: this.store.select(fraudCheckComboDataSelector).pipe(filter(value => value !== undefined)),
        fraudCheckApprovedBrief$: this.store.select(fraudCheckApprovedBriefSelector).pipe(filter(value => value !== undefined)),
        investigationApprovalComboData$: this.store.select(investigationApprovalComboDataSelector).pipe(filter(value => value !== undefined)),
        reviewApprovedBrief$: this.store.select(reviewApprovedBriefSelector).pipe(filter(value => value !== undefined)),
        reviewApprovedComboData$: this.store.select(reviewApprovedComboDataSelector).pipe(filter(value => value !== undefined)),
        investigationApprovalBrief$: this.store.select(investigationApprovalBriefSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case fraudCheckActionsTypes.GET_FRAUD_CHECK_BRIEF:
        this.store.dispatch(fraudCheckActions.loadFraudCheckBrief({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_FRAUD_CHECK_COMBO_DATA:
        this.store.dispatch(fraudCheckActions.loadFraudCheckComboData({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_REVIEW_APPROVED_BRIEF:
        this.store.dispatch(fraudCheckActions.loadReviewApprovedBrief({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_REVIEW_APPROVED_COMBO_DATA:
        this.store.dispatch(fraudCheckActions.loadReviewApprovedComboData({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_FRAUD_CHECK_APPROVED_BRIEF:
        this.store.dispatch(fraudCheckActions.loadFraudCheckApprovedBrief({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_INVESTIGATION_APPROVAL_COMBO_DATA:
        this.store.dispatch(fraudCheckActions.loadInvestigationApprovalComboData({data: brokerAction.payLoad}));
        break;
      case fraudCheckActionsTypes.GET_INVESTIGATION_APPROVAL_BRIEF:
        this.store.dispatch(fraudCheckActions.loadInvestigationApprovalBrief({data: brokerAction.payLoad}));
        break;

    }
  }
}
