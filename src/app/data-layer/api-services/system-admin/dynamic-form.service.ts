/**
 * Created by Jawad  on 11/03/2021.
 */
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpParamsModel} from '../interfaces/http-params.model';
import {HttpWebService} from '../HttpServices';
import {Observable} from 'rxjs';


@Injectable()
export class DynamicFormService {
  constructor(private httpWrapperService: HttpWebService) {
  }

  /**
   * Get Dynamic Forms Data
   */
  getDynamicFormData(data: any): Observable<any> {
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = data;
      uri: string;
      httpHeader: HttpHeaders;
    };
    return this.httpWrapperService.get(httpParams);
  }
}
