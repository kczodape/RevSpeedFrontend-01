import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-payment-dialog',
  templateUrl: './business-payment-dialog.component.html',
  styleUrl: './business-payment-dialog.component.scss'
})
export class BusinessPaymentDialogComponent {

  constructor(private adminService : AdminService, private router : Router){}
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
    
  }
}
