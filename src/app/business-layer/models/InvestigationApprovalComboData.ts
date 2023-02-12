import {LookUpModel} from "./LookupModel";
import {Lookup} from "./Lookup";
import {ServiceProvider} from "./ServiceProvider";
import {LookupBoolModel} from './LookupBoolModel';

export class InvestigationApprovalComboData {
  public assign: LookupBoolModel[] = [];
  public assignee: Lookup[] = [];
  public companies: ServiceProvider[] = [];
}
