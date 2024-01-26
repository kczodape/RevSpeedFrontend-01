import { Component } from '@angular/core';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrl: './hindi.component.scss'
})
export class HindiComponent {

  cards = [
    { title: 'Hindi Entertainment', 
    No_Of_Channels: '10', 
    rentalSubtitle: 'Rs 1000',
    image:"istockphoto-1.jpg", 
    Channels:{c1:'Star Plus',
              c2:'Colors TV',
              c3:'Sony Entertainment Television (SET)'
            }
  },
    { title: 'Hindi News',
     No_Of_Channels: '5',
      rentalSubtitle: 'Rs 1000', 
      image:"istockphoto.jpg",
      Channels:{
              c1:'Aaj Tak',
              c2:'ABP News',
              c3:'India TV'
    } },
    { title: 'Hindi Sports', 
    No_Of_Channels: '4', 
    rentalSubtitle: 'Rs 1000', 
    image:"istockphoto-13.jpg",
    Channels:{
              c1:'Sports 18',
              c2:'Star Sports Hindi',
              c3:'Sony Sports Ten'
  } }
  ];

}
