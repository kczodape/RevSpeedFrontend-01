import { Component } from '@angular/core';

@Component({
  selector: 'app-businesscards',
  templateUrl: './businesscards.component.html',
  styleUrl: './businesscards.component.scss'
})
export class BusinesscardsComponent {
  cards = [
    { title: 'Entertainment', speed: 'Upto 90 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Monthly rental', rentalSubtitle: 'Rs 99', image:"istockphoto-1.jpg" },
    { title: 'Special Plan', speed: 'Upto 150 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Quarterly rental', rentalSubtitle: 'Rs 300', image:"istockphoto.jpg" },
    { title: 'Basic Plan', speed: 'Upto 340 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Annualy rental', rentalSubtitle: 'Rs 1000', image:"istockphoto-13.jpg" }
  ];
}
