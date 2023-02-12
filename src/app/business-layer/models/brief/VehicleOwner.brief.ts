import {AddressBrief} from './Address.brief';

export class VehicleOwnerBrief {
  public applicationTypeIndicator: string = 'claim';
  public readOnlyIndicator: string = 'E';
  public address: AddressBrief = new AddressBrief();
}
