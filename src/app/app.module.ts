import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartModule } from './Views/Start/start.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

@NgModule({
  declarations: [AppComponent, NavbarClientComponent],
  imports: [BrowserModule, AppRoutingModule, StartModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
