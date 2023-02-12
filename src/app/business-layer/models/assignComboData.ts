import {Lookup} from './Lookup';
import {LookUpModel} from './LookupModel';
import {CompanyParameter} from "./CompanyParam";

export class AssignComboData {
  public assignees: Lookup[] = [];
  public serviceProvider: Lookup[] = [];
  public fraudCheckOfficers: Lookup[] = [];
  public claimStatus: CompanyParameter[] = [];
}
