/**
 * Created by Jawad  on 27/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as vehicleActionsTypes from '../../shared-types/actions/vehicleController.action.types';
import * as vehicleActions from '../../../data-layer/store/actions/vehicle-controller.actions';
import * as thirdPartyActions from '../../../data-layer/store/actions/third-party.actions';
import {vehicleBriefSelector, vehicleComboDataSelector} from '../../../data-layer/store/selectors/vehicle-controller.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {vehicleSummarySelector} from '../../../data-layer/store/selectors/vehicle.selector';
import {CTPVIRMSelector, driverPictureSelector, driverValidationSelector} from '../../../data-layer/store/selectors/third-party.selectors';

@Injectable()
export class BrokerVehicleControllerStore {
  brokerLabel: string = BrokerList.BROKER_VEHICLE_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        vehicleSummary$: this.store.select(vehicleSummarySelector).pipe(filter(value => value !== undefined)),
        driverPicture$: this.store.select(driverPictureSelector).pipe(filter(value => value !== undefined)),
        driverValidation$: this.store.select(driverValidationSelector).pipe(filter(value => value !== undefined)),
        CTPVIRM$: this.store.select(CTPVIRMSelector).pipe(filter(value => value !== undefined)),
        vehicleSmartComboData$: this.store.select(vehicleComboDataSelector).pipe(filter(value => value !== undefined)),
        vehicleSmartBrief$: this.store.select(vehicleBriefSelector).pipe(filter(value => value !== undefined)),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined))
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case vehicleActionsTypes.GET_VEHICLE_BRIEF:
        this.store.dispatch(vehicleActions.loadVehicleBrief({data: brokerAction.payLoad}));
        break;
      case vehicleActionsTypes.GET_VEHICLE_COMBO_DATA:
        this.store.dispatch(vehicleActions.loadVehicleComboData({data: brokerAction.payLoad}));
        break;
      case vehicleActionsTypes.GET_CTP_VIRM:
        this.store.dispatch(thirdPartyActions.loadVehicleRequest({data: brokerAction.payLoad}));
        break;
      case vehicleActionsTypes.GET_DRIVER_PICTURE:
        this.store.dispatch(thirdPartyActions.loadDriverPicture({data: brokerAction.payLoad}));
        break;
      case vehicleActionsTypes.GET_DRIVER_VALIDATION:
        this.store.dispatch(thirdPartyActions.loadDriverRequest({data: brokerAction.payLoad}));
        break;

    }
  }
}
