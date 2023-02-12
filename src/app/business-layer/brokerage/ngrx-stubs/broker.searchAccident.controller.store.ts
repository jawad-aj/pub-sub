/**
 * Created by Jawad  on 02/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as searchAccidentActionsTypes from '../../shared-types/actions/searchAccidentController.action.types';
import * as searchAccidentActions from '../../../data-layer/store/actions/search-accident-controller.actions';
import {searchAccidentComboDataSelector} from '../../../data-layer/store/selectors/search-accident-controller.selectors';
import {accidentListSummarySelector, accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  loadAccident,
  loadClearSearchAccidents,
  loadImplicitAccident,
  loadSearchAccidents
} from '../../../data-layer/store/actions/searchAccident.actions';
import {CmsParams} from '../../models/CmsParams';
import {AccidentService} from '../../services/accident.service';
import {LoginDataService} from '../../services/login-data.service';
import {loadSelectedRow} from '../../../data-layer/store/actions/selected-row.actions';

@Injectable()
export class BrokerSearchAccidentControllerStore {
  brokerLabel: string = BrokerList.BROKER_SEARCH_ACCIDENT_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>, private accident: AccidentService, private loginData: LoginDataService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        searchAccidentComboData$: this.store.select(searchAccidentComboDataSelector).pipe(filter(value => value !== undefined)),
        accidentListSummary$: this.store.select(accidentListSummarySelector).pipe(filter(value => value !== undefined)),
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case searchAccidentActionsTypes.GET_SEARCH_ACCIDENT_COMBO_DATA:
        this.store.dispatch(searchAccidentActions.loadSearchAccidentComboData({data: brokerAction.payLoad}));
        break;
      case searchAccidentActionsTypes.SEARCH_ACCIDENT:
        this.store.dispatch(loadSearchAccidents({data: brokerAction.payLoad}));
        break;
      case searchAccidentActionsTypes.GET_ACCIDENT:
        this.store.dispatch(loadAccident({data: brokerAction.payLoad}));
        break;
      case searchAccidentActionsTypes.GET_IMPLICIT_ACCIDENT:
        let cmsParam: CmsParams = new CmsParams();
        cmsParam.paramLong1 = this.accident.getAccident().accidentID;
        cmsParam.paramStr1 = this.loginData.getCompleteLoginName();
        brokerAction.payLoad.data = cmsParam;
        this.store.dispatch(loadImplicitAccident({data: brokerAction.payLoad}));
        break;
      case searchAccidentActionsTypes.GET_SELECTED_ROW:
        this.store.dispatch(loadSelectedRow({data: brokerAction.payLoad}));
        break;
      case searchAccidentActionsTypes.CLEAR_SEARCH_ACCIDENT:
        this.store.dispatch(loadClearSearchAccidents({data: brokerAction.payLoad}));
        break;

    }
  }
}
