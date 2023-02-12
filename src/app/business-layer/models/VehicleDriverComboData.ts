import {CompanyParameter} from './CompanyParam';
import {AddressComboData} from './AddressComboData';

export class VehicleDriverComboData {
  public licenseType: CompanyParameter[] = [];
  public licenseClass: CompanyParameter[] = [];
  public addressComboData: AddressComboData = new AddressComboData();
}
