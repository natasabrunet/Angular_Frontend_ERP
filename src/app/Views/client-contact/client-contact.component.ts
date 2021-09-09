import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { translate } from '@angular/localize/src/translate';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss'],
})
export class ClientContactComponent implements OnInit {
  selectedOption: string = '';
  contactOptions: any[];
  langs: string[] = [];
  constructor(public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }
  showSelected() {}

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

  clientSubmit() {
    alert('enviando');
  }
}
