import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  teams = [
    {image:"RaagulSridharan-modifie.jpeg",name:"Raagul Sridharan",role:"Web Developer"},
    {image:"",name:"Krunal",role:"Web Developer"},
    {image:"",name:"Janani Priya",role:"Web Developer"}
  ];
  addHoverEffect(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('hover-effect');
  }

  removeHoverEffect(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('hover-effect');
  }
}
