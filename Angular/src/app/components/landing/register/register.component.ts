import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import {MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  hidePassword: boolean = true;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private service: JwtService, private fb: FormBuilder, public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: ['', [Validators.pattern(/^\d{10}$/)]],
        address: [''],
      },
      { validator: this.passwordMathValidator }
    )
    this.service.emailExistsError$.subscribe((existsError) => {
      if (existsError) {
        this.registerForm.get('email')?.setErrors({'emailExists': true});
      }
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  openSnackBar(){
    this.snackBar.open('Registration successful!', 'Close', {
      duration: 3000,
      verticalPosition: this.verticalPosition
    });
  }

  submitForm() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe((response) => {
      if (response.id != null) {
        this.openSnackBar();
        this.router.navigateByUrl("/login");
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean | any {
    const field = this.registerForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

  getErrorMessage(): string {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'Password should be at least 6 characters long';
    }
    if (passwordControl?.hasError('pattern')) {
      return 'Password should contain at least one capital letter, one small letter, one number, and one special character';
    }
    return '';
  }

  isEmailExists(): boolean {
    const emailControl: AbstractControl | null = this.registerForm.get('email');
    const email: string = emailControl?.value;
    
    return this.registerForm.hasError('emailExists') && email.trim() !== '';
  }
}
