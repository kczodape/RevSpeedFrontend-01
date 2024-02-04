import { Component } from '@angular/core';

@Component({
  selector: 'app-individualcards',
  templateUrl: './individualcards.component.html',
  styleUrl: './individualcards.component.scss',
})
export class IndividualcardsComponent {
  cards = [
    {
      title: 'Entertainment',
      speed: 'Upto 90 Mbps',
      subtitle: 'Speed',
      benefits: 'Exclusive RevSpeed benefits',
      rentalTitle: 'Monthly rental',
      rentalSubtitle: 'Rs 99',
      image: 'Entertainment.jpg',
      ott: {
        logo1: 'assets/netflix.png',
        name1: 'Netflix',
      },
    },
    {
      title: 'Special Plan',
      speed: 'Upto 150 Mbps',
      subtitle: 'Speed',
      benefits: 'Exclusive RevSpeed benefits',
      rentalTitle: 'Quarterly rental',
      rentalSubtitle: 'Rs 300',
      image: 'Entertainment-1.jpg',
      ott: {
        logo1: 'assets/netflix.png',
        name1: 'Netflix',
        logo2: 'assets/amazon.png',
        name2: 'Amazon prime',
      },
    },
    {
      title: 'Basic Plan',
      speed: 'Upto 340 Mbps',
      subtitle: 'Speed',
      benefits: 'Exclusive RevSpeed benefits',
      rentalTitle: 'Annualy rental',
      rentalSubtitle: 'Rs 1000',
      image: 'Broadband.jpg',
      ott: {
        logo1: 'assets/netflix.png',
        name1: 'Netflix',
        logo2: 'assets/amazon.png',
        name2: 'Amazon prime',
        logo3: 'assets/hotstar.webp',
        name3: 'Hotstar',
        logo4: 'assets/hulu.png',
        name4: 'Hulu',
        logo5: 'assets/sling.jpg',
        name5: 'Sling',
      },
    },
  ];
}
