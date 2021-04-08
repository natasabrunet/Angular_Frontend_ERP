import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { I_ShoppingCartItem } from '../../../Models/shoppingCartItem';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;

  public cartItems: I_ShoppingCartItem[] = [];
  public cartTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.createDummyShoppingCart();
  }

  reloadCartTotal() {
    console.log('reloadCartTotal');
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      console.log(i, this.cartItems[i].total);
      total += this.cartItems[i].total;
      console.log('total', total);
    }
    this.cartTotal = total;
  }
  
  updateItemTotal(i:number) {
    let item = this.cartItems[i];
    item.total = item.quantity * item.price;
    this.reloadCartTotal();
  }

  removeItem(i:number) {
    console.log(i);
    this.cartItems.splice(i, 1);
    this.reloadCartTotal();
  }

  // Prevent DropDown from closing if the shopping cart is NOT empty
  dropdownClickControl(event) {
    if (this.cartItems.length > 0) {
      event.stopPropagation();
    }
  }

  createDummyShoppingCart() {
    console.log("createDummyShoppingCart");
    class CartItem implements I_ShoppingCartItem {
      id       = '';
      name     = '';
      desc     = '';
      image    = '';
      price    = 0;
      quantity = 0;
      total    = 0;
    };

    let item: CartItem = new CartItem()

    item.id       = '001';
    item.name     = 'SONY DSC-RX100M III';
    item.desc     = '';
    item.image    = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg';
    item.price    = 849.99;
    item.quantity = 2;
    item.total    = item.price * item.quantity;
    this.cartItems.push(item);

    item = new CartItem();
    item.id       = '002';
    item.name     = 'KS automatic Mechanical';
    item.desc     = '';
    item.image    = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg';
    item.price    = 1249.99;
    item.quantity = 1;
    item.total    = item.price * item.quantity;
    this.cartItems.push(item);

    item = new CartItem();
    item.id       = '003';
    item.name     = 'Kindle Paperwhite | Waterproof, 6"';
    item.desc     = 'Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
    item.image    = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
    item.price    = 129.99;
    item.quantity = 1;
    item.total    = item.price * item.quantity;
    this.cartItems.push(item);

    
    item = new CartItem();
    item.id       = '003';
    item.name     = 'xKindle Paperwhite | Waterproof, 6"';
    item.desc     = 'xKindle Paperwhite | Waterproof, 6" High-Resolution Display, 8GB Black';
    item.image    = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg';
    item.price    = 129.99;
    item.quantity = 1;
    item.total    = item.price * item.quantity;
    this.cartItems.push(item);

    this.reloadCartTotal();
  }
}
