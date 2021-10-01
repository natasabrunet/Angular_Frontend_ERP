import { EventEmitter, Injectable } from '@angular/core';
// import { I_ShoppingCartItem } from '../Models/shoppingCartItem';
import { Product } from '../Models/Product';

import { ProductEmitterService } from './product-emitter.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cart = [];
  sesionCartName = 'erpCart';
  cartItems: any[];
  quantity: number = 0;

  // Observable: used to emit a string (e.g.: item id) when the cart is updated (e.g.: used in "shopping-cart.component.ts")
  public cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor(public ProductEmitterService: ProductEmitterService) {
    // TODO: Remove this "if" and the "createDummyItems" function
    // if (this.cart.length === 0) {
    //   this.createDummyItems();
    // }
    // this.saveSessionStorage(this.cartItems);
  }

  get carts() {
    return JSON.parse(this.getSessionCart()) || [];
  }

  get cartTotal() {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].total;
    }
    return total;
  }

  // addItem(product: any) {
  //   let productExists = false;
  //   if (productExists == false) {
  //     let quantity = 1;
  //   }

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].id === product.id) {
  //       this.cartItems[i].quantity++;
  //       productExists = true;
  //       break;
  //     }
  //   }

  //   if (!productExists) {
  //     this.cartItems.push(product);
  //   }
  //   // this.items.push(product);
  //   // this.cart = this.cartItems;
  //   // this.cart.find((product) => {
  //   //   if (product.id == itemToAdd.id) {
  //   //     product.quantity + itemToAdd.quantity;
  //   //   } else {
  //   // this.items.push(product);
  //   //   }
  //   // });
  //   this.saveSessionStorage(this.cartItems);
  //   // Emit cart update observable
  //   this.cartUpdated.emit(product.id);
  // }
  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  updateItem(itemToUpdate: any) {
    this.cartItems = this.cartItems.map((cartItem) => {
      return cartItem.id === itemToUpdate.id ? itemToUpdate : cartItem;
    });

    this.saveSessionStorage(this.cart);
    //  Emit cart update observable
    this.cartUpdated.emit(itemToUpdate.id);
  }

  removeItem(itemToRemove: any) {
    this.cartItems = this.cartItems.filter((cartItem) => {
      return cartItem.id !== itemToRemove.id;
    });

    this.saveSessionStorage(this.cartItems);
    // Emit cart update observable
    this.cartUpdated.emit(itemToRemove.id);
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

  // createDummyItems() {
  //   class CartItem implements I_ShoppingCartItem {
  //     id = '';
  //     name = '';
  //     // desc = '';
  //     image = '';
  //     price = 0;
  //     quantity = 0;
  //     total = 0;
  //   }

  // let item: CartItem = new CartItem();
  // item.id = '001';
  // item.name = 'SONY DSC-RX100M III';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg';
  // item.price = 100; //849.99;
  // item.quantity = 2;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '002';
  // item.name = 'KS automatic Mechanical';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg';
  // item.price = 200; //1249.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '003';
  // item.name = 'Kindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 300; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '004';
  // item.name = 'xKindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'xKindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 400; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '005';
  // item.name = 'SONY DSC-RX100M III';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg';
  // item.price = 100; //849.99;
  // item.quantity = 2;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '006';
  // item.name = 'KS automatic Mechanical';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg';
  // item.price = 200; //1249.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '007';
  // item.name = 'Kindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 300; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '008';
  // item.name = 'xKindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'xKindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 400; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '009';
  // item.name = 'SONY DSC-RX100M III';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg';
  // item.price = 100; //849.99;
  // item.quantity = 2;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '010';
  // item.name = 'KS automatic Mechanical';
  // item.desc = '';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg';
  // item.price = 200; //1249.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '011';
  // item.name = 'Kindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 300; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);

  // item = new CartItem();
  // item.id = '012';
  // item.name = 'xKindle Paperwhite | Waterproof, 6"';
  // item.desc =
  //   'xKindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
  // item.image =
  //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
  // item.price = 400; //129.99;
  // item.quantity = 1;
  // item.total = item.price * item.quantity;
  // this.cart.push(item);
  // }
}
