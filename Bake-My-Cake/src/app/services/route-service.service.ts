import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private router:Router) { }
  
  navigateToHomeView() {
    this.router.navigate([""]);
  }
  navigateToRequestsView() {
    this.router.navigate(["Request"]);
  }
}
