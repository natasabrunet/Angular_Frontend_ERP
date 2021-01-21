import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarClientComponent,
      RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
