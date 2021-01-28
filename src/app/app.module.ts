import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { StartModule } from './Views/Start/start.module';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';
import { AdminComponent } from './Components/header/admin/admin.component';
import { NotificationsComponent } from './Components/header/notifications/notifications.component';
import { HeaderSearchComponent } from './Components/header/header-search/header-search.component';
import { TogglerComponent } from './Components/header/toggler/toggler.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Components/footer/footer.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { SingleProductComponent } from './Views/Product/single-product/single-product.component';
import { Interpolation } from '@angular/compiler';

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
    FooterComponent,
    LicenceComponent,
    NavbarClientComponent,
    SingleProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    StartModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}