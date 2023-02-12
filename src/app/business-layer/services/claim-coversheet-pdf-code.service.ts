import {Injectable} from '@angular/core';
import {ClaimCoverSheet} from '../models/ClaimCoverSheet';

@Injectable()
export class ClaimCoversheetPdfCodeService {
  private claimCoverSheet: ClaimCoverSheet = new ClaimCoverSheet();

  public setCode(claimCoverSheet: ClaimCoverSheet) {
    this.claimCoverSheet = claimCoverSheet;
  }

  public getCode(): ClaimCoverSheet {
    return this.claimCoverSheet;
  }

}
