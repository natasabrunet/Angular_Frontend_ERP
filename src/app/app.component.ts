import { Component, OnInit, DoCheck } from '@angular/core';

import { environment } from '../environments/environment';
import { LoginService } from './Services/login.service';

////////////////////////////
//  Bootstrap JS imports  //
////////////////////////////

/* TODO:
  1. Before production, review B5 JS imports you actually used.
     Comment out those not used, to reduce final production bundle.

  2. plus, if you're completely sure, you're not using components
     which require "popper.js", you can comment them out
     and also uninstall popper from this project --> npm uninstall @popperjs/core
*/

import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/dropdown'; // @popperjs/core
import 'bootstrap/js/dist/collapse'; // ~navbar, ~transitions, ~accordion
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tooltip'; // @popperjs/core
import 'bootstrap/js/dist/popover'; // @popperjs/core
import 'bootstrap/js/dist/scrollspy'; // onepage or section
import 'bootstrap/js/dist/button'; // ~toggle buttons on/of state
import 'bootstrap/js/dist/tab'; // tabbable panes of local content

//////////////////////////////////////////////
//  Font Awesome Icons - Optimized Library  //
//////////////////////////////////////////////

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faSignInAlt,
  faCopyright,
  faEyeSlash,
  faEye,
  faMapMarkerAlt,
  faBuilding,
  faSearch, faEdit,
} from '@fortawesome/free-solid-svg-icons'; // we only installed the solids

////////////////////////////////////////
//  Imports for ngx-tranlate library  //
////////////////////////////////////////

import { TranslateService } from '@ngx-translate/core';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  mode = ''; // environment mode msg
  title = 'ITProject-ERP-Frontend';
  langs: string[] = [];
  token = ''; // <-- log in OK

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {
    this.mode = environment.mode;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.translateService.addLangs(['en', 'es', 'cat']);
    this.langs = this.translateService.getLangs();
  }

  ngOnInit() {
    //  FONT AWESOME ICONS add plugin  //
    library.add(
      faUserPlus,
      faSignInAlt,
      faCopyright,
      faEyeSlash,
      faEye,
      faMapMarkerAlt,
      faBuilding,
      faSearch,
      faEdit
    );
    dom.watch(); // Replace any existing <i> tags with <svg> icon

    // INFO: 01/03/2021 - The line below is commented, because if it is executed, when refreshing (eg F5) the authenticated session is lost.
    //this.loginService.clearSession(); // clear previous sessionStorage
    
    // INFO: 03/03/2021 - If we don't have the token in App, check if we have the token in Browser,
    //                    and If we have it in Browser, we save it in App
    if (!this.loginService.getToken === undefined) {
      if (sessionStorage.getItem(this.loginService.APIresName)) {
        this.loginService.saveSession(JSON.parse(sessionStorage.getItem(this.loginService.APIresName)));
      }
    }
    // INFO: 03/03/2021 - Get the token
    this.token = this.loginService.getToken;
  }

  ngDoCheck(): void {
    this.token = this.loginService.getToken; // <-- log in
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }
}
