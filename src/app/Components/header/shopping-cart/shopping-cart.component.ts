import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { Product } from 'src/app/Models/Product';
import { ProductEmitterService } from '../../../Services/product-emitter.service';

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
  sesionCartName = 'erpCart';
  public cartUpdated: EventEmitter<number> = new EventEmitter<number>();
  // To unsubscribe from ngOnDestroy
  public cartSubscription: Subscription;

  constructor(
    public ProductEmitterService: ProductEmitterService,
    private route: Router,
    public shoppingCartService: ShoppingCartService
  ) {
    this.saveSessionStorage(this.cartItems);
  }

  ngOnInit(): void {
    this.ProductEmitterService.getDataProduct().subscribe(
      (product: Product) => {
        this.addProductToCart(product);
      }
    );
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
  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;

        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    }

    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
    this.saveSessionStorage(this.cartItems);
    // Emit cart update observable
    // this.cartUpdated.emit(product.id);
    // console.log(this.cartUpdated);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  loadCartItems() {
    this.cartTotal;
    this.cartItems;
  }

  updateItemTotal(i: number) {
    let item = this.cartItems[i];

    if (!item.quantity) {
      item.quantity = 1;
      console.log(item);
    }
    item.total = item.quantity * item.price;
  }
  updateItem(itemToUpdate: any) {
    this.cartItems = this.cartItems.map((cartItem) => {
      return cartItem.id === itemToUpdate.id ? itemToUpdate : cartItem;
    });

    this.saveSessionStorage(this.cartItems);
    //  Emit cart update observable
    // this.cartUpdated.emit(itemToUpdate.id);
    // console.log(itemToUpdate.id);
  }
  removeItem(itemToRemove: any) {
    this.cartItems.splice(itemToRemove, 1);
  }
  updateQuantity(qty: number): number {
    return qty;
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
    if (!qty.value) {
      qty.value = 1;
      console.log(qty);
    }
  }
  // If the sessionStorage item doesn't existe, it will create it
  getSessionCart() {
    if (sessionStorage.getItem(this.sesionCartName) == null) {
      this.saveSessionStorage(this.cartItems);
    }
    return sessionStorage.getItem(this.sesionCartName);
  }

  saveSessionStorage(cart: any) {
    sessionStorage.setItem(this.sesionCartName, JSON.stringify(this.cartItems));
  }

  clearSessionStorage() {
    sessionStorage.removeItem(this.sesionCartName);
  }
}
