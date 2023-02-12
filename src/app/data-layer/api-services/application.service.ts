import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimAccidentSummary} from '../../business-layer/models/ClaimAccidentSummary';
import {ServicesUtilParams} from './models/Services.util.params';
import {HttpHeaders} from '@angular/common/http';
import {HttpParamsModel} from './interfaces/http-params.model';
import {HttpWebService} from './HttpServices';
import {HeaderUtil} from './util/header.util';
import {ServicesUtil} from './util/services.util';
import {Accident} from '../../business-layer/models/Accident';
import {ApplicationHeaderInfo} from '../../business-layer/models/ApplicationHeaderInfo';

@Injectable()
export class ApplicationService {
  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }

  /**
   * nonStructuralApplicationChange
   */
  nonStructuralApplicationChange(payload: ClaimAccidentSummary): Observable<any> {
    return of(payload);
  }

  /**
   * nonStructuralAccidentApplicationChange
   */
  nonStructuralAccidentApplicationChange(payload: Accident): Observable<any> {
    return of(payload);
  }

  /**
   * ApplicationHeaderInfo
   */
  applicationHeaderInfo(payload: ApplicationHeaderInfo): Observable<any> {
    return of(payload);
  }

  /**
   * Update Claim Call
   */
  updateClaimCmsh5(updateClaimParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(updateClaimParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = updateClaimParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /**
   * Persist Call
   */
  persistCmsh5(persistParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(persistParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = persistParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /**
   * Update Accident Call
   */
  updateAccidentCmsh5(updateAccidentParam: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(updateAccidentParam.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = updateAccidentParam.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }
  /**
   * New Accident Call
   */
  newAccident(): Observable<any> {
    return of(new Accident());
  }

}
