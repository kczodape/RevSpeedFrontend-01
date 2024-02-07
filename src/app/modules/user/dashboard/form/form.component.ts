import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  userForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      name: '',
      phoneNumber: '',
      address: '',
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}