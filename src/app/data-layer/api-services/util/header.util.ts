/**
 * Created by Jawad on 14/04/2020.
 */

import {Injectable} from '@angular/core';
import {ServicesUtilParams} from '../models/Services.util.params';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeaderUtil {
  headersHttpClient: HttpHeaders = new HttpHeaders();

  constructor() {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  /**
   * Setting of jsonHeadersHttpClient
   */
  setHeaderInfo(servicesUtilParams: ServicesUtilParams): HttpHeaders {
    return this.headersHttpClient.set('Content-type', servicesUtilParams.contentType);
  }

}
