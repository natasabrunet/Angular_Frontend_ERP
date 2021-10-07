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
  quantity: number = 1;
  @Input() cartItem: any;
  @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';
  @Output() UpdateQuantity = new EventEmitter<number>();
  @Output() removeAction = new EventEmitter<cartItem>();

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  constructor(private ShoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}
  showItem(cartItem) {
    console.log(cartItem);
  }

  sendItemQuantity(value: number) {
    this.UpdateQuantity.emit(value);
  }

  sendItemToRemove(value: cartItem) {
    this.removeAction.emit(value);
  }
}
