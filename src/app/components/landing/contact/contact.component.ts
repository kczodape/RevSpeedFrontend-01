import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Change 'styleUrl' to 'styleUrls'
})
export class ContactComponent {
  formData: any = {};
  email = "revspeed.org@gmail.com  "; // Remove 'const' keyword
  body: string = "";  // Remove 'const' keyword
  subject = "Hi"; 
  bud="done";
  

  constructor(private http: HttpClient, private service: JwtService) {}
  
  submitForm() {
    this.body="hi";
    this.body = "";
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        this.body += `${key}: ${this.formData[key]}\n`;
      }
    }
    console.log(this.body);
    this.service.sendEmailforContact(this.email, this.subject, this.body).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
      },
      (error) => {
        console.log('Error while sending email:', error);
      }
    );
  }
}
