import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  route:string;
  
  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { 
    this.route = this.router.url
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.shoppingCartService.activeRouteCheckout$.emit(false);
    },0)
  }
  OnDestroy(): void {
    this.shoppingCartService.activeRouteCheckout$.emit(true);
    console.log("Destroy init")
  }
}
 