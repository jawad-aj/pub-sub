/**
 * Created by Jawad  on 12/02/2021.
 */

import {Injectable} from '@angular/core';

import {filter} from 'rxjs/operators';
import * as parameterActionsTypes from '../../../shared-types/actions/system-admin/parametersController.action.types';
import * as parameterActions from '../../../../data-layer/store/actions/system-admin/parameters.actions';
import {GlobalState} from "../../../../data-layer/store/reducers";
import {BrokerAction} from "../../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "../brokerlist";
import {
  companyParametersSelector,
  parameterCategoriesSelector
} from "../../../../data-layer/store/selectors/system-admin/parameters.selectors";
import {CmsParams} from "../../../models/CmsParams";
import {BrokerActionPayLoad} from '../../../models/BrokerActionPayLoad';
import {SystemAdminGenericPayloadService} from '../../../services/SystemAdmin-GenericPayload.service';

@Injectable()
export class BrokerParametersControllerStore {
  brokerLabel: string = BrokerList.BROKER_SYSTEM_ADMIN_PARAMETERS_STORE;

  constructor(private store: Store<GlobalState>, private genericPayloadService: SystemAdminGenericPayloadService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        parameterCategories$: this.store.select(parameterCategoriesSelector).pipe(filter(value => value !== undefined)),
        companyParameters$: this.store.select(companyParametersSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case parameterActionsTypes.GET_PARAMETER_CATEGORIES:
        let cmsParams: CmsParams = new CmsParams();
        cmsParams.paramStr1 = null;
        brokerAction.payLoad.data = cmsParams;
        this.store.dispatch(parameterActions.loadGetParameterCategories({data: brokerAction.payLoad}));
        break;
      case parameterActionsTypes.GET_COMPANY_PARAMETER:
        this.store.dispatch(parameterActions.loadGetCompanyParameters({data: brokerAction.payLoad}));
        break;
      case parameterActionsTypes.RETRIEVE_COMPANY_PARAMETER:
        let payload: BrokerActionPayLoad = new BrokerActionPayLoad();
        payload.data = this.genericPayloadService.getPayload();
        payload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(parameterActions.loadRetrieveCompanyParameters({data: payload}));
        break;
      case parameterActionsTypes.UPDATE_COMPANY_PARAMETER:
        this.store.dispatch(parameterActions.loadUpdateCompanyParameters({data: brokerAction.payLoad}));
        break;
    }
  }
}
