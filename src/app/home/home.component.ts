import { Component, OnInit } from '@angular/core';
import { IRoom } from '../interface/i-room';
import { RoomService } from '../service/room.service';
import { ImageService } from '../service/image.service';
import { IImage } from 'src/app/interface/i-image';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyword;
  address = '';
  bed_room_num = '';
  bath_room_num = '';
  price = '';

  rooms: IRoom[] = [];

  images = [];

  constructor(private roomService: RoomService,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.getAll(); 
    this.getAddress;   
  }

  getSearch(value) {
    this.keyword = value;
  }

  getAddress(value) {
   return this.address = value;
  }

  getBeRoom(value) {
    this.bed_room_num = value;
  }

  getBathRoom(value) {
    this.bath_room_num = value;
  }

  getPrice(value) {
    this.price = value;
  }

  getAll() {
    console.log(this.address);
    console.log(this.bed_room_num);
    console.log(this.bath_room_num);
    console.log(this.price);
        
    this.roomService.search(this.address, this.bed_room_num, this.bath_room_num, this.price).subscribe(data => {
      for (const [i, room] of data['data'].entries()) {
        this.rooms.push(room);
        this.imageService.getImageById(room.id).subscribe(data => {
          this.rooms[i]['thumb'] = data['data'][0].url;
        });
      }
    });
  }
}
