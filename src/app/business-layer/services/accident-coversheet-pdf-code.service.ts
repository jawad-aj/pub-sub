import {Injectable} from '@angular/core';
import {AccidentCoverSheetPayload} from '../models/brief/AccidentCoverSheetPayload';

@Injectable()
export class AccidentCoversheetPdfCodeService {
  private accidentCoverSheet: AccidentCoverSheetPayload = new AccidentCoverSheetPayload();

  public setCode(accidentCoverSheet: AccidentCoverSheetPayload) {
    this.accidentCoverSheet = accidentCoverSheet;
  }

  public getCode(): AccidentCoverSheetPayload {
    return this.accidentCoverSheet;
  }

}
