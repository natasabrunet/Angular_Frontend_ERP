import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import local StartModule
import { StartModule } from './Views/Start/start.module';

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
import { FooterComponent } from './Components/footer/footer.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component'; 
// import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    NotificationsComponent,
    HeaderSearchComponent,
    TogglerComponent,
    NavbarClientComponent,
    NavbarClientComponent,
    FooterComponent,
    LicenceComponent
      // RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    StartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
