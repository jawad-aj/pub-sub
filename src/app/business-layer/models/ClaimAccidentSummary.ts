import {Lookup} from './Lookup';
import {Accident} from './Accident';
import {AccidentSummary} from './AccidentSummary';

export class ClaimAccidentSummary {

  public accident: Accident = new Accident();
  public accidentSummary: AccidentSummary = new AccidentSummary();
  public registrationNumbers: Lookup[] = [];

}
