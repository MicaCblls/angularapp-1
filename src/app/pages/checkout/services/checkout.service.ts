import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interface/store.interface';
import { Order, DetailsOrder, Details } from '../interface/order.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  /*Observable: es un flujo de datos en el tiempo. Los observables representan una coleccion de futuros valores o data */
  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores`);
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order);
  }
  postDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
    return this.http.post<DetailsOrder>(
      `${this.apiUrl}/detailsOrders`,
      details
    );
  }
}
