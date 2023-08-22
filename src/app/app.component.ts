import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthenticated } from './store/selectors/auth.selector';
import { Router } from '@angular/router';
import { AppState } from './store/reducers';
import { login } from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'chat';

  constructor(private store: Store<AppState>,private router: Router){}

  ngOnInit(): void {
    //TODO: remove the following line of code
    this.store.dispatch(login({credentials: {username: 'victor@gmail.com',password: 'victor'}}))
    //this.store.dispatch(login({credentials: {username: 'frank@gmail.com',password: 'frank'}}))
    //this.store.dispatch(login({credentials: {username: 'esther@gmail.com',password: 'esther'}}))
    // -- Add Some comments
    // -- Remove Temp codees
      this.store.select(getAuthenticated).subscribe(authenticated => {
        if (authenticated){
          this.router.navigate(['/home'])
          return;
        }
        this.router.navigate(['/login'])
      })
  }
}
