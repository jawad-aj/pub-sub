import {AddressBrief} from './Address.brief';

export class VehicleDriverBrief {
  public applicationTypeIndicator: string = 'claim';
  public readOnlyIndicator: string = 'E';
  public accidentClassification: string = '';
  public accidentID: number = null;
  public vehicleID: number = null;
  public claimID: number = null;
  public loginUserID: number = null;
  public loginUserName: string = '';
  public newAccident: boolean = false;
  public noResponseAfter28Days: boolean = false;
  public noResponseAfterFurther14Days: boolean = false;
  public address: AddressBrief = new AddressBrief();
}
