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
import { cartItem } from '../../../Models/cartItem';

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
  // name of the serssion cart= 'erpCart';
  public cartItems: any = [];
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
    // this.shoppingCartService.saveSessionStorage(this.cartItems);
  }

  ngOnInit(): void {
    this.ProductEmitterService.getDataProduct().subscribe(
      (product: Product) => {
        this.addProductToCart(product);
      }
    );

    this.loadCartItems();
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    console.log(this.cartItems);
  }
  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;
        this.cartItems[i].total =
          this.cartItems[i].quantity * this.cartItems[i].total;

        productExists = true;
        if (this.cartItems[i].quantity > this.cartItems[i].stock) {
          alert('Sorry, this quantity is not available right now!');
          this.cartItems[i].quantity = this.cartItems[i].stock;
        }

        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        stock: product.stock,
        total: product.price,
      });
      for (let i in this.cartItems) {
        if (this.cartItems[i].stock == 0) {
          alert(`Sorry! ${product.name} is out of stock right now`);
          this.removeItem(this.cartItems[i]);
        }
      }
    }

    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    // Emit cart update observable

    this.cartUpdated.emit(product.id);
  }

  removeItem(itemToRemove: any) {
    this.cartItems.splice(itemToRemove, 1);

    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    this.cartUpdated.emit(itemToRemove.id);
  }
  upDateQty(qty) {
    console.dir(qty);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  loadCartItems() {
    this.cartItems = this.cart;
    this.getCarTotal(this.cartItems);
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

  clearSessionStorage() {
    sessionStorage.removeItem(this.sesionCartName);
  }
}
