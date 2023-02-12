import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpParamsModel} from "../interfaces/http-params.model";
import {HttpWebService} from "../HttpServices";
import {ServicesUtilParams} from "../models/Services.util.params";
import {ServicesUtil} from "../util/services.util";
import {HeaderUtil} from "../util/header.util";
import {Observable} from "rxjs";


@Injectable()
export class BulkAssignmentService {

  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }

  /**
   * Get User Lookups Call
   */
  getUserLookups(params: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(params.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /**
   * Get Accidents Call
   */
  getAccidents(params: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(params.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = params.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }


  /**
   * Assign Accidents Call
   */
  assignBulkAccidents(params: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(params.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = params.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }
  /**
   * Retrieve bulk Accidents Call
   */
  retrieveBulkAccidents(params: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(params.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = params.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }


}
