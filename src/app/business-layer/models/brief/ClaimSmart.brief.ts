import {AddressBrief} from './Address.brief';

export class ClaimSmartBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public logonCode: string = '';
  public userID: number = null;
  public accidentID: number = null;
  public claimStatus: string = '00013';
  public accidentDate: string = '';
  public newAccident: boolean = false;
  public addressBrief: AddressBrief = new AddressBrief();
}
