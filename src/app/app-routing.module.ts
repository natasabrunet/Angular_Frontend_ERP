import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenceComponent } from './Components/Footer/licence/licence.component';

const routes: Routes = [

  {path: 'Licence', component: LicenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
