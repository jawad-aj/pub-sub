import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DiaryBrief} from '../../business-layer/models/brief/Diary.brief';
import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {AccidentService} from '../../business-layer/services/accident.service';
import {AttachmentComboData} from '../../business-layer/models/AttachmentComboData';

@Injectable()
export class AttachmentSectionControllerService {
  constructor(private loginData: LoginDataService, private accident: AccidentService) {
  }

  /**
   * setAccidentPhaseAttachmentDialogBrief
   */
  setAccidentPhaseAttachmentDialogBrief(): Observable<DiaryBrief> {
    let brief: DiaryBrief = new DiaryBrief();
    brief.accidentID = this.accident.getAccident().accidentID;
    brief.loginCompleteName = this.loginData.getCompleteLoginName();
    brief.loginName = this.loginData.getProperty('loginName');
    brief.applicationType = 'accident';
    brief.componentType = 'attachment';
    return of(brief);
  }

  /**
   * setAccidentPhaseAttachmentDialogComboData
   */
  setAccidentPhaseAttachmentDialogComboData(): Observable<AttachmentComboData> {
    return of(CompanyParameterUtil.attachmentComboDataHandler(this.loginData.getLoginData()));
  }

  /**
   * selected Row
   */
  setSelectedRow(row): Observable<any> {
    return of(row);
  }
}
