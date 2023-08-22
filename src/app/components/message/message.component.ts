import { Component, Input } from '@angular/core';
import { INIT } from '@ngrx/store';
import { Message } from 'src/app/store/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message: Message | undefined

  @Input() sent: boolean = false

  @Input() received: boolean =  false
  
}
