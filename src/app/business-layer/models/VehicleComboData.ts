import {CompanyParameter} from './CompanyParam';
import {Lookup} from './Lookup';

export class VehicleComboData {
  public ratingCode: CompanyParameter[] = [];
  public accidentClassification: CompanyParameter[] = [];
  public makeID: Lookup[] = [];
  public bodyID: Lookup[] = [];
}
