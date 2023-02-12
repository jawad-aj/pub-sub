import {Authorization} from './Authorization';
import {FraudCheck} from './FraudCheck';
import {Hospital} from './Hospital';
import {IndependentReviewChecklist} from './IndependentReviewChecklist';


export class ClaimAssessment {

  public claimAssessmentID: number= null;
  public liabilityCode: string = '';
  public liabilityComments: string = '';
  public injuryCode: string = '';
  public injuryDetailText: string = '';
  public prognosisText: string = '';
  public citedCaseText: string = '';
  public citedCaseComments: string = '';
  public otherComments: string = '';
  public fraudCheckComments: string = '';
  public fraudCheckOfficerComments: string = '';
  public fraudCheckPointTotal: number = 0;
  public fraudCheckDate: string='';
  public fraudCheckStatus: string = '';
  public independentReviewReceiveDate: Date;
  public independentReviewRequiredFlag: string = '';
  public assessmentType: string = '';
  public furtherExamRequiredFlag: boolean;
  public medicalReportProvidedFlag: boolean;
  public generalDamageAmount: number = 0;
  public specialDamageAmount: number = 0;
  public economicLossAmount: number = 0;
  public otherCostAmount: number = 0;
  public investigationFlag: boolean;
  public authorization: Authorization = new Authorization();
  public fraudChecks: FraudCheck[] = [];
  public hospitals: Hospital[] = [];
  public independentReviewChecklists: IndependentReviewChecklist[] = [];
  public liabilityReason: string = '';
  public negligencePercentage: number = 0;
  public doctorName: string = '';

}
