import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { RoomService } from './../../service/room.service';
import { Room } from '../../service/room';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {

  rooms: Room[] = [];

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}
