import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sendMessage } from 'src/app/store/actions/chat.action';
import { Friend } from 'src/app/store/models/friend.model';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent{

  form: FormGroup

  @Input() user: User | undefined | null

  @Input() friend: User | undefined | null

  constructor(private store: Store,private fb: FormBuilder){
    this.form = fb.group({
      content: ['',Validators.required]
    })

  }

  get content(){
    return this.form.get('content')
  }

  sendMessage(){
    if (!this.user || !this.friend){
      return
    }
    this.store.dispatch(sendMessage({message: {
      ...this.form.value,
      from: this.user,
      to: this.friend
    }}))
    this.form.patchValue({content: ''})
  }

}
