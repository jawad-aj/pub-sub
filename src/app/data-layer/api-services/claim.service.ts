import {Injectable} from '@angular/core';
import {HttpWebService} from "./HttpServices";
import {HeaderUtil} from "./util/header.util";
import {ServicesUtil} from "./util/services.util";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {ServicesUtilParams} from "./models/Services.util.params";

@Injectable()
export class ClaimService {


  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {}


  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*
  * Get Claims Call
  */
  getClaims(getClaimsParams: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(getClaimsParams.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = getClaimsParams.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }
}
