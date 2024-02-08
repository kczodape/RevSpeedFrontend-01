import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hindi-payment-dialoge',
  templateUrl: './hindi-payment-dialoge.component.html',
  styleUrl: './hindi-payment-dialoge.component.scss'
})
export class HindiPaymentDialogeComponent {


  constructor(private adminService: AdminService, private router: Router, private snackBar: MatSnackBar) { }
  buy() {
    const customerId = sessionStorage.getItem('customerId');
    const hindiId = sessionStorage.getItem('hindiId');

    console.log(customerId);
    console.log(hindiId);

    this.adminService.createCustomerServiceLinkHindi(Number(customerId), Number(hindiId)).subscribe(
      (response: any) => {
        // Handle success response, if needed
        this.router.navigateByUrl("/viewdetailedplan")
        console.log('Post request successful:', response);
      },
      (error: any) => {
        this.router.navigateByUrl("/viewdetailedplan")
        console.error('Error in xyz post request:', error);
        // Handle error response, if needed
      }
    );
    this.snackBar.open('Hindi Plan successfully secured!', 'Close', {
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
