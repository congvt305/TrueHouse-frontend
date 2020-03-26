import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResult } from '../http-result';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = 'http://localhost:8000/api/multiple-image/';
  images: any;

  constructor(private httpClient: HttpClient) {
  }

 
  getImageById(house_id): Observable<HttpResult[]> {
    return this.httpClient.get<HttpResult[]>(this.url + house_id);
  }

  uploadFile(data: FormData, house_id): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");

    return this.httpClient.post(
      this.url + house_id,
      data,
      { headers: headers }
    );
  }
}
