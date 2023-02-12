import {Observable} from "rxjs";

export class NgIdleServiceParam {
  public firstTimer: number;
  public secondTimer: number;
  public runFirstTimer: boolean;
  public runSecondTimer: boolean;
  public totalRemainingTime: string;
  public lastActionTime: string;
  public firstTimerIdle: Observable<number>;
  public secondTimerIdle: Observable<number>;
  public eventCallBack: () => void;
  public eventInit: boolean = false;
  public sessionInit: boolean = false;
  public dialogDescription: string;
  public dialogTitle: string;
  public dialogBtnLabel: string;
}
