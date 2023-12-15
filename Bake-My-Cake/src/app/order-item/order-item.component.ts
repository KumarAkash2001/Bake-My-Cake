import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderItemService } from '../services/order-item.service';
import { Items } from '../model/items';
import { ActivatedRoute } from '@angular/router';
import { SearchPanelService } from '../services/search-panel.service';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  items:Items={}
  orderForm: FormGroup;
  formstatus:boolean=false;

  constructor(private _snackBar: MatSnackBar, private searchpanelservice : SearchPanelService,private fb: FormBuilder,private orderService: OrderItemService ,private route:ActivatedRoute ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      phone: ['', Validators.pattern('^[789][0-9]{9}$')],
      orderDate: [{ value: this.getCurrentDate(), disabled: true }, Validators.required],
      address: this.fb.group({
      houseNo: ['',Validators.required], 
      streetName: ['',Validators.required],
      price:[0],
      itemName:[''],
      zipCode: ['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]]
      })
    });
  }
  get name(){return this.orderForm.get('name')}
  get email(){return this.orderForm.get('email')}
  get phone(){return this.orderForm.get('phone')}
  get houseNo(){return this.orderForm.get('houseNo')}
  get streetName(){return this.orderForm.get('streetName')}
  get zipCode(){return this.orderForm.get('zipCode')}
  get productPrice(){return this.orderForm.get('productPrice')}
  get productName(){return this.orderForm.get('productName')}




  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
      this.searchpanelservice.getOneItem(+id).subscribe(data => {
          this.items = data;
      });
  })
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    // Format the date using your desired format (e.g., 'YYYY-MM-DD')
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    return formattedDate;
  }

  onSubmit(orderForm:any) {
     if (this.orderForm.valid) {
      this.orderService.submitOrder(this.orderForm.value).subscribe({
        next: data => {
           this._snackBar.open('Order Placed', 'Thank You!!', {
             duration: 5000,panelClass: ['mat-warn']
           });
           this.orderForm.reset();
          },
         error: err => {
           alert("Error Try Again !!");
     }
     });
     }
   }
   canDeactivate(){
    if (!this.formstatus)
    this.formstatus = confirm("Form Data will be lost");
    return this.formstatus;
   }
   }
