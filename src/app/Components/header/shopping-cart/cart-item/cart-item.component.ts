import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { cartItem } from '../../../../Models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  quantity: number = 0;
  @Input() cartItem: any;
  @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() removeAction = new EventEmitter<cartItem>();

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  constructor(private ShoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.quantity = this.cartItem.quantity;
  }

  sendItemQuantity(value: number) {
    this.newItemEvent.emit(value);
  }

  sendItemToRemove(value: cartItem) {
    this.removeAction.emit(value);
  }

  // updateItemTotal(i: number) {
  //   if (!this.cartItem.quantity) {
  //     this.cartItem.quantity = 1;
  //     console.log(this.cartItem);
  //   }
  //   this.cartItem.total = this.cartItem.quantity * this.cartItem.price;
  //   this.ShoppingCartService.updateItem(this.cartItem);
  // }
}
