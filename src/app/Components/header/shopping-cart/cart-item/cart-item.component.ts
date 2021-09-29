import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  constructor() {}

  ngOnInit(): void {}
  removeItem() {
    alert: 'deleting...';
  }
}
