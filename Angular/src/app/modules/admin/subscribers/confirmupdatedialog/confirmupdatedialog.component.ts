import { Component } from '@angular/core';
// import { Article } from '../subscribers.component';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmupdatedialog',
  templateUrl: './confirmupdatedialog.component.html',
  styleUrl: './confirmupdatedialog.component.scss',
})
export class ConfirmupdatedialogComponent {

  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public snackBar: MatSnackBar){}

  openSnackBar() {
    this.snackBar.open('Updated successful!', 'Close', {
      duration: 3000,
      verticalPosition: this.verticalPosition,
    });
  }
}
