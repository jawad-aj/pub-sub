/**
 * Created by Jawad  on 28/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as initialAssessmentActionsTypes from '../../shared-types/actions/initialAssessmentController.action.types';
import * as initialAssessmentActions from '../../../data-layer/store/actions/initial-assessment-controller.actions';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {
  initialAssessmentBriefSelector,
  initialAssessmentComboDataSelector
} from '../../../data-layer/store/selectors/initial-assessment-controller.selectors';

@Injectable()
export class BrokerInitialAssessmentControllerStore {
  brokerLabel: string = BrokerList.BROKER_INITIAL_ASSESSMENT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        brief$: this.store.select(initialAssessmentBriefSelector).pipe(filter(value => value !== undefined)),
        comboData$: this.store.select(initialAssessmentComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case initialAssessmentActionsTypes.GET_INITIAL_ASSESSMENT_BRIEF:
        this.store.dispatch(initialAssessmentActions.loadInitialAssessmentBrief({data: brokerAction.payLoad}));
        break;
      case initialAssessmentActionsTypes.GET_INITIAL_ASSESSMENT_COMBO_DATA:
        this.store.dispatch(initialAssessmentActions.loadInitialAssessmentComboData({data: brokerAction.payLoad}));
        break;

    }
  }
}
