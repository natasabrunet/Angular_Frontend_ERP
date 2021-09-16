import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { OrdersService } from 'src/app/Services/orders.service';
import { OrderList } from 'src/app/Models/DTOs/updateOrdersDto';
import { Product } from '../../Models/DTOs/allupdateOrdersDto';
import { identity } from 'rxjs';

// falta implementar el translate

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  orders: any[] = [];

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe((data: any) => {
      this.orders = data.object;
      console.log(data.object[3]);
    });
  }

  getListOrders() {
    this.ordersService.getAllOrders().subscribe(
      (data: any) => {
        this.orders = data.object.keys();
        // console.log(data.object.keys());
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goOrderDetail(id: number) {
    this.router.navigate(['/order-detail', id]);
  }

  confirmDelete(i: number) {
    const id = this.orders[0].id;

    this.ordersService.deleteOrder('id').subscribe();
    this.orders.splice(i, 1);
  }
}
