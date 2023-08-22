import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css'],
})
export class UserProfileFormComponent implements OnInit {
 
  @Input() user: User | undefined;

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: [this.user?.email, Validators.required],
      first_name: [this.user?.first_name, Validators.required],
      middle_name: [this.user?.middle_name],
      last_name: [this.user?.last_name,Validators.required],
      online: [this.user?.online]
    });
  }

  ngOnInit(): void {
      this.form.patchValue({...this.user})
  }

  get email(){
    return this.form.get('email')
  }

  get first_name(){
    return this.form.get('first_name')
  }

  get middle_name(){
    return this.form.get('middle_name')
  }

  get last_name(){
    return this.form.get('last_name')
  }

  get online(){
    return this.form.get('online')
  }

  submit(){
    console.log(this.form.value)
  }
}
