import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';
import { ProductsListComponent } from './Views/Product/products-list/products-list.component';
import { SingleProductComponent } from './Views/Product/single-product/single-product.component';
import { HomepageComponent } from './Views/Homepage/homepage.component';
import { AdminViewComponent } from './Views/Admin-view/admin-view.component';
import { AboutPageComponent } from './Views/about-page/about-page.component';
import { ContactPageComponent } from './Views/contact-page/contact-page.component';

// Clients import
import { NewClientComponent } from './Views/Client/new-client/new-client.component';
import { ClientListComponent } from './Views/Client/client-list/client-list.component';
import { ClientDetailComponent } from './Views/Client/client-detail/client-detail.component';

// Orders import
import { OrdersComponent } from "./Views/orders/orders.component";
import { OrderDetailComponent } from "src/app/Views/orders/order-detail/order-detail.component";

// Employees import
import { EmployeesComponent } from "./Views/employees/employees.component";

// Stats import
import { StatsComponent } from "./Views/stats/stats.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'admin', component: AdminViewComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'product-list', component: ProductsListComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'new-client', component: NewClientComponent },
  { path: 'client-detail', component: ClientDetailComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'stats', component: StatsComponent },
  // developers views
  { path: 'dev/admin', component: AdminViewComponent },
  { path: 'dev/sign-up', component: SignUpComponent },
  { path: 'dev/log-in', component: LoginComponent },
  { path: 'dev/recover-pass', component: RecoverPasswordComponent },
  { path: 'dev/licence', component: LicenceComponent },
  { path: 'dev/product-list', component: ProductsListComponent },
  { path: 'dev/404', component: PageNotFoundComponent },
  { path: 'dev/single-product', component: SingleProductComponent },
  { path: 'dev/new-client', component: NewClientComponent },
  { path: 'dev/client-list', component: ClientListComponent },
  { path: 'dev/client-detail', component: ClientDetailComponent },
  // Path ** MUST be always the last route
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
