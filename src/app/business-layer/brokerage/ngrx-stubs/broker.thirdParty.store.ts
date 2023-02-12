/**
 * Created by Jawad  on 27/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import {CTPVIRMSelector, driverPictureSelector, driverValidationSelector} from '../../../data-layer/store/selectors/third-party.selectors';
import {vehicleComboDataSelector} from '../../../data-layer/store/selectors/vehicle-controller.selectors';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  accidentPhaseVehicleComboDataSelector,
  accidentPhaseVehicleSelectedRecordSelector
} from '../../../data-layer/store/selectors/accident-phase-vehicle-section.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';

@Injectable()
export class BrokerThirdPartyStore {
  brokerLabel: string = BrokerList.BROKER_THIRD_PARTY_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        driverPicture$: this.store.select(driverPictureSelector).pipe(filter(value => value !== undefined)),
        driverValidation$: this.store.select(driverValidationSelector).pipe(filter(value => value !== undefined)),
        CTPVIRM$: this.store.select(CTPVIRMSelector).pipe(filter(value => value !== undefined)),
        vehicleSmartComboData$: this.store.select(vehicleComboDataSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseVehicleSmartComboData$: this.store.select(accidentPhaseVehicleComboDataSelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseVehicleSelectedRecord$: this.store.select(accidentPhaseVehicleSelectedRecordSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
  }
}
