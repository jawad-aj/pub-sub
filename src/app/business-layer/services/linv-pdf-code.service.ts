import {Injectable} from '@angular/core';
import {LINVPDFCode} from '../models/LINVPDFCode';

@Injectable()
export class LINVPdfCodeService {
  private linvpdfCode: LINVPDFCode = new LINVPDFCode();

  public setCode(pdf) {
    this.linvpdfCode = pdf;
  }

  public getCode(): LINVPDFCode {
    return this.linvpdfCode;
  }
}


