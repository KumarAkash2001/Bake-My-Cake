import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';
import { FAQComponent } from './faq/faq.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestComponent } from 'src/request/request.component';
import { AuthGuard } from 'src/guard.guard';
import { CanDeactivateGuard } from './services/deactivateguard.guard';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:ItemViewComponent},
  {path:"FAQ",component:FAQComponent},
  { path: 'footer', component: FooterComponent },
  {path:"Order",component:OrderItemComponent,canDeactivate:[CanDeactivateGuard]},
  {path:'Orders/:id', component: OrderItemComponent},
  {path:"Admin",component:LogInComponent},
  {path:"Request",component:RequestComponent,canActivate:[AuthGuard]},
  {path: '**', component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
