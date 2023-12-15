import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../model/items';

@Injectable({
  providedIn: 'root'
})
export class SearchPanelService {
  URL: string = "http://localhost:3000/items";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Array<Items>> {
    return  this.http.get<Array<Items>>(this.URL);
  }
  
  getOneItem(id:number): Observable<Items> {
    return  this.http.get<Items>(`${this.URL}/${id}`);
  }
  
}
