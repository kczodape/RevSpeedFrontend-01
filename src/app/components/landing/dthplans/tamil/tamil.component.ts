import { Component } from '@angular/core';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrl: './tamil.component.scss'
})
export class TamilComponent {

  cards = [
    { title: 'Tamil Entertainment', 
    No_Of_Channels: '10', 
    rentalSubtitle: 'Rs 37',
    image:"istockphoto-1.jpg", 
    Channels:{c1:'Sun TV',
              c2:' Vijay TV',
              c3:'Zee Tamil',
            }
  },
    { title: 'Tamil News',
     No_Of_Channels: '5',
      rentalSubtitle: 'Rs 23', 
      image:"istockphoto.jpg",
      Channels:{
              c1:'Sun News',
              c2:'Puthiya Thalaimurai',
              c3:'News7 Tamil',

    } },
    { title: 'Tamil Sports', 
    No_Of_Channels: '4', 
    rentalSubtitle: 'Rs 19', 
    image:"istockphoto-13.jpg",
    Channels:{
              c1:'Star Sports Tamil',
              c2:' Star Sports network',
              c3:'Sony Ten',
  } }
  ];

}
