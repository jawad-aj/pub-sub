/**
 * Created by Jawad  on 07/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as accidentPhaseVehicleSectionActionTypes from '../../shared-types/actions/accidentPhaseVehicleSectionController.action.types';
import * as accidentPhaseVehicleSectionActions from '../../../data-layer/store/actions/accident-phase-vehicle-section.actions';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  accidentPhaseVehicleBriefSelector,
  accidentPhaseVehicleComboDataSelector,
  accidentPhaseVehicleSectionComboDataSelector, accidentPhaseVehicleSelectedRecordSelector
} from '../../../data-layer/store/selectors/accident-phase-vehicle-section.selectors';

@Injectable()
export class BrokerAccidentPhaseVehicleSectionControllerStore {
  brokerLabel: string = BrokerList.BROKER_ACCIDENT_PHASE_VEHICLE_SECTION_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        vehicleSmartComboData$: this.store.select(accidentPhaseVehicleComboDataSelector).pipe(filter(value => value !== undefined)),
        vehicleSmartBrief$: this.store.select(accidentPhaseVehicleBriefSelector).pipe(filter(value => value !== undefined)),
        accidentApplicationVehicleSectionComboData$: this.store.select(accidentPhaseVehicleSectionComboDataSelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseVehicleSelectedRecord$: this.store.select(accidentPhaseVehicleSelectedRecordSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case accidentPhaseVehicleSectionActionTypes.GET_ACCIDENT_APP_VEHICLE_SECTION_COMBO_DATA:
        this.store.dispatch(accidentPhaseVehicleSectionActions.loadAccidentPhaseVehicleSectionComboData({data: brokerAction.payLoad}));
        break;
      case accidentPhaseVehicleSectionActionTypes.GET_ACCIDENT_APP_VEHICLE_COMBO_DATA:
        this.store.dispatch(accidentPhaseVehicleSectionActions.loadAccidentPhaseVehicleComboData({data: brokerAction.payLoad}));
        break;
      case accidentPhaseVehicleSectionActionTypes.GET_ACCIDENT_APP_VEHICLE_BRIEF:
        this.store.dispatch(accidentPhaseVehicleSectionActions.loadAccidentPhaseVehicleBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseVehicleSectionActionTypes.GET_ACCIDENT_APP_VEHICLE_ROW:
        this.store.dispatch(accidentPhaseVehicleSectionActions.loadAccidentPhaseVehicleSelectedRecord({data: brokerAction.payLoad}));
        break;

    }
  }
}
