/**
 * Created by Jawad on 14/04/2020.
 */

import {Injectable} from '@angular/core';
import {ServicesUtilParams} from "../models/Services.util.params";


@Injectable()
export class ServicesUtil {
  constructor() {
  }

  decodeServiceParams(servicesUtilParam: ServicesUtilParams): ServicesUtilParams {
    let serviceParam: ServicesUtilParams = new ServicesUtilParams();
    for (let objectKey in Object(servicesUtilParam)) {
      serviceParam[objectKey] = (servicesUtilParam[objectKey] === servicesUtilParam.serviceName ? servicesUtilParam[objectKey] : atob(servicesUtilParam[objectKey]));
    }
    return serviceParam;
  }


  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

}
