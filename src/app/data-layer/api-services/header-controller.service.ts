import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {HeaderComboData} from '../../business-layer/models/HeaderComboData';
import {Observable, of} from 'rxjs';
import {HttpParamsModel} from './interfaces/http-params.model';
import {HttpHeaders} from '@angular/common/http';
import {HttpWebService} from './HttpServices';
import {HeaderDataService} from '../../business-layer/services/HeaderData.service';

@Injectable()
export class HeaderControllerService {
  constructor(private loginData: LoginDataService,private headerService: HeaderDataService, private httpWrapperService: HttpWebService) {
  }

  /**
   * setHeaderComboData
   */
  setHeaderComboData(code: string): Observable<HeaderComboData> {
    return of(CompanyParameterUtil.headerComboDataHandler(this.loginData.getLoginData(), code,this.headerService.getMenu()));
  }
  /**
   * get Headers.json
   */
  getHeaderData(data: any): Observable<any> {
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = data;
      uri: string;
      httpHeader: HttpHeaders;
    };
    return this.httpWrapperService.get(httpParams);
  }
}
