import {Address} from './Address';
import {ContactInformation} from './ContactInformation';
import {Logo} from './Logo';

export class Company {
  public companyID: number = null;
  public abnNumber: string = '';
  public acnNumber: string = '';
  public address: Address = new Address();
  public companyName: string = '';
  public contactInformation: ContactInformation = new ContactInformation();
  public contactName: string = '';
  public gstNumber: string = '';
  public header1Text: string = '';
  public header2Text: string = '';
  public logos: Logo[] = [];
  public lastRedbookUpdate: Date;

}
