import {VehicleDriverBrief} from './VehicleDriver.brief';
import {VehicleOwnerBrief} from './VehicleOwner.brief';
import {VehicleBrief} from './Vehicle.brief';

export class VehicleSmartBrief {
  public vehicleBrief: VehicleBrief = new VehicleBrief();
  public driverBrief: VehicleDriverBrief = new VehicleDriverBrief();
  public ownerBrief: VehicleOwnerBrief = new VehicleOwnerBrief();
}
