import {CompanyParameter} from "./CompanyParam";
import {Lookup} from "./Lookup";

export class ClaimAuthorizationComboData {
  public status: CompanyParameter[] = [];
  public recommendationStatus: CompanyParameter[] = [];
  public independentReviewStatus: CompanyParameter[] = [];
  public approvedBy: Lookup[] = [];

}
