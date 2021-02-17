import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { AppRoutingModule } from './../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

=======
import { AppRoutingModule } from '../../app-routing.module';
>>>>>>> 03604a9fb8c753d65f815ef0e7fe4c2d326c53b7

// import components
import { NewClientComponent } from './new-client/new-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

// services
import { HttpClientModule } from '@angular/common/http';


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
  ],
  exports: [NewClientComponent],
})
export class ClientModule {   }
