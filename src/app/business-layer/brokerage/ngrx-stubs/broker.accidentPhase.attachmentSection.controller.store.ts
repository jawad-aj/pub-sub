/**
 * Created by Jawad  on 10/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as accidentPhaseAttachmentSectionActionTypes
  from '../../shared-types/actions/accidentPhaseAttachmentSectionController.action.types';
import * as accidentPhaseAttachmentSectionActions from '../../../data-layer/store/actions/accident-phase-attachment-section.actions';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  accidentPhaseAttachmentDialogBriefSelector,
  accidentPhaseAttachmentDialogComboDataSelector,
  accidentPhaseAttachmentDialogSelectedRecordSelector
} from '../../../data-layer/store/selectors/accident-phase-attachment-section.selectors';

@Injectable()
export class BrokerAccidentPhaseAttachmentSectionControllerStore {
  brokerLabel: string = BrokerList.BROKER_ACCIDENT_PHASE_ATTACHMENT_SECTION_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseAttachmentSectionBrief$: this.store.select(accidentPhaseAttachmentDialogBriefSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseAttachmentSectionComboData$: this.store.select(accidentPhaseAttachmentDialogComboDataSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseAttachmentSelectedRecord$: this.store.select(accidentPhaseAttachmentDialogSelectedRecordSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case accidentPhaseAttachmentSectionActionTypes.GET_ACCIDENT_APP_ATTACHMENT_SECTION_BRIEF:
        this.store.dispatch(accidentPhaseAttachmentSectionActions.loadAccidentPhaseAttachmentDialogBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseAttachmentSectionActionTypes.GET_ACCIDENT_APP_ATTACHMENT_SECTION_COMBO_DATA:
        this.store.dispatch(accidentPhaseAttachmentSectionActions.loadAccidentPhaseAttachmentDialogComboData({data: brokerAction.payLoad}));
        break;
      case accidentPhaseAttachmentSectionActionTypes.GET_ACCIDENT_APP_ATTACHMENT_SECTION_RECORD:
        this.store.dispatch(accidentPhaseAttachmentSectionActions.loadAccidentPhaseAttachmentDialogSelectedRecord({data: brokerAction.payLoad}));
        break;
    }
  }
}
