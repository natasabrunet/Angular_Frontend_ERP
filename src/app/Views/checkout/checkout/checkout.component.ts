import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { OrderEmitterService } from '../../../Services/order-emitter.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { decodedTextSpanIntersectsWith } from 'typescript';
import { cartItem } from 'src/app/Models/cartItem';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    public OrderEmitterService: OrderEmitterService,
    private toastr: ToastrService,
    private router: Router,
    public shoppingCartService: ShoppingCartService
  ) {}
  newOrder: Order;
  error: boolean = false;
  date = new Date();
  public shipping_address: any = {
    id: '',
    street: 'Bailen',
    number: 81,
    city: 'Barcelona',
    country: 'Spain',
    zipcode: '08023',
  };
  public billing_address: any = {
    id: '',
    street: 'Bailen',
    number: 81,
    city: 'Barcelona',
    country: 'Spain',
    zipcode: '08023',
  };
  public cartItems: cartItem[] = [];
  public cartTotal: number = 10;
  public cart_details: any = [
    {
      id: '',
      product: {
        id: 1,
        name: 'Pizza',
        stock: 10,
        image: 'url',
        price: 10,
        vat: 21,
        wholesale_price: 5,
        wholesale_quantity: 100,
      },
      quantity: 1,
      subtotal: 10,
    },
  ];

  ngOnInit(): void {
    //   this.loadCartItems();
  }
  get cart() {
    return (
      JSON.parse(this.shoppingCartService.getSessionCart(this.cartItems)) || []
    );
  }
  getCarTotal(cart: any) {
    cart.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }
  // loadCartItems() {
  //   this.cartItems = this.cart;
  //   this.getCarTotal(this.cartItems);
  // }
  onSubmit() {
    this.OrderEmitterService.sendNewOrder(
      '22 - 09 - 2021',
      'PENDING_DELIVERY',
      'PAYPAL',
      this.shipping_address,
      this.billing_address,
      this.cartTotal,
      this.cart_details
    ).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success(
          'Your order has been proceed. You`ll be re-directed to Home page',
          'New Order',
          {
            closeButton: true,
          }
        );
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this.error = true;
        return err;
      }
    );
  }
}
