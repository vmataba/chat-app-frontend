import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title = 'Modal Title'

  @Input() show: boolean = true

  @Input() size = 'lg'

  @Output() close = new EventEmitter<any>()

  @Output() submit = new EventEmitter<any>()

  fireOnClose(){
    this.close.emit()
  }

  fireOnSubmit(){
    this.submit.emit()
  }

}
