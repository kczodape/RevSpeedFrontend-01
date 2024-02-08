import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-business-payment-dialog',
  templateUrl: './business-payment-dialog.component.html',
  styleUrl: './business-payment-dialog.component.scss'
})
export class BusinessPaymentDialogComponent {

  constructor(private adminService : AdminService, private router : Router, private snackBar: MatSnackBar){}
  buy() { 
    const customerId = sessionStorage.getItem('customerId'); 
    const businessId = sessionStorage.getItem('businessId');
    const durationDays = sessionStorage.getItem('durationDays');

    console.log(customerId);
    console.log(businessId);
    console.log('duration', durationDays);
    
    this.adminService.createCustomerServiceLinkBusiness(Number(customerId), Number(businessId), Number(durationDays)).subscribe(
      (response: any) => {
        // Handle success response, if needed
        this.router.navigateByUrl("/viewmoreplan")
        console.log('Post request successful:', response);
      },
      (error: any) => {
        this.router.navigateByUrl("/viewmoreplan")
        console.error('Error in post request:', error);
        // Handle error response, if needed
      }
    ); 
    this.snackBar.open('Business Plan successfully secured!', 'Close', {
      duration: 3000,
    });  
  }
  cancelled() {
    this.snackBar.open('Cancellation confirmed', 'Dismiss', {
        duration: 3000, // Set the duration for how long the snackbar should be displayed
        panelClass: ['snackbar-success'] // Add custom styles if needed
    });
}
}
