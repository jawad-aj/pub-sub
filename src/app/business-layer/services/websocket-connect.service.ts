/**
 * Created by Jawad on 22/09/2020.
 */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {WebsocketUtil} from './WebsocketUtil';
import {WebsocketHandlerService} from './WebsocketHandler.service';
import {LoginData} from "../models/LoginData";
import {LoginDataService} from "./login-data.service";
import {ServicesUtil} from "../../data-layer/api-services/util/services.util";
import {ServicesUtilParams} from "../../data-layer/api-services/models/Services.util.params";
import {WSContextUtilService} from "./WSContextUtil.service";

@Injectable()
export class WebsocketConnectService {
  constructor(private websocketUtil: WebsocketUtil,
              private servicesUtil: ServicesUtil,
              private websocketHandler: WebsocketHandlerService,
              private loginDataService: LoginDataService,
              private wSContextUtilService: WSContextUtilService) {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*
  * Websocket Connect Service
  */
  websocketConnectService(data: any): Observable<any> {
    const serviceUtilParam: ServicesUtilParams = this.servicesUtil.decodeServiceParams(data.serviceUtilParam);
    this.websocketUtil.connect(serviceUtilParam.serviceEndpoint);
    const splitArr = serviceUtilParam.serviceEndpoint.split('/');
    const context = splitArr[(splitArr.length - 1)];
    this.wSContextUtilService.setWSContext(context);
    return of(true);
  }

  /*
  * Send Websocket Authentication Message
  */
  websocketAuthentication(data: any): Observable<any> {
    const serviceUtilParam: ServicesUtilParams = this.servicesUtil.decodeServiceParams(data.serviceUtilParam);
    this.websocketUtil.send(this.websocketHandler.getAuthenticationObject(serviceUtilParam.serviceClientKey, serviceUtilParam.serviceApiKey));
    return of(true);
  }

  /*
  * Send Websocket Identity Message
  */
  websocketIdentity(): Observable<any> {
    const loginData: LoginData = this.loginDataService.getLoginData();
    if (loginData) {
      this.websocketUtil.send(this.websocketHandler.getIdentityObject(loginData));
    }
    return of(true);
  }
}
