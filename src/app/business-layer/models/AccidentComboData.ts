import {CompanyParameter} from './CompanyParam';
import {AddressComboData} from "./AddressComboData";
import {Lookup} from "./Lookup";
import {LookupNumberModel} from './LookupNumberModel';

export class AccidentComboData {
  public roadConditionStatus: CompanyParameter[] = [];
  public weatherStatus: CompanyParameter[] = [];
  public accidentCauseCode: CompanyParameter[] = [];
  public RUMCode: CompanyParameter[] = [];
  public fileStatus: CompanyParameter[] = [];
  public assignee: Lookup[] = [];
  public hours: LookupNumberModel[] = [];
  public minutes: LookupNumberModel[] = [];
  public addressComboData:AddressComboData= new AddressComboData();
}
