import {Injectable} from "@angular/core";
import {ServicesUtilParams} from "../../data-layer/api-services/models/Services.util.params";

@Injectable()
export class RemoteService {
  private remoteServices: ServicesUtilParams[];

  public setRemoteServices(servicesUtilParams: ServicesUtilParams[]) {
    this.remoteServices = servicesUtilParams;
  }

  public getServiceUtilParam(serviceName: string): ServicesUtilParams {
    return this.remoteServices.find(value => value.serviceName === serviceName);
  }
}
