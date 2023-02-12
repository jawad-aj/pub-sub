import {HomeHeader} from './HomeHeader';
import {ClaimApplicationHeader} from './ClaimApplicationHeader';
import {SearchAccidentHeader} from './SearchAccidentHeader';

export class HeaderMenu{
  public home:HomeHeader = new HomeHeader();
  public searchAccident:SearchAccidentHeader = new SearchAccidentHeader();
  public claimApplication:ClaimApplicationHeader = new ClaimApplicationHeader();
}
