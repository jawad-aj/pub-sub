import {Participant} from './Participant';
import {ReinsuranceProgramLayer} from './ReinsuranceProgramLayer';

export class ReinsuranceProgram {

  private reinsuranceProgramID: number = null;
  private reinsuranceProgramName: string = '';
  private reinsuranceProgramStartDate: Date;
  private reinsuranceProgramEndDate: Date;
  private participantOne: Participant;
  private participantTwo: Participant;
  private participantThree: Participant;
  private participantFour: Participant;
  private participantFive: Participant;
  private participantSix: Participant;
  private participantSeven: Participant;
  private reinsuranceProgramLayerOne: ReinsuranceProgramLayer = new ReinsuranceProgramLayer();
  private reinsuranceProgramLayerTwo: ReinsuranceProgramLayer = new ReinsuranceProgramLayer();
  private adjustedIndex: number = 0;
  private ownedCorrected: string = '';
}
