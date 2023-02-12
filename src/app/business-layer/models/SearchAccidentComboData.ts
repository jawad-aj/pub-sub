import {CompanyParameter} from "./CompanyParam";
import {Lookup} from "./Lookup";
import {LookUpModel} from "./LookupModel";

export class SearchAccidentComboData{
  public claimType: CompanyParameter[] = [];
  public claimHandler: CompanyParameter[] = [];
  public ratingCode: CompanyParameter[] = [];
  public roleCode: CompanyParameter[] = [];
  public fileStatus: CompanyParameter[] = [];
  public makeID: Lookup[] = [];
  public bodyID: Lookup[] = [];
  public addressDistrict: Lookup[] = [];
  public addressProvince: Lookup[] = [];
  public assignees: Lookup[] = [];
  public viewTypes: LookUpModel[] = [];
  public vehicleAtFault: LookUpModel[]=[];
  public menuItemSource: LookUpModel[] = [];
}
