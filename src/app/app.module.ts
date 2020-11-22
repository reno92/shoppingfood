import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './pages/piece/piece.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductService } from './service/product.service';
import { Product1Component } from './pages/product1/product1.component';
import { RoomService } from './service/room.service';
import { ShoppingsComponent } from './pages/shoppings/shoppings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
//    RegisterComponent,
//    LoginComponent,
    PieceComponent,
    MenuComponent,
    FooterComponent,
    ProductsComponent,
    Product1Component,
    ShoppingsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ProductService, RoomService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
