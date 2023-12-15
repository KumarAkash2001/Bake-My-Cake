import { Component } from '@angular/core';
import { EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent {

  itemName: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchItem() {
    this.searchTextChanged.emit(this.itemName);
  }

  
}
