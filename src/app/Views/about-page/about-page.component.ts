import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

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
