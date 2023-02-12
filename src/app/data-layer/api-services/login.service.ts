import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {HttpWebService} from "./HttpServices";
import {Observable, of} from "rxjs";
import {HeaderUtil} from "./util/header.util";
import {ServicesUtil} from "./util/services.util";
import {ServicesUtilParams} from "./models/Services.util.params";

@Injectable()
export class LoginService {

  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }


  /**
   * Login Call
   */
  getLoginData(loginDataParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(loginDataParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = loginDataParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /**
   * Logout Call
   */
  logout(loginDataParam: any): Observable<any> {
    return of(true);
  }
  /**
   * IsActive Call
   */
  isActive(loginDataParam: any): Observable<any> {
    return of(true);
  }

  /**
   * Forgot Password Call
   */
  forgotPassword(forgotPasswordParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(forgotPasswordParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = forgotPasswordParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams,'text');
  }

}
