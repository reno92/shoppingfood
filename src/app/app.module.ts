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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS  } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule  } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,  // storage
    MatToolbarModule, MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [
    ProductService, RoomService, AuthService, AuthGuardService,
    { provide: SETTINGS, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
