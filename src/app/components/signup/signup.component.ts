import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmation_password: ['', Validators.required],
    });
  }

  get first_name() {
    return this.form.get('first_name');
  }

  get middle_name() {
    return this.form.get('middle_name');
  }

  get last_name() {
    return this.form.get('last_name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmation_password() {
    return this.form.get('confirmation_password');
  }

  submit() {
    const {password,confirmation_password} = this.form.value
    if (password != confirmation_password){
        alert('Confirmation password and password must match');
        return;
    }
    alert('All clear');
  }
}
