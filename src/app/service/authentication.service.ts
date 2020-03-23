import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>('/api/authenticate', { email: email, password: password })
        .map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
