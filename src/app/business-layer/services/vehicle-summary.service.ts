import {Injectable} from '@angular/core';
import {VehicleSummary} from '../models/VehicleSummary';

@Injectable()
export class VehicleSummaryService {
  private vehicleSummary: VehicleSummary[];

  public setVehicleSummary(vehicleSummary: VehicleSummary[]) {
    this.vehicleSummary = vehicleSummary;
  }

  public getVehicleSummary(): VehicleSummary[] {
    return this.vehicleSummary;
  }
}
