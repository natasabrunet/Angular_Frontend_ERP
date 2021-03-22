import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  langs: string[] = [];
  userLang: string;

  constructor(public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
    console.log('Browser Lang', navigator.language);
    console.log('Browser Lang Array', navigator.languages);
    //this.userLanguage(navigator.language);
    //this.appComponent.changeLang(this.userLang);
  }

  userLanguage(lang: string) {
    switch (lang) {
      case 'ca':
        this.userLang = 'cat';
        break;
      case 'es-ES':
        this.userLang = 'es';
        break;
      case 'en-US':
        this.userLang = 'en';
        break;
      default:
        this.userLang = 'en';
        break;
    }
  }

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
    console.log(lang);
  }

}
