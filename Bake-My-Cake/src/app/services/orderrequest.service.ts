import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../model/orders'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderrequestService {

  constructor(private httpclient:HttpClient) { }

  URL: string = "http://localhost:3000/order";

  getAllorderReqeusts() : Observable<Array<Orders>> {
    return this.httpclient.get<Array<Orders>>(`${this.URL}`);
  }

  saveorderRequest(order? : Orders) : Observable<Orders> {
    return this.httpclient.post<Orders>(`${this.URL}`, order)
  }
}
