import { RoomService } from './../../service/room.service';
import { Room } from '../../service/room';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase/app';
//import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  isAuth: boolean;
  rooms: Room[] = [];

  constructor(
    public authService: AuthService,
    public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    /*
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
    */
  }

  onRoomChange(roomId: number) {
    console.log("onRoomChange:", roomId);
    this.roomService.setId(roomId);
  }

  onSignOut() {
    this.authService.signOut();
  }

}
