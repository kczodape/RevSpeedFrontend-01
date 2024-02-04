import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamil-payment-dialoge',
  templateUrl: './tamil-payment-dialoge.component.html',
  styleUrl: './tamil-payment-dialoge.component.scss'
})
export class TamilPaymentDialogeComponent {

  constructor(private adminService: AdminService, private router: Router) { }
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
  }}
