import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimSmartBrief} from '../../business-layer/models/brief/ClaimSmart.brief';
import {ClaimSmartComboData} from '../../business-layer/models/ClaimSmartComboData';
import {ClaimantBriefPayload} from '../../business-layer/models/brief/briefpayload/ClaimantBriefPayload';
import {ClaimantBrief} from '../../business-layer/models/brief/Claimant.brief';
import {ClaimServiceProviderBrief} from '../../business-layer/models/brief/ClaimServiceProvider.brief';
import {SelectedRowDataService} from '../../business-layer/services/selected-row.service';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';

@Injectable()
export class ClaimControllerService {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService,
              private selectedRow: SelectedRowDataService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setClaimBrief
   */
  setClaimBrief(): Observable<ClaimSmartBrief> {
    let brief: ClaimSmartBrief = new ClaimSmartBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.addressBrief.applicationTypeIndicator = 'claim';
    brief.accidentID = this.selectedRow.getProperty('accidentID');
    brief.accidentDate = this.claimAccidentSummary.getAccident().accidentDate;
    brief.logonCode = this.loginData.getProperty('logonCode');
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setClaimantBrief
   */
  setClaimantBrief(payload: ClaimantBriefPayload): Observable<ClaimantBrief> {
    let brief: ClaimantBrief = new ClaimantBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.addressBrief.applicationTypeIndicator = 'claim';
    brief.claimHandler = payload.claimHandler;
    brief.claimType = payload.claimType;
    brief.roleCode = payload.roleCode;
    brief.logonCode = this.loginData.getProperty('logonCode');
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    brief.addressBrief.readOnlyIndicator = this.isDisabled.disableForms();

    return of(brief);
  }

  /**
   * setClaimServiceProviderBrief
   */
  setClaimServiceProviderBrief(): Observable<ClaimServiceProviderBrief> {
    let brief: ClaimServiceProviderBrief = new ClaimServiceProviderBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.addressBrief.applicationTypeIndicator = 'claim';
    brief.addressBrief.readOnlyIndicator = 'R';
    brief.readOnlyIndicator = this.isDisabled.disableForms();
    return of(brief);
  }

  /**
   * setClaimComboData
   */
  setClaimComboData(): Observable<ClaimSmartComboData> {
    return of(CompanyParameterUtil.claimSmartComboDataHandler(this.loginData.getLoginData(), this.claimAccidentSummary.getClaimAccidentSummary().registrationNumbers));
  }

}
