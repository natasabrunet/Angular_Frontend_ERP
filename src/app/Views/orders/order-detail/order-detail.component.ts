import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faPenSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  iconPenSquare = faPenSquare;
  iconArrowLeft = faArrowLeft;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  prova = {
    success: "true",
    message: "order found",
    order: [
      {
        id: "e64c1e17-ab08-489b-945f-99a348009ea1",
        employeeId: "1",
        clientId: "bd6c5e30-eb59-4d60-80b8-ac11c94eb87e",
        clientName: "John Doe", // añadir campo para nombre del cliente
        date: 1615219338000,
        status: "IN_DELIVERY",
        selectStatus: ['Unassigned', 'Assigned', 'Pending', 'Delivery', 'In delivery', 'Completed', 'Cancelled'],
        products: [{ // alguna info de los products + posibilidad de cambiar la cantidad de productos + posibilidad de modificar la array de productos
          id: 1,
          quantity: 5,
          name: "ejemplo 1",
          price: 30.0,
          vat: 21.0,
        },
        {
          id: 2,
          quantity: 3,
          name: "ejemplo 2",
          price: 12.0,
          vat: 21.0,
        },
        {
          id: 3,
          quantity: 7,
          name: "ejemplo 3",
          price: 22.5,
          vat: 21.0,
        },
        {
          id: 4,
          quantity: 10,
          name: "ejemplo 4",
          price: 1.5,
          vat: 21.0,
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
  productList = Object.values(this.prova.order[0].products);
  selectStatus = Object.values(this.prova.order[0].selectStatus);
  clientName = Object.values(this.prova.order[0].clientName);
  date = Object.values(this.prova.order[0].date);
  status = Object.values(this.prova.order[0].status);

  // calcular precio total de producto unico haciendo un bucle de products y multiplicando cantidad por precio/unidad

  //order: any[];

  orderID: any;
  errorAPI: boolean;
  errorMessage: string;
  success: string;
  action: string;

  constructor(private ordersService: OrdersService,
    private _router: ActivatedRoute) {
    //Recuperamos el parámetro (id) con el que se llama desde la lista de orders via url
    this._router.params.subscribe(params => {
      this.ordersService.getOrderById(params['id'])
        .subscribe((data: any) => {
          if (this.orderID != 0) {
            this.info = data // canviar info per order!!!
            console.log(this.info);
          }
        })

      this.orderID = params['id']; //Guardamos el ID para poder usarlo en todo el componente (necesario para update y delete)

    })
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    return this.productList;
  }

  createOrder(clientName: string, date: any, status: string) {
    alert('Creating a new order from scratch');
  }

  updateOrder(clientName: string, date: any, status: string) {
    alert('If the order already exist, you can modify it');
  }

  deleteOrder() {
    alert('Delete the order');
  }

  addProduct() {
    alert('Add new product and select the quantity');
  }

  updateProduct() {
    alert('Change quantity of the same product');
  }

  deleteProduct() {
    alert('Delete product from the list');
  }

}
