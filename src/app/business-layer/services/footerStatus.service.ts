import {Injectable} from '@angular/core';

@Injectable()
export class FooterStatusService {
  private footer: any;

  public setFooter(footer) {
    this.footer = footer;
  }

  public getFooter() {
    return this.footer;
  }
}
