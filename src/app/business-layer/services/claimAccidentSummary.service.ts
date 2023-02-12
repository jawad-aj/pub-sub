import {Injectable} from '@angular/core';
import {Accident} from '../models/Accident';
import {ClaimAccidentSummary} from '../models/ClaimAccidentSummary';

@Injectable()
export class ClaimAccidentSummaryService {
  private claimAccidentSummary: ClaimAccidentSummary;

  public setClaimAccidentSummary(claimAccidentSummary: ClaimAccidentSummary) {
    this.claimAccidentSummary = claimAccidentSummary;
  }

  public getClaimAccidentSummary(): ClaimAccidentSummary {
    return this.claimAccidentSummary;
  }

  public getAccident(): Accident {
    if (this.claimAccidentSummary) {
      return this.claimAccidentSummary.accident;
    }
  }
}
