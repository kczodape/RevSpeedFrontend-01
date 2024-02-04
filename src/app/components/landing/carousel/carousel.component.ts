import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    {name:'img1.webp', caption:'Wi-Fi like speeds, now on the go.', para: 'Airtel Cricket World Cup Packs'},
    {name:'img2.avif', caption:'One Recharge. Unlimited Entertainment.', para: '3 GB Data/Day & Netflix subscription'},
    {name:'img3.avif', caption:'Airtel Referral program is here !', para: 'Get up to ₹300 every time you refer any Airtel services to your friends'},
    {name:'img4.avif', caption:'Family of 2. Or Family of 4.', para: 'Get Airtel Postpaid Family Plan for your special family'},
    {name:'img5.webp', caption:'Revspeed Black is all that you need!', para: 'Get 1 plan-1 bill for Mobile, DTH, Fiber and 16+ OTTs '}
  ];
}
