import {Injectable} from '@angular/core';
import {WebsocketUtil} from './WebsocketUtil';
import {LoginData} from "../models/LoginData";
import {StoreService} from "./store.service";
import {Subscription} from "rxjs";
import {BrokerList} from "../brokerage/ngrx-stubs/brokerlist";
import {LoginDataService} from "./login-data.service";
import {WSContextUtilService} from "./WSContextUtil.service";

@Injectable()
export class WebsocketHandlerService {

  constructor(private websocket: WebsocketUtil,
              private storeService: StoreService,
              private loginDataService: LoginDataService,
              private wSContextUtilService: WSContextUtilService) {
  }

  public getIdentityObject(loginData: LoginData): string {
    return JSON.stringify({
      action: 'identity',
      identity: JSON.stringify({
        logonCode: loginData.logonCode,
        userID: loginData.userID
      })
    });
  }

  public getMessageObject(userID, claimID, accidentID, actionName, serverAction): string {
    return JSON.stringify({
      action: serverAction,
      appContext: this.wSContextUtilService.getWSContext(),
      payLoad: JSON.stringify({
        userID: userID,
        claimID: claimID,
        accidentID: accidentID,
        actionName: actionName
      })
    });
  }

  public getAuthenticationObject(serviceClientKey: string, serviceApiKey: string): string {
    return JSON.stringify({
      action: 'authentication',
      clientKey: serviceClientKey,
      apiKey: serviceApiKey
    });
  }

  private getSelectedRowData() {
    const subscription: Subscription = new Subscription();
    let result;
    subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).selectedRow$.subscribe(value => {
      result = value;
    }));
    subscription.unsubscribe();
    return result;
  }

  public sendWebsocketMessage(response: any, actionName: string, serverAction = 'message') {
    if (response) {
      const row = this.getSelectedRowData();
      if (row) {
        this.websocket.send(
          this.getMessageObject(this.loginDataService.getProperty('userID'),
            row.claimID, row.accidentID, actionName, serverAction)
        );
      }
    }
  }
}
