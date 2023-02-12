import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {VehicleSectionComboData} from '../../business-layer/models/comboData/VehicleSectionComboData';
import {VehicleSmartBrief} from '../../business-layer/models/brief/VehicleSmart.brief';
import {VehicleSmartComboData} from '../../business-layer/models/VehicleSmartComboData';
import {AccidentService} from '../../business-layer/services/accident.service';
import {VehicleDriverBriefPayload} from '../../business-layer/models/brief/briefpayload/VehicleDriverBriefPayload';

@Injectable()
export class VehicleSectionControllerService {
  constructor(private loginData: LoginDataService, private accident: AccidentService) {
  }


  /**
   * setAccidentPhaseVehicleSectionComboData
   */
  setAccidentPhaseVehicleSectionComboData(): Observable<VehicleSectionComboData> {
    return of(CompanyParameterUtil.vehicleSectionComboDataHandler(this.loginData.getLoginData()));
  }

  /**
   * selected Row
   */
  setSelectedRow(row): Observable<any> {
    return of(row);
  }

  /**
   * setAccidentPhaseVehicleBrief
   */
  setVehicleBrief(payload: VehicleDriverBriefPayload): Observable<VehicleSmartBrief> {
    let brief: VehicleSmartBrief = new VehicleSmartBrief();
    brief.vehicleBrief.accidentID = this.accident.getAccident().accidentID;
    brief.vehicleBrief.vehicleID = this.accident.getAccident().vehicles[payload.vehicleIndex].vehicleID;
    // brief.vehicleBrief.claimID = this.accident.getAccident().vehicles[payload.vehicleIndex].claimID; Required Discussion
    brief.vehicleBrief.ctpVirmDatabase = "1";
    brief.vehicleBrief.loginUserID = this.loginData.getProperty('userID');
    brief.vehicleBrief.loginUserName = this.loginData.getCompleteLoginName();
    brief.vehicleBrief.accidentDate = this.accident.getAccident().accidentDate;
    brief.vehicleBrief.applicationTypeIndicator = 'accident';
    brief.driverBrief.applicationTypeIndicator = 'accident';
    brief.ownerBrief.applicationTypeIndicator = 'accident';
    brief.driverBrief.accidentClassification = payload.accidentClassification;
    brief.driverBrief.newAccident = !payload.vehicleID;
    if (this.loginData.getProperty('logonCode') === '00100' && this.accident.getAccident().fileStatus === 'C') {
      brief.vehicleBrief.readOnlyIndicator = 'R';
      brief.ownerBrief.readOnlyIndicator = 'R';
      brief.ownerBrief.address.readOnlyIndicator = 'R';
      brief.driverBrief.readOnlyIndicator = 'R';
      brief.driverBrief.address.readOnlyIndicator = 'R';
    }
    return of(brief);
  }

  /**
   * setAccidentPhaseVehicleComboData
   */
  setVehicleComboData(): Observable<VehicleSmartComboData> {
    return of(CompanyParameterUtil.vehicleComboDataHandler(this.loginData.getLoginData()));
  }
}
