import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './UserInterface';
import { UserService } from '../../services/user.service';
import { JwtService } from '../../../../services/jwt.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  users!: User[];
  userForm!: FormGroup;
  newUserForm!: FormGroup;
  userDetails: any;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private fb: FormBuilder,
    private _dialog: MatDialog,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchUserDetails();
    this.createForms();
    this.getUsers();
  }

  openDialog() {
    const dialogRef = this._dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetchUserDetails();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetchUserDetails();
        }
      },
    });
  }

  createForms(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      phone_number: [null, Validators.required],
      address: [''],
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      is_broadband: [false],
      is_dth: [false],
      role: ['', Validators.required],
    });

    this.newUserForm = this.fb.group({
      name: ['', Validators.required],
      phone_number: [null, Validators.required],
      address: [''],
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      is_broadband: [false],
      is_dth: [false],
      role: ['', Validators.required],
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    if (this.newUserForm.valid) {
      const newUser: User = this.newUserForm.value;
      this.userService.addUser(newUser).subscribe(() => {
        this.getUsers();
        this.newUserForm.reset();
      });
    }
  }

  updateUser(): void {
    if (this.userForm.valid) {
      const updatedUser: User = this.userForm.value;
      this.userService.updateUser(updatedUser).subscribe(() => {
        this.getUsers();
        this.userForm.reset();
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  fetchUserDetails(): void {
    this.jwtService.myDetails().subscribe({
      next: (res) => {
        this.userDetails = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout(): void {
    this.authService.logOut();
  }
}