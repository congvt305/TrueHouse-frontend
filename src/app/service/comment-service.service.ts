import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../interface/i-comment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  url = 'http://127.0.0.1:8000/api/';
  comment;

  constructor(protected http: HttpClient,
              private router: Router) {
  }
  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url + 'comments/list');
  }

  createComment(comment): Observable<IComment> {
    return this.http.post<IComment>(this.url + 'comments' , comment);
  }

  getCommentById(id): Observable<IComment> {
    return this.http.get<IComment>(this.url + 'comments/' + id);
  }
}


