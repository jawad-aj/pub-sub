/**
 * Created by Jawad  on 09/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as accidentPhaseClaimSectionActionTypes from '../../shared-types/actions/accidentPhaseClaimSectionController.action.types';
import * as accidentPhaseClaimSectionActions from '../../../data-layer/store/actions/accident-phase-claim-section.actions';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  accidentPhaseClaimantBriefSelector,
  accidentPhaseClaimBriefSelector,
  accidentPhaseClaimComboDataSelector, accidentPhaseClaimSectionBriefSelector,
  accidentPhaseClaimSectionComboDataSelector, accidentPhaseClaimSelectedRecordSelector, accidentPhaseClaimServiceProviderBriefSelector
} from '../../../data-layer/store/selectors/accident-phase-claim-section.selectors';

@Injectable()
export class BrokerAccidentPhaseClaimSectionControllerStore {
  brokerLabel: string = BrokerList.BROKER_ACCIDENT_PHASE_CLAIM_SECTION_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        claimSmartComboData$: this.store.select(accidentPhaseClaimComboDataSelector).pipe(filter(value => value !== undefined)),
        claimSmartBrief$: this.store.select(accidentPhaseClaimBriefSelector).pipe(filter(value => value !== undefined)),
        claimantBrief$: this.store.select(accidentPhaseClaimantBriefSelector).pipe(filter(value => value !== undefined)),
        claimServiceProviderBrief$: this.store.select(accidentPhaseClaimServiceProviderBriefSelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentApplicationClaimSectionComboData$: this.store.select(accidentPhaseClaimSectionComboDataSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseClaimSelectedRecord$: this.store.select(accidentPhaseClaimSelectedRecordSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseClaimSectionBrief$: this.store.select(accidentPhaseClaimSectionBriefSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIM_SECTION_COMBO_DATA:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimSectionComboData({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIM_COMBO_DATA:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimComboData({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_SMART_CLAIM_BRIEF:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIM_SECTION_BRIEF:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimSectionBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIM_SERVICE_PROVIDER_BRIEF:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimServiceProviderBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIMANT_BRIEF:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimantBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseClaimSectionActionTypes.GET_ACCIDENT_APP_CLAIM_ROW:
        this.store.dispatch(accidentPhaseClaimSectionActions.loadAccidentPhaseClaimSelectedRecord({data: brokerAction.payLoad}));
        break;

    }
  }
}
