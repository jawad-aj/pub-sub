import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {InitialAssessmentComboData} from '../../business-layer/models/InitialAssessmentComboData';
import {InitialAssessmentBrief} from '../../business-layer/models/brief/InitialAssessment.brief';

@Injectable()
export class InitialAssessmentControllerService {
  constructor(private loginData: LoginDataService) {
  }

  /**
   * setInitialAssessmentBrief
   */
  setInitialAssessmentBrief(data: any): Observable<any> {
    let brief: InitialAssessmentBrief = new InitialAssessmentBrief();
    brief.assessedBy = this.loginData.getCompleteLoginName();
    if (this.loginData.getProperty('logonCode') !== '00020') {
      {
        brief.readOnlyIndicator = 'R';
      }
    }
    return of(brief);
  }

  /**
   * setInitialAssessmentComboData
   */
  setInitialAssessmentComboData(): Observable<InitialAssessmentComboData> {
    return of(CompanyParameterUtil.initialAssessmentComboDataHandler(this.loginData.getLoginData()));
  }
}
