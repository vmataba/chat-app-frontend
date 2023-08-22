import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { acceptFriend, addFriend, cancelFriendRequest, openChat, removeFriend } from 'src/app/store/actions/chat.action';
import { Friend } from 'src/app/store/models/friend.model';
import { User } from 'src/app/store/models/user.model';
import { getUser } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {

  @Input() friend: any

  @Input() suggested: boolean = false

  @Input() accepted: boolean = false

  @Input() incomingRequest = false

  @Input() outGoingRequest = false

  user$: Observable<User | undefined>

  user: User | undefined

  constructor(private store: Store,private elementRef: ElementRef){
    this.user$ = this.store.select(getUser)
    this.user$.subscribe(user => this.user = user)
  }

  add(){
    if (!this.friend || !this.user){
      return;
    }
    this.store.dispatch(addFriend({friend:{
      user: this.user,
      friends_with: this.friend,
      accepted: false
    }}))
  }

  remove(){
    if (!this.friend || !this.user){
      return;
    }
    this.store.dispatch(removeFriend({friend:{
     user: this.user,
     friends_with: this.friend.friends_with
    }}))
  }

  cancelRequest(){
    if (!this.friend || !this.user){
      return;
    }
    this.store.dispatch(cancelFriendRequest({friend:{
     user: this.user,
     friends_with: this.friend.friends_with
    }}))
  }

  selectFrind(){
    if (this.friend?.id == undefined || this.suggested){
      return;
    }
    this.store.dispatch(openChat({id: this.friend?.id, userId: this.user?.id}))
  }

  accept(){
    if (this.accepted){
      return;
    }
    if (this.user == undefined ||  this.friend == undefined){
      return;
    }
    this.store.dispatch(acceptFriend({friend: {
      ...this.friend,
      accepted: true
    }}))
  }

  getFriend(){
    if (this.friend?.first_name){
      return this.friend;
    }
    let friend = this.friend?.friends_with;
    if (this.friend.friends_with.id == this.user?.id){
      friend = this.friend.user
    }
    return friend
  }

  getFirstLetter(){
   return this.getFriend()?.first_name?.charAt(0)?.toUpperCase()
  }

  getFullName(){

   const friend = this.getFriend()

    if (friend?.first_name){
      return `${friend.first_name} ${friend.last_name}`
    }
    return `${friend?.first_name} ${friend.last_name}`
  }
  
}
