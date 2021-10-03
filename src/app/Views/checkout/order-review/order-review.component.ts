import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss'],
})
export class OrderReviewComponent implements OnInit, OnDestroy {
  // languages
  langs: string[] = [];

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  buttonDisabled: string = '';

  public cartItems: I_ShoppingCartItem[] = [];
  public cartTotal: number = 0;

  // To unsubscribe from ngOnDestroy
  public cartSubscription: Subscription;

  constructor(
    public shoppingCartService: ShoppingCartService,
    public appComponent: AppComponent
  ) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
    // Subscription to the cart update observable
    // this.cartSubscription = this.shoppingCartService.cartUpdated
    //   .pipe(delay(100))
    //   .subscribe((id) => {
    //     // this.cartTotal = this.shoppingCartService.cartTotal;
    //   });
    // this.loadCartItems();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  // loadCartItems() {
  //   this.cartTotal = this.shoppingCartService.cartTotal;
  //   this.cartItems = this.shoppingCartService.cartItems;
  // }

  // updateItemTotal(i: number) {
  //   let item = this.cartItems[i];
  //   if (item.quantity < 0) {
  //     item.quantity = 1;
  //   }
  //   item.total = item.quantity * item.price;
  //   this.shoppingCartService.updateItem(item);
  // }

  // removeItem(i: number) {
  //   let item = this.cartItems[i];
  //   this.shoppingCartService.removeItem(item);
  //   this.cartItems.splice(i, 1);
  //   this.buttonDisable();
  // }

  // Prevent DropDown from closing if the shopping cart is NOT empty
  dropdownClickControl(event: any) {
    if (this.cartItems.length > 0) {
      event.stopPropagation();
    }
  }

  // buttonDisable() {
  //   if (this.shoppingCartService.cart.length === 0) {
  //     this.buttonDisabled = 'disabled';
  //   }
  // }

  // change languages
  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }
}
