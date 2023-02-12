import {HttpHeaders} from '@angular/common/http';

export interface HttpParamsModel {
  payload?: any;
  uri: string;
  httpHeader:HttpHeaders;
}
