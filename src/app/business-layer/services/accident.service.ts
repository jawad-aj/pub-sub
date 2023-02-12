import {Injectable} from '@angular/core';
import {Accident} from '../models/Accident';

@Injectable()
export class AccidentService {
  private accident: Accident;

  public setAccident(accident: Accident) {
    this.accident = accident;
  }

  public getAccident(): Accident {
    return this.accident;
  }

}
