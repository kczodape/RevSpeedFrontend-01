import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { ResetComponent } from './reset/reset.component';

@Component({
  selector: 'app-otpdialog',
  templateUrl: './otpdialog.component.html',
  styleUrl: './otpdialog.component.scss',
})
export class OtpdialogComponent {
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  enteredOTP: string = '';
  notMatched: boolean = false;
  message: string = 'OTP does not matched, Retry !';

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<OtpdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  openSnackBar() {
    this.snackBar.open('Updated successful!', 'Close', {
      duration: 3000,
      verticalPosition: this.verticalPosition,
    });
  }

  verifyOTP() {
    const randomNumber = sessionStorage.getItem('randomNumber');
    if (this.enteredOTP === randomNumber) {
      // OTP is correct, you can close the dialog or perform any other action
      console.log('yes');
      this.dialogRef.close(true);
      this.openDialog('910ms', '750ms');
    } else {
      // OTP is incorrect, handle accordingly (show error message, etc.)
      // You may also want to reset the enteredOTP field
      console.log('no');
      this.enteredOTP = '';
      this.notMatched = true;
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ResetComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
