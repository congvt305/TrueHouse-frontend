import { RoomService } from '../../service/room.service';
import { ImageService } from '../../service/image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  getFormSearch;

  @Output() search = new EventEmitter<string>();

  @Output() getAddress = new EventEmitter<string>();

  @Output() getBeRoom = new EventEmitter<string>();

  @Output() getBathRoom = new EventEmitter<string>();

  @Output() getPrice = new EventEmitter<string>();

  dateHead;

  data = [];

  constructor(
    private fb: FormBuilder,
    private roomService:RoomService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getFormSearch = this.fb.group({
      start: Date,
      end: Date,
      address: [""],
      bed_room_num: [""],
      bath_room_num: [""],
      price: [""],
    });
  }

  getKeyword(event) {
    let value = event.target.value;
    this.search.emit(value);
  }

  getKeywordBy(event) {
    let value = event.target.value;
    this.getAddress.emit(value);
  }

  onSubmit(data) {

    // this.getAddress.emit(data.address);
    // this.getBeRoom.emit(data.bed_room_num);
    // this.getBathRoom.emit(data.bath_room_num);
    // this.getPrice.emit(data.price);
    this.dateHead = ['ID', 'House', 'Time', 'Address', 'Số Phòng Ngủ', 'Số Phòng Tắm', 'Price'];     
    this.roomService.search(data.address, data.bed_room_num, data.bath_room_num, data.price, data.start, data.end).subscribe(data => {
      for (const [i, room] of data['data'].entries()) {
        this.data.push(room);
      }
    });
  }
}