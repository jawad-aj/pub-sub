import {LookUpModel} from './LookupModel';
import {Lookup} from './Lookup';
import {SearchAccidentComboData} from './SearchAccidentComboData';

export class WorkBasketComboData {
  public day: LookUpModel[] = [];
  public logOnCodes: Lookup[] = [];
  public menuItemSource: LookUpModel[] = [];
  public popupTitles: LookUpModel[] = [];
  public searchAccident: SearchAccidentComboData = new SearchAccidentComboData();
}
