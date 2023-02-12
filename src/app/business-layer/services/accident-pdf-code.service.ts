import {Injectable} from '@angular/core';
import {AccidentLetterPDF} from '../models/brief/briefpayload/AccidentLetterPDF';

@Injectable()
export class AccidentPdfCodeService {
  private accidentPDF: AccidentLetterPDF = new AccidentLetterPDF();

  public setCode(code: string, vehicleIndex: number, claimIndex?: number) {
    this.accidentPDF.letterType = code;
    this.accidentPDF.vehicleIndex = vehicleIndex;
    if (claimIndex) {
      this.accidentPDF.claimIndex = claimIndex;
    }
  }

  public setCodeObj(pdf) {
    this.accidentPDF = pdf;
  }

  public getCode(): AccidentLetterPDF {
    return this.accidentPDF;
  }

}
