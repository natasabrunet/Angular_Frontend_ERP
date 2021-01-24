import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import local modules
import { StartModule } from './Views/Start/start.module';

// components (not modular)
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarClientComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
