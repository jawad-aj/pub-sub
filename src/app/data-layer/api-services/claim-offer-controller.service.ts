import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {ClaimOfferBrief} from '../../business-layer/models/brief/ClaimOffer.brief';
import {ClaimAuthorizationBrief} from '../../business-layer/models/brief/ClaimAuthorizationBrief';
import {ClaimAuthorizationComboData} from '../../business-layer/models/ClaimAuthorizationComboData';
import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';

@Injectable()
export class ClaimOfferControllerService {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setClaimOfferBrief
   */
  setClaimOfferBrief(): Observable<ClaimOfferBrief> {
    let brief: ClaimOfferBrief = new ClaimOfferBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.claimOfficerLimitAmount = this.loginData.getProperty('approvalLimitAmount');
    brief.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    brief.fraudCheckApproval = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved.authStatus;
    brief.claimEstimateAmount = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimEstimateAmount;
    brief.claimCost = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].initialAssessment.otherCostAmount;
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setClaimOfferComboData
   */
  setClaimOfferComboData(): Observable<ClaimAuthorizationComboData> {
    return of(CompanyParameterUtil.claimAuthorizationHandler(this.loginData.getLoginData()));
  }


  /**
   * setClaimOfferClaimAuthorizationBrief
   */
  setClaimOfferClaimAuthorizationBrief(): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.title = 'Claim Offer Recommendation';
    brief.indicator = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved.authStatus;
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setClaimOfferApprovedBrief
   */
  setClaimOfferApprovedBrief(): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.title = 'Claim Offer Approval';
    brief.indicator = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved.authStatus;
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

}
