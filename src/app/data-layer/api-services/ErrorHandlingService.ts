import {ErrorHandler, Injectable} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {DialogController} from '../../view-layer/dialog/DialogController';

@Injectable()
export class ErrorHandlingService extends ErrorHandler {
  constructor(public dialog: MatDialog) {
    super();
  }

  dialogRef: MatDialogRef<DialogController>;

  handleError(error) {
    super.handleError(error);
   /* console.log("====>",error)
    console.log("====>2 ",error.message)*/
    this.dialogRef = this.dialog.open(DialogController, {
      data: {
        dialogName: 'errorHandling',
        dialogTitle: 'Error!',
        dialogDescription: error.message,
        error
      }
    });
  }
}
