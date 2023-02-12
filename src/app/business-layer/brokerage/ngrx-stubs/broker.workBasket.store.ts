/**
 * Created by Jawad  on 10/08/2020.
 */

import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import * as workBasketActionTypes from "../../shared-types/actions/workBasket.action.types"
import * as workBasketActions from "../../../data-layer/store/actions/workBasket.actions"
import {
  claimAccidentSummarySelector,
  claimTypeWQSummarySelector,
  claimWQSummarySelector
} from "../../../data-layer/store/selectors/workBasket.selector";
import {JsonData} from "../../models/JsonData";
import {LoginDataService} from "../../services/login-data.service";
import {RemoteService} from "../../services/remote-services.service";
import {CmsParams} from '../../models/CmsParams';
import {SelectedRowDataService} from '../../services/selected-row.service';

@Injectable()
export class BrokerWorkBasketStore {
  brokerLabel: string = BrokerList.BROKER_WORKBASKET_STORE;

  constructor(private store: Store<GlobalState>, private loginData: LoginDataService, private selectedRow: SelectedRowDataService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        claimWQSummary$: this.store.select(claimWQSummarySelector).pipe(filter(value => value !== undefined)),
        claimTypeWQSummary$: this.store.select(claimTypeWQSummarySelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case workBasketActionTypes.GET_CL_CLAIM_WQSUMMARY:
        let jsonData: JsonData = new JsonData();
        jsonData.summaryFilter = null;
        jsonData.paramInt1 = this.loginData.getProperty('userID');
        jsonData.paramStr = this.loginData.getProperty('logonCode');
        brokerAction.payLoad.data = jsonData;
        this.store.dispatch(workBasketActions.loadCLClaimWQSummary({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.GET_BPC_CLAIM_WQSUMMARY:
        this.store.dispatch(workBasketActions.loadBPCClaimWQSummary({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.GET_SEARCH_CLAIM_WQSUMMARY:
        this.store.dispatch(workBasketActions.loadSearchClaimWQSummary({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.GET_CLAIM_ACCIDENT_SUMMARY:
        this.store.dispatch(workBasketActions.loadClaimAccidentSummary({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.GET_IMPLICIT_CLAIM_ACCIDENT_SUMMARY:
        let cmsParams: CmsParams = new CmsParams();
        cmsParams.paramLong1 = this.selectedRow.getProperty('accidentID');
        cmsParams.paramLong2 = this.selectedRow.getProperty('vehicleID');
        cmsParams.paramLong3 = this.selectedRow.getProperty('claimID');
        cmsParams.paramLong4 = this.loginData.getProperty('userID');
        cmsParams.paramStr1 = this.loginData.getCompleteLoginName();
        brokerAction.payLoad.data=cmsParams;
        this.store.dispatch(workBasketActions.loadImplicitClaimAccidentSummary({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.ASSIGN_CLAIM:
        this.store.dispatch(workBasketActions.loadAssignClaim({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.RE_ASSIGN_CLAIM:
        this.store.dispatch(workBasketActions.loadReAssignClaim({data: brokerAction.payLoad}));
        break;
      case workBasketActionTypes.TAKE_CONTROL_CLAIM:
        this.store.dispatch(workBasketActions.loadTakeControlClaim({data: brokerAction.payLoad}));
        break;
    }
  }
}
