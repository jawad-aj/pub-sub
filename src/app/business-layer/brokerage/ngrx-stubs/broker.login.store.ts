/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from "@angular/core";
import {BrokerAction} from "../../pubsub-broker/models/broker.action.model";
import {Store} from "@ngrx/store";
import {BrokerList} from "./brokerlist";
import {GlobalState} from "../../../data-layer/store/reducers";
import {filter} from "rxjs/operators";
import {loginSelector} from "../../../data-layer/store/selectors/login.selector";
import * as loginActionTypes from "../../shared-types/actions/login.action.types"
import * as loginActions from "../../../data-layer/store/actions/login.actions"
import * as logoutActions from "../../../data-layer/store/actions/logout.actions"
import * as changePasswordActions from "../../../data-layer/store/actions/changePassword.actions"
import {NgIdleService} from "../../services/NgIdle.service";

@Injectable()
export class BrokerLoginStore {
  brokerLabel: string = BrokerList.BROKER_LOGIN_STORE;

  constructor(private store: Store<GlobalState>, private ngIdleService: NgIdleService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        loginData$: this.store.select(loginSelector)
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case loginActionTypes.LOGIN_USER_ATTEMPT:
        this.store.dispatch(loginActions.loadLogins({data: brokerAction.payLoad}));
        break;
      case loginActionTypes.LOGOUT_ATTEMPT:
        this.ngIdleService.logoutHandler();
        this.store.dispatch(logoutActions.loadLogout({data: undefined}));
        break;
      case loginActionTypes.FORGOT_PASSWORD_ATTEMPT:
        this.store.dispatch(loginActions.loadForgotPasswords({data: brokerAction.payLoad}));
        break;
      case loginActionTypes.CHANGE_PASSWORD_ATTEMPT:
        this.store.dispatch(changePasswordActions.loadChangePasswords({data: brokerAction.payLoad}));
        break;
      case loginActionTypes.SET_IS_ACTIVE:
        this.store.dispatch(loginActions.loadIsActive({data: brokerAction.payLoad}));
        break;
      case loginActionTypes.RESET_IDLE_SERVICE:
        this.ngIdleService.btnContinueHandler();
        break;
    }
  }
}
