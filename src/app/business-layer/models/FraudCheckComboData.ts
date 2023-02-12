import {CompanyParameter} from './CompanyParam';
import {LookUpModel} from "./LookupModel";
import {LookupBoolModel} from './LookupBoolModel';

export class FraudCheckComboData {
  public fraudCheckStatus: CompanyParameter[] = [];
  public fraudCheckIndicator: LookupBoolModel[] = [];
}
