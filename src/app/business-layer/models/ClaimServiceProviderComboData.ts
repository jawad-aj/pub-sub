import {ServiceProvider} from "./ServiceProvider";
import {CompanyParameter} from "./CompanyParam";
import {AddressComboData} from './AddressComboData';

export class ClaimServiceProviderComboData {
  public claimLawyer: ServiceProvider[] = [];
  public claimCourtLevel: CompanyParameter[] = [];
  public claimDistrictCourt: ServiceProvider[] = [];
  public claimUnderTrial: ServiceProvider[] = [];
  public claimUnderInvestigation: ServiceProvider[] = [];
  public claimServiceProviderObject: ServiceProvider = new ServiceProvider();
  public address: AddressComboData = new AddressComboData();

}
