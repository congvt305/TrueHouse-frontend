import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interface/i-user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:8000/api/"

  getAll() {
    return this.http.get<IUser[]>(this.url + 'users');
  }

  getById(id: number) {
    return this.http.get(this.url + 'users/' + id);
  }

  create(user: IUser) {
    return this.http.post('/api/users', user);
  }

  update(user: IUser) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
