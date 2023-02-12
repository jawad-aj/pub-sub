import {Injectable} from '@angular/core';
import {HttpWebService} from "./HttpServices";
import {Observable} from "rxjs";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {HttpHeaders} from "@angular/common/http";
import {HeaderUtil} from "./util/header.util";
import {ServicesUtil} from "./util/services.util";
import {ServicesUtilParams} from "./models/Services.util.params";

@Injectable()
export class WorkBasketService {

  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }



  /*
  * Claim Accident Summary Call
  */
  retrieveClaimCmsh5(claimAccidentSummaryParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(claimAccidentSummaryParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = claimAccidentSummaryParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }


  /*
  * Claim Accident Summary Call
  */
  assignClaimCmsh5(assignClaimParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(assignClaimParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = assignClaimParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /*
  * get ClaimWQSummary Call
  */
  getClaimWQSummaryCmsh5(getClaimWQSummaryParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(getClaimWQSummaryParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = getClaimWQSummaryParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }
}
