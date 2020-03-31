import { RoomService } from '../../service/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyRoom = [];

  historyUser = [];

  roomHead = ['ID', 'House', 'Customer Name', 'Phone', 'Check In', 'Check Out'];
  userHead = ['ID', 'House', 'Check In', 'Check Out', 'Price'];



  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    let idLogin = sessionStorage.getItem('token');
    this.getHistoryByRoom(idLogin);
    this.getHistoryByUser(idLogin);
  }

  getHistoryByRoom(id) {
    this.roomService.getHistoryByRoom(id).subscribe(data => {
      this.historyRoom = data["data"];

    });
  }

  getHistoryByUser(id) {
    this.roomService.getHistoryByUser(id).subscribe(data => {
      this.historyUser = data["data"];
    });
  }
}
