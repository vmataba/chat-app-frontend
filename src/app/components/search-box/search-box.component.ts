import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input() placeholder = 'Search ....'

  @Output() search = new EventEmitter<any>()

  fireOnSearch(keyword:string){
    this.search.emit({keyword})
  }

}
