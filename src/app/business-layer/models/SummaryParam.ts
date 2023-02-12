import {ClaimSummary} from "./ClaimSummary";
import {VehicleSummary} from "./VehicleSummary";
import {AccidentSummary} from "./AccidentSummary";

export class SummaryParam {
  public claimSummary: ClaimSummary[] = [];
  public vehicleSummary: VehicleSummary[] = [];
  public accidentSummary: AccidentSummary;
}
