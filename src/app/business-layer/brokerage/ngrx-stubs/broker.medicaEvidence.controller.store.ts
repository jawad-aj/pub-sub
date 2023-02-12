/**
 * Created by Jawad  on 20/11/2020.
 */

import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import * as medicalEvidenceActionsTypes from "../../shared-types/actions/medicalEvidenceController.action.types"
import * as medicalEvidenceActions from "../../../data-layer/store/actions/medical-evidence-controller.actions"
import {
  medicalEvidenceBriefSelector,
  medicalEvidenceComboDataSelector
} from "../../../data-layer/store/selectors/medical-evidence-controller.selectors";
import {claimAccidentSummarySelector} from "../../../data-layer/store/selectors/workBasket.selector";

@Injectable()
export class BrokerMedicalEvidenceControllerStore {
  brokerLabel: string = BrokerList.BROKER_MEDICAL_EVIDENCE_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        medicalEvidenceBrief$: this.store.select(medicalEvidenceBriefSelector).pipe(filter(value => value !== undefined)),
        medicalEvidenceComboData$: this.store.select(medicalEvidenceComboDataSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case medicalEvidenceActionsTypes.GET_MEDICAL_EVIDENCE_BRIEF:
        this.store.dispatch(medicalEvidenceActions.loadMedicalEvidenceBrief({data: brokerAction.payLoad}));
        break;
      case medicalEvidenceActionsTypes.GET_MEDICAL_EVIDENCE_COMBO_DATA:
        this.store.dispatch(medicalEvidenceActions.loadMedicalEvidenceComboData({data: brokerAction.payLoad}));
        break;

    }
  }
}
