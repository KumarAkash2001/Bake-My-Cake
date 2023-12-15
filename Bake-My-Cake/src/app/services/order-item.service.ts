import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../model/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
   url: string = "http://localhost:3000/order";

   constructor(private httpClient: HttpClient) {}

    submitOrder(order: Orders): Observable<any> {
     return this.httpClient.post(this.url, order);
   } 
}
