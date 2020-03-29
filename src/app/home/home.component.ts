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

  rooms: IRoom[] = [];

  images = [];

  constructor(private roomService: RoomService,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.roomService.getAll().subscribe(data => {
      for (const [i, room] of data['data'].entries()) {
        this.rooms.push(room);

        this.imageService.getImageById(room.id).subscribe(data => {
          this.rooms[i]['thumb'] = data['data'][0].url;
        });
      }
      console.log(this.rooms);
    });
  }
}
