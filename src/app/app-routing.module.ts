import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceComponent } from './pages/piece/piece.component';
import { ProductsComponent } from './pages/products/products.component';
import { Product1Component } from './pages/product1/product1.component';
import { ShoppingsComponent } from './pages/shoppings/shoppings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full' },
  {path: 'auth/signup', component: SignupComponent },
  {path: 'auth/signin', component: SigninComponent },
  {path: 'piece', component:PieceComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'product1/:id', component:Product1Component},
  {path: 'shoppings', component:ShoppingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
