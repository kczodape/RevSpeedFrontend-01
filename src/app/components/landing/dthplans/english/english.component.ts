import { Component } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss'
})
export class EnglishComponent {
  cards = [
    { title: 'English Entertainment', 
    No_Of_Channels: '10', 
    rentalSubtitle: 'Rs 46',
    image:"istockphoto-1.jpg", 
    Channels:{c1:'ABC (American Broadcasting Company)',
              c2:'CBS (Columbia Broadcasting System)',
              c3:'NBC (National Broadcasting Company)',
              c4:'FOX (Fox Broadcasting Company)',
              c5:'The CW',
              c6:'BBC America',
              c7:'FX',
              c8:'HBO (Home Box Office)',
              c9:'AMC (American Movie Classics)',
              c10:'TNT (Turner Network Television)'
            }
  },
    { title: 'English News',
     No_Of_Channels: '5',
      rentalSubtitle: 'Rs 20', 
      image:"istockphoto.jpg",
      Channels:{
              c1:'CNN (Cable News Network)',
              c2:'BBC News',
              c3:'Al Jazeera English',
              c4:'Sky News',
              c5:'Fox News Channel'
    } },
    { title: 'English Sports', 
    No_Of_Channels: '4', 
    rentalSubtitle: 'Rs 22', 
    image:"istockphoto-13.jpg",
    Channels:{
              c1:'Fox Sports',
              c2:'Sky Sports',
              c3:'NBC Sports',
              c4:'BT Sport'
  } }
  ];

}
