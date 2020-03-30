import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResult } from '../http-result';
import { IRoom } from '../interface/i-room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  address = '';
  bed_room_num = '';
  bath_room_num = '';
  price = '';

  private url = 'http://localhost:8000/api/houses/';
  rooms: any;
  private url2 = 'http://127.0.0.1:8000/api/comments/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<HttpResult[]> {
    return this.httpClient.get<HttpResult[]>(this.url);
  }

  getById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  create(room: IRoom) {
    return this.httpClient.post(this.url, room);
  }


  getAvgStar(id): Observable<any> {
    return this.httpClient.get(this.url2 + 'rating/' + id);
  }

  // update(user: IRoom, id) {
  //   return this.httpClient.put(this.url + '/houses/' + id, user);
  // }

  search(address, bed_room_num, bath_room_num, price):Observable<HttpResult[]> {
    return this.httpClient.get<HttpResult[]>(this.url + `search?address=${address}
    &bed_room_num=${bed_room_num}
    &bath_room_num=${bath_room_num}
    &price=${price}`);
  }

  update(user: IRoom, id) {
    return this.httpClient.patch(this.url + id + '/update', user);
  }


  // delete(id: number) {
  //   return this.httpClient.delete(this.url + '/houses/' + id);
  // }

  getHistoryByRoom(id: number) {
    return this.httpClient.get(this.url + id + '/list-order');
  }

  getHistoryByUser(id: number) {
    return this.httpClient.get(this.url + id + '/list-order-by-user');
  }

}
