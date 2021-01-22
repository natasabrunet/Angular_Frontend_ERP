import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StartModule } from './Views/Start/start.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

@NgModule({
  declarations: [AppComponent, NavbarClientComponent],
  imports: [BrowserModule, AppRoutingModule, StartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
