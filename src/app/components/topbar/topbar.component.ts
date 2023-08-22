import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/store/actions/auth.action';
import { User } from 'src/app/store/models/user.model';
import { getUser } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  showOptions = false

  user$: Observable<User | undefined>

  showUserInfo = false

  constructor(private store: Store){
    this.user$ = this.store.select(getUser)
  }

  logout(){
    this.store.dispatch(logout())
  }

  showProfileDetails(){
    this.showUserInfo = !this.showUserInfo
  }

}
