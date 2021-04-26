import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  langs: string[] = [];

  constructor(public appComponent: AppComponent, private shoppingCartService : ShoppingCartService, public router:Router) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
  }
  
  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

}
