import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpParamsModel} from '../interfaces/http-params.model';
import {HttpWebService} from '../HttpServices';
import {ServicesUtilParams} from '../models/Services.util.params';
import {ServicesUtil} from '../util/services.util';
import {HeaderUtil} from '../util/header.util';
import {Observable, of} from 'rxjs';
import {CompanyParameterUtil} from '../util/CompanyParameterUtil';
import {LoginDataService} from '../../../business-layer/services/login-data.service';


@Injectable()
export class PaymentsService {

  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil,
              private remoteService: ServicesUtil, private loginData: LoginDataService) {
  }

  /**
   * Get Payments Call
   */
  getPayments(params: any): Observable<any> {
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
   * Get Payment Batch Call
   */
  getPaymentBatch(params: any): Observable<any> {
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
   * Create Batch Call
   */
  createBatch(params: any): Observable<any> {
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
   * Change Batch Status Call
   */
  changeBatchStatus(params: any): Observable<any> {
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
   * Edit Batch Payments Call
   */
  editBatchPayments(params: any): Observable<any> {
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
   * Export Batch Call
   */
  exportBatch(params: any): Observable<any> {
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
   * Get Payment Types
   */
  getPaymentTypes(): Observable<any> {
    return of(CompanyParameterUtil.paymentSystemAdminComboDataHandler(this.loginData.getLoginData()));
  }
  /**
   * Get Payment Filter
   */
  paymentFilter(param): Observable<any> {
    return of(param);
  }
}
