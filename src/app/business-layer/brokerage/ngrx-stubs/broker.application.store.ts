/**
 * Created by Jawad  on 14/10/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import * as applicationActionsTypes from '../../shared-types/actions/application.action.types';
import * as applicationActions from '../../../data-layer/store/actions/application.actions';
import {loadExitApplication} from '../../../data-layer/store/actions/exit-application.actions';
import {ClaimAccidentSummaryService} from '../../services/claimAccidentSummary.service';
import {JsonData} from '../../models/JsonData';
import {LoginDataService} from '../../services/login-data.service';
import {AccidentService} from '../../services/accident.service';
import {filter} from 'rxjs/operators';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {applicationHeaderInfoSelector} from '../../../data-layer/store/selectors/application-header-info.selectors';
import {Accident} from "../../models/Accident";

@Injectable()
export class BrokerApplicationStore {
  brokerLabel: string = BrokerList.BROKER_APPLICATION_STORE;

  constructor(private store: Store<GlobalState>, private claimAccidentSummaryService: ClaimAccidentSummaryService,
              private loginData: LoginDataService, private accident: AccidentService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector).pipe(filter(value => value !== undefined)),
        applicationHeaderInfo$: this.store.select(applicationHeaderInfoSelector)
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case applicationActionsTypes.LOAD_APPLICATION_HEADER_INFO:
        this.store.dispatch(applicationActions.loadApplicationHeaderInfo({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_NON_STRUCTURAL_CHANGE:
        this.store.dispatch(applicationActions.loadNonStructuralApplicationChange({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_EXIT_APPLICATION:
        this.store.dispatch(loadExitApplication({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_SAVE_CLAIM_APPLICATION:
        let jsonData: JsonData = new JsonData();
        jsonData.paramStr = this.loginData.getCompleteLoginName();
        jsonData.paramInt1 = this.loginData.getProperty('userID');
        jsonData.accident = this.initialAssessmentLastEnteredByHandler(this.claimAccidentSummaryService.getAccident());
        brokerAction.payLoad.data = jsonData;
        this.store.dispatch(applicationActions.loadSaveClaimApplication({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_IMPLICIT_SAVE_CLAIM_APPLICATION:
        let obj: JsonData = new JsonData();
        obj.paramStr = this.loginData.getCompleteLoginName();
        obj.paramInt1 = this.loginData.getProperty('userID');
        obj.accident = this.claimAccidentSummaryService.getAccident();
        brokerAction.payLoad.data = obj;
        this.store.dispatch(applicationActions.loadImplicitSaveClaimApplication({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_NEW_ACCIDENT_APPLICATION:
        this.store.dispatch(applicationActions.loadNewAccident({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_NON_STRUCTURAL_ACCIDENT_CHANGE:
        this.store.dispatch(applicationActions.loadNonStructuralAccidentApplicationChange({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_PERSIST_ACCIDENT_APPLICATION:
        let payload: JsonData = new JsonData();
        payload.paramStr = this.loginData.getCompleteLoginName();
        payload.accident = this.accident.getAccident();
        brokerAction.payLoad.data = payload;
        this.store.dispatch(applicationActions.loadPersistAccident({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_SAVE_ACCIDENT_APPLICATION:
        let payload1: JsonData = new JsonData();
        payload1.paramStr = this.loginData.getCompleteLoginName();
        payload1.paramInt1 = this.loginData.getProperty('userID');
        payload1.accident = this.accident.getAccident();
        brokerAction.payLoad.data = payload1;
        this.store.dispatch(applicationActions.loadUpdateAccident({data: brokerAction.payLoad}));
        break;
      case applicationActionsTypes.LOAD_SUBMIT_ACCIDENT_APPLICATION:
        let payload2: JsonData = new JsonData();
        payload2.paramStr = this.loginData.getCompleteLoginName();
        payload2.paramInt1 = this.loginData.getProperty('userID');
        payload2.accident = this.accident.getAccident();
        brokerAction.payLoad.data = payload2;
        this.store.dispatch(applicationActions.loadSubmitAccident({data: brokerAction.payLoad}));
        break;
    }
  }

  /**
   * Initial Assessment Last Entered By - revisedAssessment
   */
  initialAssessmentLastEnteredByHandler(accident: Accident): Accident {
    if (!accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment.authBy) {
      accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment.authBy = this.loginData.getLoginData().userID;
    }
    let label = this.loginData.getLoginData().assignees.find(value => value.data === String(accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment.authBy)).label
    if (label) {
      accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment.authByName = label;
    }
    return accident;
  }
}
