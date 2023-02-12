import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClaimWQSummary} from '../../business-layer/models/ClaimWQSummary';

@Injectable()
export class SelectedRowService {
  constructor() {
  }

  /**
   * setClaimBrief
   */
  setSelectedRow(data: ClaimWQSummary): Observable<ClaimWQSummary> {
    return of(data);
  }
}
