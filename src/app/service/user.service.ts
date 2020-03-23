import {Injectable} from '@angular/core';
import {User} from "../interface/user";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = 'http://127.0.0.1:8000/api/';
    user: User;
    login: boolean;
    userData = new BehaviorSubject<object>(this.user);
    cast = this.userData.asObservable();
    loginData = new BehaviorSubject<boolean>(this.login);
    castLogIn = this.loginData.asObservable();

    constructor(
        protected http: HttpClient
    ) {
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.url + 'users');
    }

    log_in(data): Observable<User> {
        return this.http.post<User>(this.url + 'login', data);
    }

    register(data): Observable<User> {
        return this.http.post<User>(this.url + 'register', data);
    }

    logout() {
        return this.http.get(this.url + 'logout');
    }

    findById(id): Observable<User> {
        return this.http.get<User>(this.url + id);
    }

    update(user) {
      this.userData.next(user);
    }

    updateLogin(login) {
        this.loginData.next(login);
    }
}
