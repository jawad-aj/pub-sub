import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {IndependentReviewComboData} from '../../business-layer/models/IndependentReviewComboData';
import {IndependentReviewBrief} from '../../business-layer/models/brief/IndependentReview.brief';
import {ObjectUtil} from './util/ObjectUtil';
import {ClaimAuthorizationBrief} from '../../business-layer/models/brief/ClaimAuthorizationBrief';
import {ClaimAuthorizationComboData} from '../../business-layer/models/ClaimAuthorizationComboData';
import {ClaimDisableUtil} from "./util/ClaimDisableUtil";

@Injectable()
export class IndependentReviewControllerService {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setIndependentReviewBrief
   */
  setIndependentReviewBrief(): Observable<IndependentReviewBrief> {
    let brief: IndependentReviewBrief = new IndependentReviewBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    brief.independentReviewCheckLists = ObjectUtil.getIndependentReviewArray(this.loginData.getLoginData(), this.claimAccidentSummary.getAccident().vehicles[0].claims[0]);
    brief = this.componentVisibility(brief);
    return of(brief);
  }

  /**
   * setIndependentReviewComboData
   */
  setIndependentReviewComboData(): Observable<IndependentReviewComboData> {
    return of(CompanyParameterUtil.independentReviewDataHandler());
  }

  /**
   * setIndependentReviewClaimAuthorizationBrief
   */
  setIndependentReviewClaimAuthorizationBrief(): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.title = 'Independent Review';
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief = this.componentVisibility(brief);
    return of(brief);
  }

  /**
   * setIndependentReviewApprovedBrief
   */
  setIndependentReviewApprovedBrief(): Observable<ClaimAuthorizationBrief> {
    let brief: ClaimAuthorizationBrief = new ClaimAuthorizationBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.title = 'Independent Review Approval';
    brief.authBy = this.loginData.getProperty('userID');
    brief.authByDesignation = this.loginData.getProperty('logonCode');
    brief.authByName = this.loginData.getLoginData().assignees.find(value => value.data === String(brief.authBy)).label;
    brief.authDate = new Date().toISOString();
    brief = this.componentVisibility(brief);
    return of(brief);
  }

  /**
   * setIndependentReviewClaimAuthorizationComboData
   */
  setIndependentReviewClaimAuthorizationComboData(): Observable<ClaimAuthorizationComboData> {
    return of(CompanyParameterUtil.claimAuthorizationHandler(this.loginData.getLoginData()));
  }

  componentVisibility(brief) {
    if (this.isDisabled.disableForms() === 'E') {
      if ((this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimEstimateAmount >= this.claimAccidentSummary.getAccident().vehicles[0].claims[0].companyOffer.claimOfferAmount) &&
        (this.claimAccidentSummary.getAccident().vehicles[0].claims[0].companyOffer.claimOfferAmount >= 20000)) {
        brief.readOnlyIndicator = 'E';
      } else {
        brief.readOnlyIndicator = 'R';
      }
      if (this.claimAccidentSummary.getAccident().vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved.authStatus !== 'A') {
        brief.readOnlyIndicator = 'R';
      }
    } else {
      brief.readOnlyIndicator = 'R';
    }
    return brief;
  }
}
