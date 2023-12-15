import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthServiceService } from 'src/auth-service.service';
import { RouteServiceService } from 'src/route-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private authService: AuthServiceService, private routeService: RouteServiceService) { }
loginId:string='';
loginPassword:any='';

  validateLogin() {
    this.authService.login(this.loginId,this.loginPassword);
    if(this.authService.isLoggedIn) {
        this.routeService.navigateToRequestsView();
    }
}
}
