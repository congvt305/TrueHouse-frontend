import { Component, OnInit } from "@angular/core";
import { RoomService } from "src/app/service/room.service";
import { IRoom } from '../../interface/i-room';
import { ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/service/user.service';
import { ImageService } from 'src/app/service/image.service';
import { IImage } from 'src/app/interface/i-image';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent implements OnInit {
  room: IRoom;
  image: IImage;
  user;

  avgRating;
  id;
  updateStatus;
  login = sessionStorage.getItem('token');

  
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private userService: UserService,
    private imageService: ImageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRoomId(id);
    this.user = this.userService.user;

    console.log(this.room);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.roomService.getAvgStar(this.id).subscribe(next => {this.avgRating = next.data; console.log(this.avgRating); });


    this.updateStatus = this.fb.group({
      status: ["", [Validators.required]],
      id: id,
    })

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
    });
  }

  onSubmit(data) {
    this.roomService.update(data, data['id']).subscribe((result: any) => {
      location.reload();
    });
    
  }


}
