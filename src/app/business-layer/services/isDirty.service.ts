import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DialogController} from '../../view-layer/dialog/DialogController';
import {MatDialog} from '@angular/material/dialog';
import {CMSEvents} from '../models/CMSEvents';
import {StoreService} from './store.service';

@Injectable()
export class IsDirtyService {
  private isDirty: boolean;

  constructor(private dialog: MatDialog,private storeService:StoreService) {
  }

  public setIsDirty(param: boolean) {
    this.isDirty = param;
  }

  public getIsDirty(): boolean {
    return this.isDirty;
  }
  /**
   *  Un-defining State ClaimAccidentSummary
   */
  clearState(){
      let event: CMSEvents = new CMSEvents();
      event.code = 'loadExitApplication';
      this.storeService.eventDispatcher(event);
  }
  /**
   *  Un-defining all State
   */
  logout(){
      let event: CMSEvents = new CMSEvents();
      event.code = 'loadLogout';
      this.storeService.eventDispatcher(event);
  }


  /**
   *  Dialog Box
   */
  openDialog(dialogTitle, dialogName, description): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogController, {
      width: '35%',
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle,
        dialogDescription: description,
      }
    });
    return dialogRef.afterClosed();
  }
}
