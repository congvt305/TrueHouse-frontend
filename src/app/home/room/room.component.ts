import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  user;
  constructor(
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
