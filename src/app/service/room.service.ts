import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRoom } from '../interface/i-room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url = '';
  rooms: any;

  constructor(private httpClient: HttpClient,
              private route: Router) {
  }

 
  getAll(): Observable<IRoom[]> {
    return this.httpClient.get<IRoom[]>(this.url + '/rooms');
  }

  getById(id: number) {
    return this.httpClient.get(this.url + '/rooms/' + id);
  }

  create(user: IRoom) {
    return this.httpClient.post(this.url + '/rooms', user);
  }

  update(user: IRoom, id) {
    return this.httpClient.put(this.url + '/rooms/' + id, user);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/rooms/' + id);
  }

}
