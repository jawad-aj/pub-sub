import {CompanyParameter} from './CompanyParam';
import {LookUpModel} from './LookupModel';
import {ServiceProvider} from './ServiceProvider';

export class MedicalEvidenceComboData {
  public furtherExamRequiredFlag: LookUpModel[] = [];
  public reasons: CompanyParameter[] = [];
  public liability: CompanyParameter[] = [];
  public hospitals: ServiceProvider[] = [];
}
