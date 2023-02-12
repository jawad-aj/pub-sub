import {VehicleComboData} from './VehicleComboData';
import {VehicleDriverComboData} from './VehicleDriverComboData';
import {VehicleOwnerComboData} from './VehicleOwnerComboData';

export class VehicleSmartComboData {
  public vehicleComboData: VehicleComboData = new VehicleComboData();
  public driverComboData: VehicleDriverComboData = new VehicleDriverComboData();
  public ownerComboData: VehicleOwnerComboData = new VehicleOwnerComboData();
}
