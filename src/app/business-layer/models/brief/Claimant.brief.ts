import {AddressBrief} from './Address.brief';

export class ClaimantBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public claimStatus: string = '';
  public claimType: string = '';
  public claimHandler: string = '';
  public newAccident: boolean = false;
  public roleCode: string = '';
  public logonCode: string = '';
  public addressBrief: AddressBrief = new AddressBrief();
}
