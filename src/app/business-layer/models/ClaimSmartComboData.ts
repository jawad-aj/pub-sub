import {ClaimantComboData} from './ClaimantComboData';
import {ClaimParentComboData} from './ClaimParentComboData';
import {NextOfKinComboData} from './NextOfKinComboData';
import {DistrictCourtComboData} from './DistrictCourtComboData';
import {CommentsComboData} from './CommentsComboData';
import {DependantComboData} from './DependantComboData';
import {ClaimServiceProviderComboData} from './ClaimServiceProviderComboData';

export class ClaimSmartComboData {
  public claimComboData: ClaimParentComboData = new ClaimParentComboData();
  public claimantComboData: ClaimantComboData = new ClaimantComboData();
  public nextOfKinComboData: NextOfKinComboData = new NextOfKinComboData();
  public commentsComboData: CommentsComboData = new CommentsComboData();
  public dependantComboData: DependantComboData = new DependantComboData();
  public districtCourtComboData: DistrictCourtComboData = new DistrictCourtComboData();
  public claimServiceProviderComboData: ClaimServiceProviderComboData = new ClaimServiceProviderComboData();
}
