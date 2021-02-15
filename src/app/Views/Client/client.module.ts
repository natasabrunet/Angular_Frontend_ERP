import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';

//import components
import { NewClientComponent } from './new-client/new-client.component';

// services
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NewClientComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [NewClientComponent],
})
export class ClientModule {}
