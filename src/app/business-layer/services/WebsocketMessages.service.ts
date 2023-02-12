import {Injectable} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {StoreService} from './store.service';
import {BrokerList} from '../brokerage/ngrx-stubs/brokerlist';
import {ClaimWQSummary} from "../models/ClaimWQSummary";
import {LoginDataService} from "./login-data.service";


@Injectable()
export class WebsocketMessagesService {
  claimWQSummary: ClaimWQSummary[] = [];
  logonCode: string;
  userID: number;

  constructor(private storeService: StoreService, private loginDataService: LoginDataService) {
  }

  getClaimWQSummary() {
    const subscription: Subscription = new Subscription();
    subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_WORKBASKET_STORE).claimWQSummary$.subscribe((value: ClaimWQSummary[]) => {
      this.claimWQSummary = value;
    }));
    subscription.unsubscribe();
    if (!this.claimWQSummary) {
      this.claimWQSummary = [];
    }
    this.logonCode = this.loginDataService.getProperty('logonCode');
    this.userID = this.loginDataService.getProperty('userID');
  }

  websocketMessagesHandler(data: any, operation): Observable<any> {
    this.getClaimWQSummary();
    const payLoad = data.payLoad;
    const claimWQSummary: ClaimWQSummary = data.messageData;
    const index: number = this.findRecordIndex(this.claimWQSummary, payLoad.accidentID, payLoad.claimID);
    switch (operation) {
      case 'assign':
        this.assignHandler(claimWQSummary, this.claimWQSummary, index, this.userID);
        break;
      case 'reAssign':
        this.reAssignHandler(claimWQSummary, this.claimWQSummary, index, this.userID);
        break;
      case 'takeControl':
        this.takeControlHandler(claimWQSummary, this.claimWQSummary, index);
        break;
      case 'saveClaim':
        this.assignHandler(claimWQSummary, this.claimWQSummary, index, this.userID, true);
        break;
    }
    return of(this.claimWQSummary);
  }

  findRecordIndex(claimWQSummaryArr: ClaimWQSummary[], accidentID: number, claimID: number): number {
    return claimWQSummaryArr.findIndex(value => (value.accidentID === accidentID && value.claimID === claimID));
  }

  assignHandler(claimWQSummary: ClaimWQSummary, claimWQSummaryArr: ClaimWQSummary[], index: number, userID: number, saveClaim = false) {
    if (this.logonCode === '00020') {
      this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
    } else if (this.logonCode === '00030') {
      if (claimWQSummary.CMSAssigneeID && claimWQSummary.CMSAssigneeID === userID) {
        this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
      }
    }
    if (saveClaim && this.logonCode === '00060') {
      if (claimWQSummary.independantReviewerID && claimWQSummary.independantReviewerID === userID) {
        this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
      }
    }
  }

  reAssignHandler(claimWQSummary: ClaimWQSummary, claimWQSummaryArr: ClaimWQSummary[], index: number, userID: number) {
    if (this.logonCode === '00020') {
      this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
    } else if (this.logonCode === '00030') {
      if (claimWQSummary.CMSAssigneeID) {
        if (claimWQSummary.CMSAssigneeID === userID) {
          this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
        } else {
          this.deleteHandler(claimWQSummaryArr, index);
        }
      }
    } else {
      if (claimWQSummary.independantReviewerID) {
        if (claimWQSummary.independantReviewerID === userID) {
          this.addUpdateHandler(claimWQSummary, claimWQSummaryArr, index);
        } else {
          this.deleteHandler(claimWQSummaryArr, index);
        }
      }
    }
  }

  takeControlHandler(claimWQSummary: ClaimWQSummary, claimWQSummaryArr: ClaimWQSummary[], index: number) {
    if (index >= 0) {
      if (this.logonCode === '00020') {
        claimWQSummaryArr[index] = claimWQSummary;
      } else {
        claimWQSummaryArr.splice(index, 1);
      }
    }
  }

  addUpdateHandler(claimWQSummary: ClaimWQSummary, claimWQSummaryArr: ClaimWQSummary[], index: number) {
    if (index < 0) {
      claimWQSummaryArr.unshift(claimWQSummary);
    } else {
      claimWQSummaryArr[index] = claimWQSummary;
    }
  }

  deleteHandler(claimWQSummaryArr: ClaimWQSummary[], index: number) {
    if (index >= 0) {
      claimWQSummaryArr.splice(index, 1);
    }
  }

  updateHandler(claimWQSummary: ClaimWQSummary, claimWQSummaryArr: ClaimWQSummary[], index: number) {
    if (index >= 0) {
      claimWQSummaryArr[index] = claimWQSummary;
    }
  }

}
