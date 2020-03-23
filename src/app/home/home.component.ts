import { Component, OnInit } from '@angular/core';
import { IRoom } from '../interface/i-room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms: IRoom[] = [];


  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.roomService.getAll().subscribe(data => {      
      for (const room of data['data']) {
          this.rooms.push(room);
          console.log(room);
          
      }
    });
  }

}
