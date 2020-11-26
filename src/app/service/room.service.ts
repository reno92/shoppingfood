import { MockData } from './../mock-data/mock-room-data';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Room } from '../service/room';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  rooms: Room[] = [];
  currentId: number = 0;
  @Output() change: EventEmitter<number> = new EventEmitter();


  constructor() {
    this.rooms = MockData.rooms;
  }

  getRooms(): Room[] {
    return this.rooms;
  }

  getRoomById(id: number): Room {
    return this.rooms.find(r => r.id === id);
  }

  removeRoom(room: Room) {
    let index = this.rooms.indexOf(room);
    if (index !== -1) {
      this.rooms.splice(index, 1);
    }
  }

  setId(id: number){
    this.currentId = id;
    this.change.emit(this.currentId);
  }
}
