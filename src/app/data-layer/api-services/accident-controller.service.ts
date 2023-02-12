import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AccidentBrief} from '../../business-layer/models/brief/Accident.brief';
import {AccidentComboData} from '../../business-layer/models/AccidentComboData';
import {AccidentService} from '../../business-layer/services/accident.service';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';

@Injectable()
export class AccidentControllerService {
  constructor(private loginData: LoginDataService, private accident: AccidentService, private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setAccidentBrief
   */
  setAccidentBrief(claimStatus): Observable<AccidentBrief> {
    let brief: AccidentBrief = new AccidentBrief();
    brief.applicationTypeIndicator = 'claim';
    brief.claimStatus = claimStatus;
    brief.userID = this.loginData.getProperty('userID');
    brief.addressBrief.applicationTypeIndicator = 'claim';
    brief.addressBrief.accidentIndicator = true;
    if(this.claimAccidentSummary.getClaimAccidentSummary().accident.fileStatus === 'C' && this.loginData.getProperty('logonCode') !== '00020') {
      brief.readOnlyIndicator = 'R';
      brief.addressBrief.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setAccidentComboData
   */
  setAccidentComboData(): Observable<AccidentComboData> {
    return of(CompanyParameterUtil.accidentComboDataHandler(this.loginData.getLoginData()));
  }

  /**============================================================================================================**/

  /**
   * setAccidentApplicationAccidentBrief
   */
  setAccidentApplicationAccidentBrief(): Observable<AccidentBrief> {
    let brief: AccidentBrief = new AccidentBrief();
    brief.applicationTypeIndicator = 'accident';
    brief.newAccidentIndicator = false;
    brief.userID = this.loginData.getProperty('userID');
    brief.addressBrief.applicationTypeIndicator = 'accident';
    brief.addressBrief.accidentIndicator = true;
    if (this.loginData.getProperty('logonCode') === '00100' && this.accident.getAccident().fileStatus === 'C') {
      brief.readOnlyIndicator = 'R';
      brief.addressBrief.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setAccidentApplicationAccidentComboData
   */
  setAccidentApplicationAccidentComboData(): Observable<AccidentComboData> {
    return of(CompanyParameterUtil.accidentComboDataHandler(this.loginData.getLoginData()));
  }
}
