import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import components
import { NewClientComponent } from './new-client/new-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

// services
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NewClientComponent,
    ClientListComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      // loader: {
      //   provide: TranslateLoader,
      //   useFactory: HttpLoaderFactory,
      //   deps: [HttpClient],
      // },
    }),
  ],
  exports: [NewClientComponent],
})
export class ClientModule {   }
