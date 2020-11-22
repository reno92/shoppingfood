
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          console.log('Connecté');
        } else {
          this.isAuth = false;
          console.log('Déconnecté');
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
  }

}
