import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/i-user';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://127.0.0.1:8000/api/';
  user;
  loggedIn: boolean;
  userData = new BehaviorSubject<object>(this.user);
  cast = this.userData.asObservable();
  loggedInData = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(protected http: HttpClient, private router: Router) {}

  idUser;
  updateUser(user) {
    this.userData.next(user);
  }

  changePassword(user, id): Observable<IUser>  {
   return  this.http.patch<IUser>(this.url + 'users/' + id, user);

  }
  updateLoggedIn(loggedIn: boolean) {
    this.loggedInData.next(loggedIn);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + 'users/list');
  }

  login(data): Observable<IUser> {
    return this.http.post<IUser>(this.url + 'login', data);
  }

  register(data): Observable<IUser> {
    return this.http.post<IUser>(this.url + "register", data);
  }

  findById(id): Observable<IUser> {
    return this.http.get<IUser>(this.url + 'users/' + id);
  }

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(['']);
  }
}
