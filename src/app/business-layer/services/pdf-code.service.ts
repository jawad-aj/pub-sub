import {Injectable} from '@angular/core';

@Injectable()
export class PdfCodeService {
  private code: string;

  public setCode(code: string) {
    this.code = code;
  }

  public getCode(): string {
    return this.code;
  }

}
