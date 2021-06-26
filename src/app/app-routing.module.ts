import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {SalesComponent} from "./sales/sales.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'shop',  component: ShopComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'CheckOut',  component: CheckOutComponent },
  { path: 'shoppingCart',  component: ShoppingCartComponent },
  { path: 'sales/:p1/:p2',  component: SalesComponent },
  { path: 'sales',  redirectTo: 'sales/1/0', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
