/**
 * Created by Jawad  on 24/09/2020.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpParamsModel} from "./interfaces/http-params.model";
import {HttpHeaders} from "@angular/common/http";
import {HttpWebService} from "./HttpServices";

@Injectable()
export class EventsMappingEffectService {
  constructor(private httpWrapperService: HttpWebService) {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*
  * Get Event Mapping Data
  */
  getEventMapping(data: any): Observable<any> {
    let httpParams: HttpParamsModel = new class implements HttpParamsModel {
      payload: any = data;
      uri: string;
      httpHeader: HttpHeaders;
    };
    return this.httpWrapperService.get(httpParams);
  }
}
