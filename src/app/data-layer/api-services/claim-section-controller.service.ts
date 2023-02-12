import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimSectionComboData} from '../../business-layer/models/comboData/ClaimSectionComboData';
import {ClaimSmartBrief} from '../../business-layer/models/brief/ClaimSmart.brief';
import {ClaimSmartComboData} from '../../business-layer/models/ClaimSmartComboData';
import {AccidentService} from '../../business-layer/services/accident.service';
import {ClaimantBrief} from '../../business-layer/models/brief/Claimant.brief';
import {ClaimServiceProviderBrief} from '../../business-layer/models/brief/ClaimServiceProvider.brief';
import {ClaimSectionBrief} from '../../business-layer/models/brief/ClaimSectionBrief';
import {Lookup} from '../../business-layer/models/Lookup';
import {ClaimantBriefPayload} from '../../business-layer/models/brief/briefpayload/ClaimantBriefPayload';

@Injectable()
export class ClaimSectionControllerService {
  constructor(private loginData: LoginDataService, private accident: AccidentService) {
  }

  /**
   * setClaimBrief
   */
  setClaimBrief(): Observable<ClaimSmartBrief> {
    let brief: ClaimSmartBrief = new ClaimSmartBrief();
    brief.applicationTypeIndicator = 'accident';
    brief.addressBrief.applicationTypeIndicator = 'accident';
    brief.accidentDate = this.accident.getAccident().accidentDate;
    brief.accidentID = this.accident.getAccident().accidentID;
    brief.logonCode = this.loginData.getProperty('logonCode');
    if (this.loginData.getProperty('logonCode') === '00100' && this.accident.getAccident().fileStatus === 'C') {
      brief.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setClaimSectionBrief
   */
  setClaimSectionBrief(): Observable<ClaimSectionBrief> {
    let brief: ClaimSectionBrief = new ClaimSectionBrief();
    brief.stageIndicator = this.accident.getAccident().stageIndicator;
    return of(brief);
  }

  /**
   * selected Row
   */
  setSelectedRow(row): Observable<any> {
    return of(row);
  }

  /**
   * setClaimantBrief
   */
  setClaimantBrief(payload: ClaimantBriefPayload): Observable<ClaimantBrief> {
    let brief: ClaimantBrief = new ClaimantBrief();
    brief.applicationTypeIndicator = 'accident';
    brief.addressBrief.applicationTypeIndicator = 'accident';
    brief.claimHandler = payload.claimHandler;
    brief.claimType = payload.claimType;
    brief.roleCode = payload.roleCode;
    brief.newAccident = payload.newAccident;
    brief.logonCode = this.loginData.getProperty('logonCode');
    if (this.loginData.getProperty('logonCode') === '00100' && this.accident.getAccident().fileStatus === 'C') {
      brief.readOnlyIndicator = 'R';
      brief.addressBrief.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setClaimServiceProviderBrief
   */
  setClaimServiceProviderBrief(): Observable<ClaimServiceProviderBrief> {
    let brief: ClaimServiceProviderBrief = new ClaimServiceProviderBrief();
    brief.applicationTypeIndicator = 'accident';
    brief.addressBrief.applicationTypeIndicator = 'accident';
    brief.addressBrief.readOnlyIndicator = 'R';
    if (this.loginData.getProperty('logonCode') === '00100' && this.accident.getAccident().fileStatus === 'C') {
      brief.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setClaimComboData
   */
  setClaimComboData(): Observable<ClaimSmartComboData> {
    return of(CompanyParameterUtil.claimSmartComboDataHandler(this.loginData.getLoginData(), this.vehiclesHandler()));
  }

  /**
   * setAccidentPhaseClaimSectionComboData
   */
  setAccidentPhaseClaimSectionComboData(): Observable<ClaimSectionComboData> {
    return of(CompanyParameterUtil.claimSectionComboDataHandler(this.loginData.getLoginData()));
  }

  vehiclesHandler(): Lookup[] {
    let registrationNumbers: Lookup[] = [];
    for (let i = 0; i < this.accident.getAccident().vehicles.length; i++) {
      if (this.accident.getAccident().vehicles[i].registrationNumber) {
        let item: Lookup = new Lookup();
        item.data = this.accident.getAccident().vehicles[i].registrationNumber;
        item.label = this.accident.getAccident().vehicles[i].registrationNumber;
        registrationNumbers.push(item);
      }
    }
    return registrationNumbers;
  }
}
