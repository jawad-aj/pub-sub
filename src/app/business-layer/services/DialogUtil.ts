import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
@Injectable()
export class DialogUtil {

  constructor(public dialog: MatDialog) {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  openDialog(reference: any,data: any,width:any) {
    const dialogRef = this.dialog.open(reference, {
      width: width,
      disableClose: true,
      data: data
    });
    return dialogRef;
  }

}
