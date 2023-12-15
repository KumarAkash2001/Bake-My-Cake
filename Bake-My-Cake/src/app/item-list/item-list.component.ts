import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Items } from '../model/items';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  constructor(private active:Router){}

  @Input()
  item?:Items;

  orderPage(id?:number){
    this.active.navigate(['/Orders',id]);
  }
}
