import { Component, OnInit } from '@angular/core';
import {IRoom} from "../../interface/i-room";
import {IImage} from "../../interface/i-image";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {ImageService} from "../../service/image.service";

@Component({
  selector: 'app-houses-owned-by-user',
  templateUrl: './houses-owned-by-user.component.html',
  styleUrls: ['./houses-owned-by-user.component.css']
})
export class HousesOwnedByUserComponent implements OnInit {

  room: IRoom;
  image: IImage;
  user;

  constructor(
      private roomService: RoomService,
      private route: ActivatedRoute,
      private userService: UserService,
      private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getRoomId(id);
    this.user = this.userService.user;
    console.log(this.room);
  }

  getRoomId(id) {
    this.roomService.getById(id).subscribe(data => {
      this.room = data["data"];
      this.getImageById(this.room);
    });
  }

  getImageById(house) {
    this.imageService.getImageById(house.id).subscribe(data => {
      this.image = data['data'];
      console.log(this.image);

    });
  }
}
