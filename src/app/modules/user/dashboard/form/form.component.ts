import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JwtService } from '../../../../services/jwt.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<FormComponent>,
    private jwtService: JwtService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this._fb.group({
      name: '',
      phoneNumber: '',
      address: '',
    });
  }

  ngOnInit() {
   
    if (this.data) {
      this.userForm.patchValue({
        name: this.data.name,
        phoneNumber: this.data.phoneNumber,
        address: this.data.address,
      });
    }
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.jwtService.updateDetails(this.userForm.value).subscribe({
          next: (val) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }

  closeDialog():void{
    this._dialogRef.close();
  }
}