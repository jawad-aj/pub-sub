import {Injectable} from "@angular/core";
import {ClaimWQSummary} from "../models/ClaimWQSummary";

@Injectable()
export class SelectedRowDataService {
  private selectedRow: ClaimWQSummary;

  public setSelectedRow(selectedRow: ClaimWQSummary) {
    this.selectedRow = selectedRow;
  }

  public getSelectedRow(): ClaimWQSummary {
    return this.selectedRow;
  }

  public getProperty(property: string) {
    return this.selectedRow[property];
  }
}
