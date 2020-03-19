import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IRoom } from "../../../interface/i-room";
import { RoomService } from "src/app/service/room.service";

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formCreateRoom = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      type_house: ["", [Validators.required]],
      type_room: ["", [Validators.required]],
      address: ["", [Validators.required]],
      num_bed: ["", [Validators.required]],
      num_bath: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]]
    });
  }

  onSubmit(data) {
    this.model = data;
    // this.roomService.create(this.model).subscribe(
    //   (result: any) => {

    //   });
    console.log(this.model);
  }
}
