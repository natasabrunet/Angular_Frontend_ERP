import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { AppComponent } from 'src/app/app.component';
import { cartItem } from '../../../Models/cartItem';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss'],
})
export class OrderReviewComponent implements OnInit {
  // languages
  langs: string[] = [];

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  buttonDisabled: string = '';

  public cartItems: cartItem[] = [];
  public cartTotal: number = 0;

  // To unsubscribe from ngOnDestroy
  // public cartSubscription: Subscription;

  constructor(
    public shoppingCartService: ShoppingCartService,
    public appComponent: AppComponent
  ) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
    this.loadCartItems();
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

  loadCartItems() {
    this.cartItems = this.cart;
    this.getCarTotal(this.cartItems);
  }

  updateItemTotal(itemToUpdate) {
    this.cartItems.map((cartItem) => {
      cartItem.total = cartItem.quantity * cartItem.price;
    });
    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });

    this.shoppingCartService.saveSessionStorage(this.cartItems);
  }

  //  }

  removeItem(itemToRemove: any) {
    this.cartItems.splice(itemToRemove, 1);

    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    // this.cartUpdated.emit(itemToRemove.id);
  }

  // Prevent DropDown from closing if the shopping cart is NOT empty
  dropdownClickControl(event: any) {
    if (this.cartItems.length > 0) {
      event.stopPropagation();
    }
  }

  buttonDisable() {
    if (this.cartItems.length === 0) {
      this.buttonDisabled = 'disabled';
    }
  }

  // change languages
  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }
}
