import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MedicalEvidenceBrief} from '../../business-layer/models/brief/MedicalEvidence.brief';
import {MedicalEvidenceComboData} from '../../business-layer/models/MedicalEvidenceComboDta';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';

@Injectable()
export class MedicalEvidenceControllerService {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setMedicalEvidenceBrief
   */
  setMedicalEvidenceBrief(): Observable<MedicalEvidenceBrief> {
    let brief: MedicalEvidenceBrief = new MedicalEvidenceBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.logonCode = this.loginData.getProperty('logonCode');
    brief.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    brief.claimAssessmentID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.claimAssessmentID;
    brief.otherCostAmount = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].initialAssessment.otherCostAmount;
    brief.accidentDate = this.claimAccidentSummary.getAccident().accidentDate;
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setMedicalEvidenceComboData
   */
  setMedicalEvidenceComboData(): Observable<MedicalEvidenceComboData> {
    return of(CompanyParameterUtil.medicalEvidenceDataHandler(this.loginData.getLoginData()));
  }
}
