import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShowFriendsPanel } from 'src/app/store/selectors/chat.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  showFriendsPanel$: Observable<boolean>

  constructor(store: Store){
    this.showFriendsPanel$ = store.select(getShowFriendsPanel)
  }
}
