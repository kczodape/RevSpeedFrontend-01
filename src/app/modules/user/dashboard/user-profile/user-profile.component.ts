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
  }

  openEditForm() {
    const dialogRef = this._dialog.open(FormComponent, {
      data: this.userDetails,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetchUserDetails();
        }
      },
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUserDetails();
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