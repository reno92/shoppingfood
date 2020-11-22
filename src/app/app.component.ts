import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import  firebase from 'firebase';
import { AngularFireModule } from "@angular/fire";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'shoppingfood';
  constructor() {
   /* const config = {
      //For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyBRw8I01swSexyflK5r2ljtJo8lL5xFHKI",
        authDomain: "homelist-c2f2c.firebaseapp.com",
        databaseURL: "https://homelist-c2f2c.firebaseio.com",
        projectId: "homelist-c2f2c",
        storageBucket: "homelist-c2f2c.appspot.com",
        messagingSenderId: "455229138509",
        appId: "1:455229138509:web:462206ab30f3af9c5d5e04",
        measurementId: "G-3QXPHFKC57"

    }; */
    //firebase.initializeApp(config);
    //AngularFireModule.initializeApp(config);
  }
}
