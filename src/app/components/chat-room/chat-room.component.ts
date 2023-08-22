import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMessages, toggleFriendsPanel } from 'src/app/store/actions/chat.action';
import { Message } from 'src/app/store/models/message.model';
import { User } from 'src/app/store/models/user.model';
import { AppState } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/selectors/auth.selector';
import { getChatWith, getHasMessages, getLoadingMessages, getMessages } from 'src/app/store/selectors/chat.selector';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, AfterViewInit {

  user$: Observable<User | undefined>

  chatWith$: Observable<User | undefined>

  loadingMessages$: Observable<boolean>

  messages$: Observable<Message[]>

  hasMessages$: Observable<boolean>

  constructor(private store: Store<AppState>,private elementRef: ElementRef){
    this.user$ = this.store.select(getUser)
    this.chatWith$ = this.store.select(getChatWith)
    this.loadingMessages$ = this.store.select(getLoadingMessages)
    this.messages$ = this.store.select(getMessages)
    this.hasMessages$ = this.store.select(getHasMessages)
  }

  ngOnInit(): void {
     this.user$.subscribe(user => {
      this.chatWith$.subscribe(friend => {
          if (!user?.id || !friend?.id){
            return
          }
        this.store.dispatch(loadMessages({userId: user?.id,friendId: friend?.id}))
      })
     })
  }

  ngAfterViewInit(): void {
    this.chatWith$.subscribe(chatWith => {
      if (!chatWith){
        return
      }
      const messagesContainer = this.elementRef.nativeElement.querySelector('.messages')
      if (!messagesContainer){
        return
      }
       messagesContainer.scrollTop = messagesContainer.scrollHeight
     })
  }

  toggleFriendsPanel(){
    this.store.dispatch(toggleFriendsPanel({}))
  }

}
