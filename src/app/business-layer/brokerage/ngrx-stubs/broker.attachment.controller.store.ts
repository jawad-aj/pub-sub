/**
 * Created by Jawad  on 04/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as attachmentActionsTypes from '../../shared-types/actions/attachmentController.action.types';
import * as attachmentActions from '../../../data-layer/store/actions/attachment-controller.actions';
import {
  accidentPhaseAttachmentGridBriefSelector,
  accidentPhaseAttachmentGridComboDataSelector,
  attachmentBriefSelector,
  attachmentComboDataSelector
} from '../../../data-layer/store/selectors/attachment-controller.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';

@Injectable()
export class BrokerAttachmentControllerStore {
  brokerLabel: string = BrokerList.BROKER_ATTACHMENT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        brief$: this.store.select(attachmentBriefSelector).pipe(filter(value => value !== undefined)),
        comboData$: this.store.select(attachmentComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseAttachmentGridBrief$: this.store.select(accidentPhaseAttachmentGridBriefSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseAttachmentGridComboData$: this.store.select(accidentPhaseAttachmentGridComboDataSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case attachmentActionsTypes.GET_ATTACHMENT_BRIEF:
        this.store.dispatch(attachmentActions.loadAttachmentBrief({data: brokerAction.payLoad}));
        break;
      case attachmentActionsTypes.GET_ATTACHMENT_COMBO_DATA:
        this.store.dispatch(attachmentActions.loadAttachmentComboData({data: brokerAction.payLoad}));
        break;
      case attachmentActionsTypes.GET_ACCIDENT_APP_ATTACHMENT_BRIEF:
        this.store.dispatch(attachmentActions.loadAccidentPhaseAttachmentGridBrief({data: brokerAction.payLoad}));
        break;
      case attachmentActionsTypes.GET_ACCIDENT_APP_ATTACHMENT_COMBO_DATA:
        this.store.dispatch(attachmentActions.loadAccidentPhaseAttachmentGridComboData({data: brokerAction.payLoad}));
        break;
    }
  }
}
