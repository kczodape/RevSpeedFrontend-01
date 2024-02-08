import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { MatDialog } from '@angular/material/dialog';
import { PopComponent } from './pop/pop.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: any = {};
  email = "revspeed.org@gmail.com";
  body: string = "";
  subject = "Query from customer";
  bud = "done";
  submissionMessage: string = "";

  constructor(private http: HttpClient, private service: JwtService, private dialog: MatDialog) {}

  submitForm() {
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
        this.formData = {};
        this.submissionMessage = "Query submitted successfully.";
        this.openD(false);
      },
      (error) => {
        console.log('Error while sending email:', error);
        this.submissionMessage = "Error submitting query. Please try again.";
      }
    );
  }

  openD(error: boolean = false): void {
    this.dialog.open(PopComponent, {
      width: '250px',
      data: { error: error }
    });
  }
}
