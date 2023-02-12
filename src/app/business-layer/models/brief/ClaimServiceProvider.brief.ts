import {AddressBrief} from "./Address.brief";

export class ClaimServiceProviderBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public newAccident: boolean = false;
  public addressBrief: AddressBrief = new AddressBrief();
}
