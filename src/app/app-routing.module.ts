import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';

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
import { ProductsWithoutSessionComponent } from './Views/Product/products-without-session/products-without-session.component';
import { CheckoutComponent } from './Views/checkout/checkout/checkout.component';
import { ProfileComponent } from './Views/profile/profile.component';
import { TermsComponent } from './Views/terms/terms.component';
import { SingleProductWithoutSessionComponent } from './Views/Product/single-product-without-session/single-product-without-session.component';
// Clients import
import { NewClientComponent } from './Views/Client/new-client/new-client.component';
import { ClientListComponent } from './Views/Client/client-list/client-list.component';
import { ClientDetailComponent } from './Views/Client/client-detail/client-detail.component';

// Orders import
import { OrdersComponent } from './Views/orders/orders.component';

// Offers import
import { OffersComponent } from './Views/Offers/offers/offers.component';
import { OfferDetailComponent } from './Views/Offers/offer-detail/offer-detail.component';

// Employees import
import { EmployeesListComponent } from './Views/employees/employees-list/employees-list.component';
import { EmployeeComponent } from './Views/employees/employee/employee.component';

// Stats import
import { StatsComponent } from './Views/stats/stats.component';
import { ClientContactComponent } from './Views/client-contact/client-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard] },
  { path: 'terms', component: TermsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'product-list', component: ProductsListComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client-list',
    component: ClientListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'new-client', component: NewClientComponent },
  { path: 'client-detail/:id', component: ClientDetailComponent },
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'products-without-session',
    component: ProductsWithoutSessionComponent,
  },
  {path:'single-product-without-session/:id',
    component:SingleProductWithoutSessionComponent},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard]},
  { path: 'offer-detail/:id', component: OfferDetailComponent },
  {
    path: 'employees-list',
    component: EmployeesListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'client-contact',
    component: ClientContactComponent,
    canActivate: [AuthGuard],
  },

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
  { path: 'dev/employee-list', component: EmployeesListComponent },
  { path: 'dev/checkout', component: CheckoutComponent },
  // Path ** MUST be always the last route
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
