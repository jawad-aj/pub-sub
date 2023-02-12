import {Address} from './Address';

export class ServiceProvider {

  public serviceProviderID: number = null;
  public serviceProviderName: string = '';
  public serviceProviderContactName: string = '';
  public serviceProviderContactNumber: string = '';
  public serviceProviderType: string = '';
  public address: Address = new Address();
  public customField1: string = '';
  public customField2: string = '';
  public serviceProviderStatus: string = '';
}
