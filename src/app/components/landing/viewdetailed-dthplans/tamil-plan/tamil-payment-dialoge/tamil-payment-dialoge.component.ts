import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tamil-payment-dialoge',
  templateUrl: './tamil-payment-dialoge.component.html',
  styleUrl: './tamil-payment-dialoge.component.scss'
})
export class TamilPaymentDialogeComponent {

  constructor(private adminService: AdminService, private router: Router, private snackBar: MatSnackBar) { }
  buy() {
    const customerId = sessionStorage.getItem('customerId');
    const tamilId = sessionStorage.getItem('tamilId');

    console.log(customerId);
    console.log(tamilId);

    this.adminService.createCustomerServiceLinkTamil(Number(customerId), Number(tamilId)).subscribe(
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
    this.snackBar.open('Tamil Plan successfully secured!', 'Close', {
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
