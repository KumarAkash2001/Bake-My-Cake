import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/model/orders';
import { OrderrequestService } from 'src/orderrequest.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  displayedColumns: string[] = ['id', 'email','phone','itemName','price'];
  detailsOrder: Orders[] = [];
  constructor(private orderRequestService: OrderrequestService) { }

  ngOnInit(): void {
    this.orderRequestService.getAllorderReqeusts().subscribe({
      next: data => {
        this.detailsOrder = data;
        console.log(this.detailsOrder);
      },
      error: err => {
        alert(err);
      }
    });
  }
}
