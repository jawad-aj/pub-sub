import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DiaryBrief} from '../../business-layer/models/brief/Diary.brief';
import {SelectedRowDataService} from '../../business-layer/services/selected-row.service';
import {CompanyParameterUtil} from "./util/CompanyParameterUtil";

@Injectable()
export class DiaryControllerService {
  constructor(private loginData: LoginDataService, private selectedRow: SelectedRowDataService) {
  }

  /**
   * setDiaryBrief
   */
  setDiaryBrief(): Observable<DiaryBrief> {
    let brief: DiaryBrief = new DiaryBrief();
    brief.applicationType = 'claim';
    brief.componentType = 'diary';
    brief.createdBy = this.loginData.getCompleteLoginName();
    brief.userID = this.loginData.getProperty('userID');
    brief.accidentID = this.selectedRow.getProperty('accidentID');
    brief.claimID = this.selectedRow.getProperty('claimID');
    brief.attachmentCodes = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ATTACHMENT TITLE', this.loginData.getLoginData().companyParameters);
    return of(brief);
  }
}
