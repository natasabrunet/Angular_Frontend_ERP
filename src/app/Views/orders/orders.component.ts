import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

import { OrdersService } from "src/app/Services/orders.service";

// falta implementar el translate

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  prova = {
    success: "true",
    message: "order found",
    order: [
      {
        id: "e64c1e17-ab08-489b-945f-99a348009ea1",
        employeeId: "1",
        clientId: "bd6c5e30-eb59-4d60-80b8-ac11c94eb87e",
        clientName: "John Doe",
        date: 1615219338000,
        status: "IN_DELIVERY",
        products: [{
          id: 1,
          name: "ejemplo 1",
          //stock: 100,
          //image: "url image",
          //family: "Bebidas",
          price: 3.0,
          vat: 21.0,
          //wholesale_price: 2.5,
          //wholesale_quantity: 500
        },
        {
          id: 2,
          name: "ejemplo 2",
          //stock: 100,
          //image: "url image",
          //family: "Bebidas",
          price: 3.0,
          vat: 21.0,
          //wholesale_price: 2.5,
          //wholesale_quantity: 500
        }]
      },
      {
        id: "f68a0d41-1c9f-4e67-905c-8a9a81cec7d3",
        employeeId: "1",
        clientId: "58487edf-7db7-4ea2-91f5-d6a4f0ccc403",
        clientName: "Jane Smith",
        date: 1615219338000,
        status: "COMPLETED",
        products: [
          "1",
          "2"
        ]
      }
    ]
  }

  info = Object.values(this.prova.order);

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  //orders: any[];

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.getListOrders();
  }

  getListOrders() {
    /*this.ordersService.getAllOrders()
      .subscribe(
        (data: any) => {
          this.info = data // ojo canvia-ho després a this.orders
        },
        error => {
          console.log(error)
        });*/
    return this.info;
  }

  goOrderDetail(id: number) {
    this.router.navigate(['/order-detail', id]);
  }

  confirmDelete(i: number) {
    alert(`Are you sure you want to delete order ${this.prova.order[i].id}`);
  }

}
