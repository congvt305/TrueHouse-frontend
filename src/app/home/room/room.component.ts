import { Component, OnInit } from "@angular/core";
import { RoomService } from "src/app/service/room.service";
import { IRoom } from '../../interface/i-room';
import { ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/service/user.service';
import { ImageService } from 'src/app/service/image.service';
import { IImage } from 'src/app/interface/i-image';

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent implements OnInit {
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
