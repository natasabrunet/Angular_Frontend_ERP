import { Component, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  langs: string[] = [];
  activeRouterCheckout: boolean = true;

  constructor(public appComponent: AppComponent, private shoppingCartService : ShoppingCartService) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
    this.shoppingCartService.activeRouteCheckout$.subscribe( route =>{
    this.activeRouterCheckout = route;
    });    
  }
  


  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

}
