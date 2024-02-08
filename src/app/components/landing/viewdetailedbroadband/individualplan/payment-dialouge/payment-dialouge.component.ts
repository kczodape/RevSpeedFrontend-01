import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialouge',
  templateUrl: './payment-dialouge.component.html',
  styleUrl: './payment-dialouge.component.scss'
})
export class PaymentDialougeComponent {
  constructor(private adminService : AdminService, private router : Router){}
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
    
  }
}
