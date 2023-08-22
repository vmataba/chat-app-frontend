import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadFriendRequests,
  loadFriends,
  loadSuggestedFriends,
} from 'src/app/store/actions/chat.action';
import { RequestError } from 'src/app/store/models/error.model';
import { Friend } from 'src/app/store/models/friend.model';
import { User } from 'src/app/store/models/user.model';
import { AppState } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/selectors/auth.selector';
import {
  getFriendRequests,
  getFriendRequestsError,
  getFriends,
  getHasFriendRequests,
  getHasFriends,
  getHasSuggestedFriends,
  getLoadFriendsError,
  getLoadSuggestedFriendsError,
  getLoadedFriendRequests,
  getLoadedFriends,
  getLoadedSuggestedFriends,
  getLoadingFriendRequests,
  getLoadingFriends,
  getLoadingSuggestedFriends,
  getSuggestedFriends,
  getSuggestedFriendsError,
} from 'src/app/store/selectors/chat.selector';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  loadingFriends$: Observable<boolean>;

  loadedFriends$: Observable<boolean>;

  friends$: Observable<Friend[]>;

  loadFriendsError$: Observable<RequestError | undefined>;

  hasFriends$: Observable<boolean>;

  loadingSuggestedFriends$: Observable<boolean>;

  loadedSuggestedFriends$: Observable<boolean>;

  suggestedFriends$: Observable<User[]>;

  suggestedFriendsError$: Observable<RequestError | undefined>;

  hasSuggestedFriends$: Observable<boolean>;

  loadingFriendRequests$: Observable<boolean>;

  loadedFriendRequests$: Observable<boolean>;

  friendRequests$: Observable<Friend[]>;

  hasFriendRequests$: Observable<boolean>;

  friendRequestsError$: Observable<RequestError | undefined>;

  user$: Observable<User | undefined>;

  keyword: string = '';

  constructor(private store: Store<AppState>) {
    this.friends$ = this.store.select(getFriends);
    this.user$ = this.store.select(getUser);
    this.loadingFriends$ = this.store.select(getLoadingFriends);
    this.loadedFriends$ = this.store.select(getLoadedFriends);
    this.loadFriendsError$ = this.store.select(getLoadFriendsError);

    this.loadedSuggestedFriends$ = this.store.select(
      getLoadingSuggestedFriends
    );
    this.loadingSuggestedFriends$ = this.store.select(
      getLoadingSuggestedFriends
    );
    this.suggestedFriends$ = this.store.select(getSuggestedFriends);
    this.suggestedFriendsError$ = this.store.select(getSuggestedFriendsError);

    this.loadingFriendRequests$ = this.store.select(getLoadingFriendRequests);
    this.loadedFriendRequests$ = this.store.select(getLoadedFriendRequests);
    this.friendRequests$ = this.store.select(getFriendRequests);
    this.friendRequestsError$ = this.store.select(getFriendRequestsError);
    this.hasFriendRequests$ = this.store.select(getHasFriendRequests)

    this.hasFriends$ = store.select(getHasFriends);
    this.hasSuggestedFriends$ = store.select(getHasSuggestedFriends);
  }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.store.dispatch(loadFriends({ id: user?.id }));
      this.store.dispatch(loadSuggestedFriends({ id: user?.id }));
      this.store.dispatch(loadFriendRequests({ id:user?.id }))
    });
  }

  search(event: any) {
    const { keyword } = event;
    this.keyword = keyword;
  }
}
