import {CompanyParameter} from './CompanyParam';
import {LookUpModel} from './LookupModel';
import {AddressComboData} from './AddressComboData';
import {Lookup} from './Lookup';

export class ClaimantComboData {
  public titleCode: CompanyParameter[] = [];
  public maritalStatus: CompanyParameter[] = [];
  public classCode: CompanyParameter[] = [];
  public roleCode: CompanyParameter[] = [];
  public genderArray: LookUpModel[] = [];
  public registrationNumbers: Lookup[] = [];
  public address: AddressComboData = new AddressComboData();
}
