import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit, OnDestroy {

//Icons
faTrashAlt = faTrashAlt;
faShoppingCart = faShoppingCart;

public cartItems: I_ShoppingCartItem[] = [];
public cartTotal: number = 0;

// To unsubscribe from ngOnDestroy
public cartSubscription: Subscription;

constructor(public shoppingCartService: ShoppingCartService) { 
}

ngOnInit(): void {
  // Subscription to the cart update observable
  this.cartSubscription = this.shoppingCartService.cartUpdated
    .pipe(delay(100))
    .subscribe(id => { 
      this.cartTotal = this.shoppingCartService.cartTotal;
    });
  this.loadCartItems();
}

ngOnDestroy(): void {
  this.cartSubscription.unsubscribe();
}

loadCartItems() {
  this.cartTotal = this.shoppingCartService.cartTotal;
  this.cartItems = this.shoppingCartService.cartItems;
}

updateItemTotal(i:number) {
  let item = this.cartItems[i];
  item.total = item.quantity * item.price;
  this.shoppingCartService.updateItem(item);
}

removeItem(i:number) {
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

}
