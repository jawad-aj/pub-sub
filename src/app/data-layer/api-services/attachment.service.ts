import {Injectable} from '@angular/core';
import {HttpWebService} from "./HttpServices";
import {HeaderUtil} from "./util/header.util";
import {ServicesUtil} from "./util/services.util";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {ServicesUtilParams} from "./models/Services.util.params";

@Injectable()
export class AttachmentService {

  constructor(private httpWrapperService: HttpWebService, private headerUtil: HeaderUtil, private remoteService: ServicesUtil) {
  }


  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*
  * Upload Supporting Documents Call
  */
  uploadSupportingDocuments(uploadSupportingDocumentsParams: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(uploadSupportingDocumentsParams.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = uploadSupportingDocumentsParams.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*
  * Download Supporting Documents Call
  */
  downloadSupportingDocuments(downloadSupportingDocumentsParams: any): Observable<any> {
    const servicesParam: ServicesUtilParams = this.remoteService.decodeServiceParams(downloadSupportingDocumentsParams.serviceUtilParam);
    let headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = downloadSupportingDocumentsParams.data;
      uri: string = servicesParam.serviceEndpoint;
      httpHeader: HttpHeaders = headersHttpClient;
    };
    return this.httpWrapperService.post(httpParams,'text');
  }

}
