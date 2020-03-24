import { Component, OnInit } from "@angular/core";
import { RoomService } from "src/app/service/room.service";
import { IRoom } from '../../interface/i-room';
import { ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent implements OnInit {
  room: IRoom;
  user;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getRoomId(id);
    this.user = this.userService.user;
  }

  getRoomId(id) {    
    this.roomService.getById(id).subscribe(data => {
      this.room = data["data"];
      console.log(this.room);
      
    });
  }
}
