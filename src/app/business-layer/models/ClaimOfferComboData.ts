import {CompanyParameter} from './CompanyParam';
import {LookUpModel} from './LookupModel';
import {Lookup} from './Lookup';

export class ClaimOfferComboData {
  public authStatus: CompanyParameter[] = [];
  public approvalStatus: LookUpModel[] = [];
  public authBy: Lookup[] = [];

}
