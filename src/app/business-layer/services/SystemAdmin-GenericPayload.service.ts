import {Injectable} from '@angular/core';

@Injectable()
export class SystemAdminGenericPayloadService {
  private payload: any;

  public setPayload(payload: any) {
    this.payload = payload;
  }

  public getPayload(): any {
    return this.payload;
  }

}
