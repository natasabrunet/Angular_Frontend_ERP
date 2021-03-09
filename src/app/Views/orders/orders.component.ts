import { Component, OnInit } from '@angular/core';
import { OrdersService } from "src/app/Services/orders.service";
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  orders: any[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getListOrders();
  }

  getListOrders() {
    this.ordersService.getAllOrders()
      .subscribe(
        (data: any) => {
          this.orders = data.orders
        },
        error => {
          console.log(error)
        });
  }

}
