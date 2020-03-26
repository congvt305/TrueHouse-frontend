import { Component, OnInit } from '@angular/core';
import { IRoom } from '../interface/i-room';
import { RoomService } from '../service/room.service';
import { ImageService } from '../service/image.service';
import { IImage } from '../interface/i-image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms: IRoom[] = [];
  images = [];


  constructor(private roomService: RoomService,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.roomService.getAll().subscribe(data => {      
      for (const room of data['data']) {
          this.rooms.push(room);
          this.getImageById(room.id);          
      }      
    });
  }

  getImageById(house) {
    this.imageService.getImageById(house).subscribe(data => {
      this.images.push(data);
    });
  }
}
