import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;

  public cartItems = [];
  public cartTotal: number = 0;
  items = this.shoppingCartService.getItems();

  // To unsubscribe from ngOnDestroy
  public cartSubscription: Subscription;

  constructor(
    public shoppingCartService: ShoppingCartService,

    private route: Router
  ) {}

  ngOnInit(): void {
    // Subscription to the cart update observable
    this.cartSubscription = this.shoppingCartService.cartUpdated
      .pipe(delay(100))
      .subscribe((id) => {
        this.cartTotal = this.shoppingCartService.cartTotal;
        this.cartItems = this.shoppingCartService.cartItems;
      });
    this.loadCartItems();
    console.log(this.cartItems);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  loadCartItems() {
    this.cartTotal = this.shoppingCartService.cartTotal;
    this.cartItems = this.shoppingCartService.cartItems;
  }

  updateItemTotal(i: number) {
    let item = this.cartItems[i];
    console.log(item.quantity);
    if (!item.quantity) {
      item.quantity = 1;
      console.log(item);
    }
    item.total = item.quantity * item.price;
    this.shoppingCartService.updateItem(item);
  }

  removeItem(i: number) {
    let item = this.cartItems[i];
    this.shoppingCartService.removeItem(item);
    this.cartItems.splice(i, 1);
  }

  // Prevent DropDown from closing if the shopping cart is NOT empty
  dropdownClickControl(event) {
    if (this.cartItems.length > 0) {
      event.stopPropagation();
    }
  }

  checkoutRoute() {
    this.route.navigate(['checkout']);
  }

  validateQty(qty) {
    if (qty.value < 0) {
      qty.value = 1;
      console.log(qty);
    }
  }
}
