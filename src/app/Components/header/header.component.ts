import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../../app.component';

// TODO: cosider importing + ngOnInit()-registering ICON { faBars } in APP.COMPONENT.TS

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars; 

  selectedLanguage = 'en';
  langs: string[] = [];



  constructor( public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
    console.log(lang);
}
  
}


