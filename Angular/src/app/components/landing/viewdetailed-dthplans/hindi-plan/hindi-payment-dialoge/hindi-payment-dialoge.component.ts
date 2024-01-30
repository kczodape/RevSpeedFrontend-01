import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hindi-payment-dialoge',
  templateUrl: './hindi-payment-dialoge.component.html',
  styleUrl: './hindi-payment-dialoge.component.scss'
})
export class HindiPaymentDialogeComponent {


  constructor(private adminService: AdminService, private router: Router) { }
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
  }
}
