import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './UserInterface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit{

  
  
  users!: User[];
  userForm!: FormGroup;
  newUserForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForms();
    this.getUsers();

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

}
