import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AttachmentComboData} from '../../business-layer/models/AttachmentComboData';
import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {SelectedRowDataService} from '../../business-layer/services/selected-row.service';
import {DiaryBrief} from '../../business-layer/models/brief/Diary.brief';
import {AccidentService} from '../../business-layer/services/accident.service';
import {Lookup} from '../../business-layer/models/Lookup';

@Injectable()
export class AttachmentControllerService {
  vehicleIndex: number = 0;

  constructor(private loginData: LoginDataService, private selectedRow: SelectedRowDataService, private accidentService: AccidentService) {
  }

  /**
   * setAttachmentBrief
   */
  setAttachmentBrief(): Observable<DiaryBrief> {
    let brief: DiaryBrief = new DiaryBrief();
    brief.accidentID = this.selectedRow.getProperty('accidentID');
    brief.claimID = this.selectedRow.getProperty('claimID');
    brief.loginCompleteName = this.loginData.getCompleteLoginName();
    brief.loginName = this.loginData.getProperty('loginName');
    brief.applicationType = 'claim';
    brief.componentType = 'attachment';
    return of(brief);
  }

  /**
   * setAttachmentComboData
   */
  setAttachmentComboData(): Observable<AttachmentComboData> {
    return of(CompanyParameterUtil.attachmentComboDataHandler(this.loginData.getLoginData()));
  }

  /**
   * setAccidentPhaseAttachmentGridBrief
   */
  setAccidentPhaseAttachmentGridBrief(): Observable<DiaryBrief> {
    let brief: DiaryBrief = new DiaryBrief();
    brief.accidentID = this.accidentService.getAccident().accidentID;
    brief.loginCompleteName = this.loginData.getCompleteLoginName();
    brief.loginName = this.loginData.getProperty('loginName');
    brief.applicationType = 'accident';
    brief.componentType = 'attachment';
    brief.claims = this.claimsHandler();
    return of(brief);
  }

  claimsHandler(): Lookup[] {
    let claims: Lookup[] = [];
    this.vehicleAtFaultIndex();
    if (this.accidentService.getAccident().vehicles.length !== 0) {
      for (let i = 0; i < this.accidentService.getAccident().vehicles[this.vehicleIndex].claims.length; i++) {
        let lookup: Lookup = new Lookup();
        lookup.data = String(this.accidentService.getAccident().vehicles[this.vehicleIndex].claims[i].claimID);
        lookup.label = this.accidentService.getAccident().vehicles[this.vehicleIndex].claims[i].claimNumber;
        lookup.label1 = this.getClaimantCompleteName(this.accidentService.getAccident().vehicles[this.vehicleIndex].claims[i].claimant.firstName, this.accidentService.getAccident().vehicles[this.vehicleIndex].claims[i].claimant.lastName);
        claims.push(lookup);
      }
    }
    return claims;
  }

  vehicleAtFaultIndex() {
    if (this.accidentService.getAccident().vehicles.length > 0) {
      this.vehicleIndex = this.accidentService.getAccident().vehicles.findIndex(value => value.vehicleAtFaultIndicator === 'T');
    }
  }

  getClaimantCompleteName(firstName, lastName): string {
    if (firstName && lastName) {
      return firstName + ' ' + lastName;
    }else {
      return '';
    }
  }

  /**
   * setAccidentPhaseAttachmentGridComboData
   */
  setAccidentPhaseAttachmentGridComboData(): Observable<AttachmentComboData> {
    return of(CompanyParameterUtil.attachmentComboDataHandler(this.loginData.getLoginData()));
  }
}
