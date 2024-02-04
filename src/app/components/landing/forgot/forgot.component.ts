import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';
import { MatDialog } from '@angular/material/dialog';
import { OtpdialogComponent } from './otpdialog/otpdialog.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss',
})
export class ForgotComponent implements OnInit {
  loginForm: FormGroup | any;
  randomNumber: number | undefined;

  constructor(private fb: FormBuilder, private service: JwtService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Wrap validators in an array
    });
    this.service.emailExistsError$.subscribe((existsError) => {
      if (existsError) {
        this.loginForm.get('email')?.setErrors({ emailExists: true });
      }
    });
  }
  
  submitForm() {
    const email = this.loginForm.get('email').value;
    const subject = "Please enter this otp !"
    this.randomNumber = Math.floor(100000 + Math.random() * 900000);
    console.log(this.randomNumber);    

    sessionStorage.setItem('emailCheck', email);
    sessionStorage.setItem('randomNumber', this.randomNumber.toString());

    if (this.loginForm.valid) {
      this.service.sendEmail(email, subject, this.randomNumber.toString()).subscribe(
        (response) => {
          console.log('OTP sent successfully!', response);
        },
        (error) => {
          console.log('Error while sending OTP:', error);
        }
      );
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(OtpdialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  isFieldInvalid(fieldName: string): boolean | any {
    const field = this.loginForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

  isEmailExists(): boolean {
    const emailControl: AbstractControl | null = this.loginForm.get('email');
    const email: string = emailControl?.value;

    return this.loginForm.hasError('emailExists') && email.trim() !== '';
  }
}
