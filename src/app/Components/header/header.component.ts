import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../../app.component';

// TODO: cosider importing + ngOnInit()-registering ICON { faBars } in APP.COMPONENT.TS

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // faBars = faBars; 

  selectedLanguage = 'en';
  langs: string[] = [];
  @Output() showSidebar = new EventEmitter<boolean>();
  @Input() _showSidebar: boolean;
  isSidebarOpen = false;




  constructor(public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {

  }

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
    console.log(lang);
  }

  toggleShowSidebar(e: boolean) {
    this.isSidebarOpen = e;
    this.showSidebar.emit(this.isSidebarOpen);
  }

}


