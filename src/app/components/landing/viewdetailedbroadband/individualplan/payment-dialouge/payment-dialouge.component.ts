import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment-dialouge',
  templateUrl: './payment-dialouge.component.html',
  styleUrl: './payment-dialouge.component.scss'
})
export class PaymentDialougeComponent {
  constructor(private adminService: AdminService, private router: Router, private snackBar: MatSnackBar) { }
  buy() {
    const customerId = sessionStorage.getItem('customerId');
    const individualId = sessionStorage.getItem('individualId');
    const durationDays = sessionStorage.getItem('durationDays');

    console.log(customerId);
    console.log(individualId);
    console.log('duration', durationDays);

    this.adminService.createCustomerServiceLinkIndividual(Number(customerId), Number(individualId), Number(durationDays)).subscribe(
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
    this.snackBar.open('Individual Plan successfully secured!', 'Close', {
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
