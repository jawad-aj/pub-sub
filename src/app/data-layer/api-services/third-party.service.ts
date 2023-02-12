import {Injectable} from '@angular/core';
import {HttpWebService} from './HttpServices';
import {HeaderUtil} from './util/header.util';
import {ServicesUtil} from './util/services.util';
import {Observable, of} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {HttpParamsModel} from './interfaces/http-params.model';
import {ServicesUtilParams} from './models/Services.util.params';
import {DriverLicenseResponse} from '../../business-layer/models/DriverLicenseResponse';
import {VehicleResponse} from '../../business-layer/models/VehicleResponse';

@Injectable()
export class ThirdPartyService {


  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }


  /**
   * sendVehicleRequest
   */
    sendVehicleRequest(params: any): Observable<any> {
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
   * sendDriverRequest
   */
    sendDriverRequest(params: any): Observable<any> {
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
   * getDriverPicture
   */
    getDriverPicture(params: any): Observable<any> {
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
