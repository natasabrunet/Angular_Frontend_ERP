import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  public cartCounter: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
