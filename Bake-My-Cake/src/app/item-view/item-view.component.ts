import { Items } from '../model/items';
import { ITEMS } from '../model/item';
import { SearchPanelService } from '../services/search-panel.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit{
items:Items[]=ITEMS;

constructor(private seachpanelservice: SearchPanelService) { }

  ngOnInit(): void {
   this.getT();
  }
  getT(){ 
    this.seachpanelservice.getItems().subscribe(itemData=>{
    this.items = itemData;
    console.log(this.items);
  });}

  onSearchItem(itemName: string) {
    this.seachpanelservice.getItems().subscribe({
      next: itemData => {
        if (itemName || itemName !== '') {
           this.items = itemData.filter(itemData => itemData?.name?.includes(itemName));
      console.log(this.items);  }
        else
          this.items = itemData;
      },
      error: e => {
        alert("Error , Try Again!!");
      }
    });
  }
  filterItems(chips:string){
    console.log(chips)
    if(chips==='' || !chips){
      this.getT();
    }
    else{
      this.seachpanelservice.getItems().subscribe(
        (item)=>{
          this.items = this.items.filter(items => items.category?.toLowerCase().includes(chips.toLowerCase())
          );
        }
      )
        
    }
  
   }


}