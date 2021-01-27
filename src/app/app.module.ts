import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartModule } from './Views/Start/start.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';
import { AdminComponent } from './Components/header/admin/admin.component';
import { NotificationsComponent } from './Components/header/notifications/notifications.component';
import { HeaderSearchComponent } from './Components/header/header-search/header-search.component';
import { TogglerComponent } from './Components/header/toggler/toggler.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
// import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { SingleProductComponent } from './Views/single-product/single-product.component';

<<<<<<< HEAD
=======
// services
import { HttpClientModule } from '@angular/common/http';
>>>>>>> b149f9909c85b1513177cac2933e4cf6758daf0a

@NgModule({
  declarations: [
    AppComponent,
    NavbarClientComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminComponent,
    NotificationsComponent,
    HeaderSearchComponent,
    TogglerComponent,
    NavbarClientComponent,
    NavbarClientComponent,
    ProductsListComponent,
      // RecoverPasswordComponent
    FooterComponent,
    LicenceComponent,
    NavbarClientComponent,
    SingleProductComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
<<<<<<< HEAD
    StartModule
    
=======
    ReactiveFormsModule,
    // Always import HttpClientModule after BrowserModule!
    HttpClientModule,
    StartModule,
>>>>>>> b149f9909c85b1513177cac2933e4cf6758daf0a
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
