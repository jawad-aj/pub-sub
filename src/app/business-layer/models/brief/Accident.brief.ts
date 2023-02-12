import {AddressBrief} from "./Address.brief";

export class AccidentBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public newAccidentIndicator: boolean = false;
  public userID: number = null;
  public claimStatus: string = '00013';
  public addressBrief: AddressBrief = new AddressBrief();
}
