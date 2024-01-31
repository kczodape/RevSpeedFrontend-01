import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class LoginComponent {
  loginForm: FormGroup | any;
  hidePassword: boolean = true;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
    // this.authenticatedUsersDetails();
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwt != null) {
        // alert('Hello, Your token is ' + response.jwt);
        const jwtToken = response.jwt;
        sessionStorage.setItem('jwt', jwtToken);
        this.authenticatedUsersDetails().subscribe(
          (role: String) => {
            // alert('role: ' + role);

            if (role == 'ADMIN') {
              this.router.navigateByUrl('/admin');
            } else if (role == 'USER') {
              this.router.navigateByUrl('/landing');
            } else {
              alert('Not authenticated person');
              this.router.navigateByUrl('/login');
            }
          },
          (error) => {
            this.router.navigateByUrl('/login');
          }
        );
      } 
    },
    (error) =>{
      console.error('Login failed. Error:', error);
        this.router.navigateByUrl('/login');
    });
  }

  authenticatedUsersDetails(): Observable<string> {
    return this.service.myDetails().pipe(
      map((response) => response.role),
      catchError((error) => {
        console.error('Error getting user details:', error);
        return throwError('Failed to get user details');
      })
    );
  }

  
}
