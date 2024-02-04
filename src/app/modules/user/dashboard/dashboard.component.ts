import { Component } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../services/user.service';
import { response } from 'express';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private service: JwtService, public authService: AuthService) { }
  // constructor(private service: JwtService) { }

  ngOnIt(){
  }

  hello(){
    this.service.hello().subscribe(
      (responce) => {
        console.log(responce); 
      }
    )
  }

  myDetails(){
    this.service.myDetails().subscribe(
      (response) => {
        console.log(response);
        
      }
    )
  }

  logout():void{
    this.authService.logOut();
  }
}
