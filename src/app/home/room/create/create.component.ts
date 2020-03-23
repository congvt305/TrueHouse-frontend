import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IRoom } from "../../../interface/i-room";
import { RoomService } from '../../../service/room.service';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  model: IRoom;
  formCreateRoom;
  description: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.formCreateRoom = this.formBuilder.group({
      name_house: ["", [Validators.required, Validators.minLength(6)]],
      house_type: ["", [Validators.required]],
      room_type: ["", [Validators.required]],
      address: ["", [Validators.required]],
      bed_room_num: ["", [Validators.required]],
      bath_room_num: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      user_id: [""],
      status: [""]
    });
  }

  onSubmit(data) {
    this.model = data;
    console.log(this.model);
    
    this.roomService.create(this.model).subscribe(
      (result: any) => {
        console.log(result);
      });
  }
}
