import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PaymentBrief} from '../../business-layer/models/brief/Payment.brief';
import {PaymentComboData} from '../../business-layer/models/PaymentComboData';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';
import {SelectedRowDataService} from '../../business-layer/services/selected-row.service';

@Injectable()
export class PaymentControllerService {
  constructor(private loginData: LoginDataService,private selectedRow: SelectedRowDataService,
              private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setPaymentBrief
   */
  setPaymentBrief(): Observable<PaymentBrief> {
    let brief: PaymentBrief = new PaymentBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.offerAmount = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].offerAmount;
    brief.claimEstimateAmount = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimEstimateAmount;
    brief.claimAcceptanceDate = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimAcceptanceDate;
    brief.claimType = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimType;
    brief.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    brief.claimNumber = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimNumber;
    brief.roleCode = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimant.roleCode;
    brief.accidentNumber = this.claimAccidentSummary.getAccident().accidentNumber;
    brief.claimOfficer = this.selectedRow.getProperty('CMSAssignee');
    brief.logonCode = this.loginData.getProperty('logonCode');
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setPaymentComboData
   */
  setPaymentComboData(): Observable<PaymentComboData> {
    return of(CompanyParameterUtil.paymentComboDataHandler(this.loginData.getLoginData()));
  }
}
