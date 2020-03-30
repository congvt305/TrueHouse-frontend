import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResult } from '../http-result';
import { Observable } from 'rxjs';
import { IOrder } from '../interface/i-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:8000/api/order/';
  orders: any;

  constructor(private httpClient: HttpClient) {
  }

 
  getAll(): Observable<HttpResult[]> {
    return this.httpClient.get<HttpResult[]>(this.url);
  }

  getById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  create(order: IOrder) {
    return this.httpClient.post(this.url, order);
  }
}
