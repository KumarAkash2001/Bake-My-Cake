import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { } 
  isLoggedIn: boolean = false;
  login(UserName: string,password:any) {
      this.isLoggedIn = UserName === "Akash";
      this.isLoggedIn = password === "4177"
  }

  logout() {
      this.isLoggedIn = false;
  }
}
