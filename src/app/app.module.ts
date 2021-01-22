import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AdminComponent } from './Components/header/admin/admin.component';
import { NotificationsComponent } from './Components/header/notifications/notifications.component';
import { HeaderSearchComponent } from './Components/header/header-search/header-search.component';
import { TogglerComponent } from './Components/header/toggler/toggler.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    NotificationsComponent,
    HeaderSearchComponent,
    TogglerComponent,
    NavbarClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
