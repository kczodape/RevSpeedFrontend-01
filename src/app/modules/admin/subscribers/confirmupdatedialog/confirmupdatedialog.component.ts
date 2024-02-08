import { Component } from '@angular/core';
// import { Article } from '../subscribers.component';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-confirmupdatedialog',
  templateUrl: './confirmupdatedialog.component.html',
  styleUrl: './confirmupdatedialog.component.scss',
})
export class ConfirmupdatedialogComponent {

  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  storedCustomerId : any = sessionStorage.getItem('id'); // You can set the customer ID dynamically
  newRole:string = 'ADMIN'; 

  constructor(public snackBar: MatSnackBar, private adminService:AdminService){}


  openSnackBar() {    
    this.updateCustomerRole();
  }

  updateCustomerRole() {
    this.adminService.updateCustomerRole(this.storedCustomerId, this.newRole)
      .subscribe(
        (response) => {
          console.log('Role updated successfully:', response);
          this.snackBar.open('Updated successful!', 'Close', {
            duration: 3000,
            verticalPosition: this.verticalPosition,
          });
        },
        (error) => {
          console.error('Error updating role:', error);
          this.snackBar.open('Error updating role!', 'Close', {
            duration: 3000,
            verticalPosition: this.verticalPosition,
          });
        }
      );
  }
}
