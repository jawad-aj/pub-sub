import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {FraudCheckComboData} from '../../business-layer/models/FraudCheckComboData';
import {FraudCheckBrief} from '../../business-layer/models/brief/FraudCheck.brief';
import {ObjectUtil} from './util/ObjectUtil';
import {ClaimAuthorizationBrief} from '../../business-layer/models/brief/ClaimAuthorizationBrief';
import {ClaimAuthorizationComboData} from '../../business-layer/models/ClaimAuthorizationComboData';
import {InvestigationApprovalComboData} from '../../business-layer/models/InvestigationApprovalComboData';
import {InvestigationApprovalBrief} from '../../business-layer/models/brief/InvestigationApproval.brief';
import {InvestigationApprovalBriefPayload} from '../../business-layer/models/brief/briefpayload/InvestigationApprovalBriefPayload';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';
import {Diary} from '../../business-layer/models/Diary';

@Injectable()
export class FraudCheckControllerService {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setFraudCheckBrief
   */
  setFraudCheckBrief(): Observable<FraudCheckBrief> {
    let brief: FraudCheckBrief = new FraudCheckBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    brief.fraudCheckLists = ObjectUtil.getFraudCheckArray(this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.claimAssessmentID, this.loginData.getLoginData());
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setFraudCheckComboData
   */
  setFraudCheckComboData(): Observable<FraudCheckComboData> {
    return of(CompanyParameterUtil.fraudCheckDataHandler(this.loginData.getLoginData()));
  }

  /**
   * setInvestigationApprovalComboData
   */
  setInvestigationApprovalComboData(): Observable<InvestigationApprovalComboData> {
    return of(CompanyParameterUtil.investigationApprovalHandler(this.loginData.getLoginData()));
  }

  /**
   * setReviewApprovedBrief
   */
  setReviewApprovedBrief(status): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.indicator = status; // Fraud Check Investigation -> Fraud Check Status
    brief.title = 'Fraud Check Approval';
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setReviewApprovedComboData
   */
  setReviewApprovedComboData(): Observable<ClaimAuthorizationComboData> {
    return of(CompanyParameterUtil.claimAuthorizationHandler(this.loginData.getLoginData()));
  }

  /**
   * setFraudCheckApprovedBrief
   */
  setFraudCheckApprovedBrief(status): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.indicator = status; // Fraud Check Investigation -> Fraud Check Status
    brief.title = 'Investigation Approval';
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  setInvestigationApprovalSubComponentBrief(event: InvestigationApprovalBriefPayload): Observable<InvestigationApprovalBrief> {
    let brief: InvestigationApprovalBrief = new InvestigationApprovalBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.indicator = event.fraudCheckApprovedStatus; // Fraud Check Investigation Approval ->  Status
    brief.fraudCheckStatus = event.fraudCheckStatus; // Fraud Check Investigation ->  Status
    // if (this.loginData.getProperty('logonCode') === '00020') {
      brief.firstFollowUp = this.checkDiaryEntry('instruction letter for investigators', 60);
      brief.secondFollowUp = this.checkDiaryEntry('first follow up to complete investigation', 30);
    // }
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    if (!this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimOfficerID) {
      brief.readOnlyIndicator = 'R';
    }
    brief.serviceProviders = this.loginData.getLoginData().serviceProviders;
    return of(brief);
  }

  /**
   * show/Hide PDF's
   */
  checkDiaryEntry(title: string, days: number): boolean {
    let diary: Diary;
    this.claimAccidentSummary.getAccident().diaries.forEach(value => {
      if (value.diaryTitle && value.diaryTitle.toLowerCase() === title) {
        diary = value;
      }
    });
    if (diary &&
      this.claimAccidentSummary.getAccident().diaries.find(value => value.diaryTitle.toLowerCase().indexOf('preliminary investigation report') === -1 || value.diaryTitle.toLowerCase().indexOf('pir') === -1)) {
      return this.daysCalculator(diary.diaryDate) >= days;
    } else {
      return false;
    }
  }

  daysCalculator(date): number {
    if (date) {
      return (new Date(new Date().toDateString()).getTime() - new Date(new Date(date).toDateString()).getTime()) / (1000 * 3600 * 24);
    } else {
      return 0;
    }
  }
}
