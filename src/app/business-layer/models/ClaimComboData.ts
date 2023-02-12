import {CompanyParameter} from './CompanyParam';
import {LookUpModel} from './LookupModel';

export class ClaimComboData {
  public claimHandlerCode: CompanyParameter[] = [];
  public claimStatus: CompanyParameter[] = [];
  public claimType: CompanyParameter[] = [];
  public closeReason: CompanyParameter[] = [];
  public titleCode: CompanyParameter[] = [];
  public maritalStatus: CompanyParameter[] = [];
  public classCode: CompanyParameter[] = [];
  public dependantRelationship: CompanyParameter[] = [];
  public guardianRelation: CompanyParameter[] = [];
  public courtLevel: CompanyParameter[] = [];
  public roleCode: CompanyParameter[] = [];
  public genderArray: LookUpModel[] = [];

}
