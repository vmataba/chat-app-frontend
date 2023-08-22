import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { login } from 'src/app/store/actions/auth.action';
import { RequestError } from 'src/app/store/models/error.model';
import { AppState } from 'src/app/store/reducers';
import { getAuthenticating, getAuthenticationError } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup

  authenticating$: Observable<boolean>

  authenticationError$: Observable<RequestError | undefined>

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private store: Store<AppState>){
    this.form = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
    this.authenticating$ = this.store.select(getAuthenticating)
    this.authenticationError$ = this.store.select(getAuthenticationError)
  }

  get username (){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  login(){
    if (this.form.invalid){
          alert('form is invalid');
          return
    }
    this.store.dispatch(login({credentials: this.form.value}))
   // this.authService.login(this.form.value).subscribe(response => console.log(response))
  }
}
