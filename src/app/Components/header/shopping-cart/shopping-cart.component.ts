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
import { MyCart } from 'src/app/Models/myCart';

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
        // this.cartItems[i].total =
        //   this.cartItems[i].quantity * this.cartItems[i].total;

        if (this.cartItems[i].quantity > this.cartItems[i].stock) {
          alert('Sorry, this quantity is not available right now!');
          this.cartItems[i].quantity = this.cartItems[i].stock;
        }
        //   this.cartItems[i].total =
        //     this.cartItems[i].quantity * this.cartItems[i].total;
        //   this.getCarTotal(this.cartItems);
        // }

        productExists = true;

        break;
      }
    }

    if (!productExists) {
      let newcartItem: cartItem = new cartItem(
        product.id,
        product.name,
        product.quantity,
        product.price,
        product.stock,
        product.total
      );
      newcartItem.id = product.id;
      newcartItem.name = product.name;
      newcartItem.quantity = 1;
      newcartItem.price = product.price;
      newcartItem.stock = product.stock;
      newcartItem.total = this.getItemTotal(
        newcartItem.price,
        newcartItem.quantity
      );

      if (newcartItem.stock == 0) {
        alert(`Sorry! ${cartItem.name} is out of stock right now`);
      } else {
        this.cartItems.push(newcartItem);
        alert(`${product.name} has been added to your cart!`);
        console.log(newcartItem);
      }
    }
    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
    console.log(this.cartTotal);
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    // Emit cart update observable

    this.cartUpdated.emit(product.id);
  }
  getItemTotal(qty: number, price: number) {
    return qty * price;
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
    this.cartTotal = 0;
    for (let item of this.cartItems) {
      if (item.quantity != qty) {
        break;
      } else {
        item.quantity = qty;
      }
      console.log(qty);
    }
    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
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
