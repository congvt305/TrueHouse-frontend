import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { IRoom } from "../../../interface/i-room";
import { RoomService } from "../../../service/room.service";
import { FileUploader } from "ng2-file-upload";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  model: IRoom;
  formCreateRoom;
  description: string = "";
  uploadForm: FormGroup;

  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  ERROR_MESSAGE = {
    name_house: [
      {type: 'required', message: 'User is required.'},
      {type: 'minlength', message: 'Username has min length : 6'},
    ],
    house_type: [
      {type: 'required', message: 'House type is required.'},
    ],
    room_type: [
      {type: 'required', message: 'Room type is required.'},
    ],
    address: [
      {type: 'required', message: 'Address is required.'},
    ],
    bed_room_num: [
      {type: 'required', message: 'Bed room num is required.'},
    ],
    bath_room_num: [
      {type: 'required', message: 'Bath room num is required.'},
    ],
    description: [
      {type: 'required', message: 'Description is required.'},
    ],
    price: [
      {type: 'required', message: 'Price type is required.'},
    ],
    status: [
      {type: 'required', message: 'House type is required.'},
    ],
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private roomService: RoomService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formCreateRoom = this.fb.group({
      name_house: ["", [Validators.required, Validators.minLength(6)]],
      house_type: ["", [Validators.required]],
      room_type: ["", [Validators.required]],
      address: ["", [Validators.required]],
      bed_room_num: ["", [Validators.required]],
      bath_room_num: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      user_id: [""],
      status: ["",[Validators.required]],
      document: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(data) {
    this.model = data;
    this.roomService.create(this.model).subscribe((result: any) => {
      console.log(result["data"].id);
      let house_id = result["data"].id;

      for (let i = 0; i < this.uploader.queue.length; i++) {
        let fileItem = this.uploader.queue[i]._file;
        if (fileItem.size > 10000000) {
          alert("Each File should be less than 10 MB of size.");
          return;
        }
      }

      for (let j = 0; j < this.uploader.queue.length; j++) {
        let data = new FormData();
        let fileItem = this.uploader.queue[j]._file;
        console.log(fileItem);
        data.append("file", fileItem);
        data.append("fileSeq", "seq" + j);
        this.uploadFile(data, house_id).subscribe(data => {
          console.log(data);
        });
      }
      this.uploader.clearQueue();
    });
  }

  uploadFile(data: FormData, house_id) {
    return this.http.post(
      "http://localhost:8000/api/multiple-image/" + house_id,
      data
    );
  }
}
