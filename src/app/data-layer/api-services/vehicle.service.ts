import {Injectable} from '@angular/core';
import {HttpWebService} from "./HttpServices";
import {HeaderUtil} from "./util/header.util";
import {ServicesUtil} from "./util/services.util";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {ServicesUtilParams} from "./models/Services.util.params";

@Injectable()
export class VehicleService {


  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }


  /**
  * Get Vehicles Call
  */
  getVehicles(getVehiclesParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(getVehiclesParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = getVehiclesParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }
}
