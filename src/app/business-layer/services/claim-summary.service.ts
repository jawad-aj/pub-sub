import {Injectable} from '@angular/core';
import {ClaimSummary} from '../models/ClaimSummary';

@Injectable()
export class ClaimSummaryService {
  private claimSummary: ClaimSummary[];

  public setClaimSummary(claimSummary: ClaimSummary[]) {
    this.claimSummary = claimSummary;
  }

  public getClaimSummary(): ClaimSummary[] {
    return this.claimSummary;
  }
}
