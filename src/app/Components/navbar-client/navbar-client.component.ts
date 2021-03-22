import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  langs: string[] = [];

  constructor(public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

}
