import {Injectable, NgZone} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';
import {StoreService} from "./store.service";
import {LoginDataService} from "./login-data.service";
import {CompanyParameter} from "../models/CompanyParam";
import {CompanyParameterUtil} from "../../data-layer/api-services/util/CompanyParameterUtil";
import {CMSEvents} from "../models/CMSEvents";
import {NgIdleServiceParam} from "../models/NgIdleServiceParam";


@Injectable()
export class NgIdleService {
  serviceParam: NgIdleServiceParam = new NgIdleServiceParam();
  subscription: Subscription = new Subscription();

  constructor(private zone: NgZone,
              private storeService: StoreService,
              private loginDataUtil: LoginDataService,
  ) {

  }

  public startSessionTimeout(): void {
    if (!this.serviceParam.sessionInit && (this.loginDataUtil.getLoginData())) {
      this.addEventListener();
      this.setCpTime();
      this.resetLogout();
      this.startFirstTimer();
      this.serviceParam.sessionInit = true;
    }
  }

  getLastAction(): number {
    return parseInt(this.serviceParam.lastActionTime, 10);
  }

  setCpTime() {
    const cps: CompanyParameter[] = CompanyParameterUtil.getCompanyParametersObject('codetables', 'IDLE_TIME', this.loginDataUtil.getProperty('companyParameters'));
    const cp: CompanyParameter = cps.find(value => value.code = 'MINUTES')
    if (cp) {
      this.serviceParam.dialogDescription = cp.value;
      this.serviceParam.dialogTitle = 'Auto Logout Scheduled!';
      this.serviceParam.dialogBtnLabel = 'Continue';
      this.serviceParam.firstTimer = Number(cp.customField1);
      this.serviceParam.secondTimer = Number(cp.customField2);
    }
  }

  reset() {
    this.serviceParam.lastActionTime = String(Date.now());
    this.serviceParam.totalRemainingTime = '';
    this.serviceParam.runSecondTimer = false;
    this.serviceParam.runFirstTimer = false;
  }

  btnContinueHandler() {
    this.serviceParam.eventInit = false;
    this.serviceParam.sessionInit = false;
    this.eventDispatcher('loadSetIsActive', true);
    this.startSessionTimeout();
  }

  eventDispatcher(code: string, data: any) {
    let event: CMSEvents = new CMSEvents();
    event.code = code;
    event.data = data;
    this.storeService.eventDispatcher(event);
  }

  private addEventListener(): void {
    if (!this.serviceParam.eventInit && this.loginDataUtil.getLoginData()) {
      this.zone.runOutsideAngular(() => {
        this.serviceParam.eventCallBack = () =>    this.resetLogout();
        document.addEventListener('click', this.serviceParam.eventCallBack);
        document.addEventListener('keydown', this.serviceParam.eventCallBack);
        document.addEventListener('touch', this.serviceParam.eventCallBack);
        this.serviceParam.eventInit = true;
      });
    }
  }

   removeEventListener(): void {
    document.removeEventListener('click', this.serviceParam.eventCallBack);
    document.removeEventListener('keydown', this.serviceParam.eventCallBack);
    document.removeEventListener('touch', this.serviceParam.eventCallBack);
  }

  private startFirstTimer(): void {
    const intervalDuration = 1000;
    this.serviceParam.firstTimerIdle = interval(intervalDuration).pipe(
      map((tick: number) => {
        return tick;
      }),
      takeWhile(() => this.serviceParam.runFirstTimer)
    );
    this.firstTimerHandler();
  }

  private firstTimerHandler(): void {
    this.subscription.add(this.serviceParam.firstTimerIdle.subscribe(() => {
      const now = Date.now();
      const timeLeft = this.getLastAction() + this.serviceParam.firstTimer * 60 * 1000;
      const diff = timeLeft - now;
      const isTimeout = diff < 0;
      if (isTimeout) {
        this.zone.run(() => {
          this.removeEventListener();
          this.eventDispatcher('NgIdleSmartDialog', true);
          if (this.serviceParam.secondTimer > 0) {
            this.startSecondTimer();
          }
          this.serviceParam.runFirstTimer = false;
        });
      }
    }));
  }

  private startSecondTimer = () => {
    this.serviceParam.runSecondTimer = true;
    const intervalDuration = 1000;
    this.serviceParam.secondTimerIdle = interval(intervalDuration).pipe(
      map((tick: number) => {
        return tick;
      }),
      takeWhile(() => this.serviceParam.runSecondTimer)
    );
    this.secondTimerHandler();
  }

  private secondTimerHandler(): void {
    let timeInSecond = 60;
    let timeInMin = this.serviceParam.secondTimer - 1;
    this.subscription.add(this.serviceParam.secondTimerIdle.subscribe(() => {
      if (--timeInSecond === 0) {
        if (--timeInMin === 0) {
          timeInMin = (timeInMin > 0) ? (timeInMin - 1) : 0;
        }
        if (timeInMin === -1 && timeInSecond === 0) {
          this.serviceParam.runSecondTimer = false;
          this.eventDispatcher('loadExitApplication', undefined);
          this.eventDispatcher('loadSetIsActive', false);
          this.eventDispatcher('route', '/login');
          this.serviceParam.dialogDescription = 'You were logged out of system due to inactivity.';
          this.serviceParam.dialogTitle = 'System Logged Out!';
          this.serviceParam.dialogBtnLabel = 'Ok';
        }
        if (timeInMin < 0) {
          timeInMin = 0;
          setTimeout(() => {
            timeInSecond = 60;
          }, 800);
        } else {
          timeInSecond = 60;
        }
      }
      this.serviceParam.totalRemainingTime = timeInMin + ':' + timeInSecond;
    }));
  }
  resetLogout(){
    this.reset();
    this.serviceParam.runFirstTimer = true;
  }
  sessionInitHandler(){
    this.serviceParam.sessionInit = false;
  }
  logoutHandler(){
    this.removeEventListener();
    this.reset();
    this.sessionInitHandler();
  }
}

