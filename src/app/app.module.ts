import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Interpolation } from '@angular/compiler'; // FIXME: CAN WE REMOVE IT?

import localeESP from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//import modules
import { StartModule } from './Views/Start/start.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminViewModule } from './Views/Admin-view/admin-view.module';

// import components
import { HeaderComponent } from './Components/header/header.component';
import { AdminComponent } from './Components/header/admin/admin.component';
import { NotificationsComponent } from './Components/header/notifications/notifications.component';
import { HeaderSearchComponent } from './Components/header/header-search/header-search.component';
import { TogglerComponent } from './Components/header/toggler/toggler.component';
import { ProductsListComponent } from './views/Product/products-list/products-list.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { SingleProductComponent } from './Views/Product/single-product/single-product.component';
import { DevNavbarComponent } from './Components/dev-navbar/dev-navbar.component';

// Pipes
import { NoProductImagePipe } from './pipes/no-product-image.pipe';

registerLocaleData(localeESP);

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
    ProductsListComponent,
    FooterComponent,
    LicenceComponent,
    SingleProductComponent,
    DevNavbarComponent,
    NoProductImagePipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule, // don't remove this
    StartModule,
    AdminViewModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
