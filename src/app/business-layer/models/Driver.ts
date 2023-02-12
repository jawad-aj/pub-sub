import {Address} from './Address';

export class Driver {

  public driverID: number = null;
  public driverName: string = '';
  public address: Address = new Address();
  public licenseNumber: string = '';
  public licenseType: string = '';
  public licenseClass: string = '';
  public licenseExpiryDate: string = '';
  public requestDate: Date = null;
  public responseDate: Date = null;
}
