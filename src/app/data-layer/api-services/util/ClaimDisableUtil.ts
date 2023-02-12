import {LoginDataService} from '../../../business-layer/services/login-data.service';
import {ClaimAccidentSummaryService} from '../../../business-layer/services/claimAccidentSummary.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ClaimDisableUtil {
  constructor(private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService) {
  }

  disableForms(): string {
    if (this.loginData.getProperty('logonCode') === '00150') { // Collection Officer
      return 'R';
    } else if (this.loginData.getProperty('logonCode') === '00030') { // Claim Officer
        if (this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimStatus == '00016' ||
          this.claimAccidentSummary.getAccident().fileStatus === 'C') {
          return 'R';
        } else {
          return 'E';
        }
    } else if (this.loginData.getProperty('logonCode') !== '00020') { // Only not applicable for Claim Manager
      if (this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimStatus == '00016' || this.claimAccidentSummary.getAccident().fileStatus === 'C') {
        return 'R';
      } else {
        return 'E';
      }
    } else {
      return 'E';
    }
  }
}
