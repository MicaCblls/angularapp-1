import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '../interface/store.interface';
import { Order, DetailsOrder, Details } from '../interface/order.interface';
import supabase from 'src/supabase.config';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  /*Observable: es un flujo de datos en el tiempo. Los observables representan una coleccion de futuros valores o data */
  async getStores(): Promise<Observable<Store[]>> {
    let { data: stores, error } = await supabase.from('stores').select('*');

    return of(stores as Store[]);
  }

  async postOrder(order: Order): Promise<Observable<any>> {
    const { data, error } = await supabase
      .from('orders')
      .insert([order])
      .select();

    return of(data);
  }
  async postDetailsOrder(details: DetailsOrder): Promise<Observable<any>> {
    const { data, error } = await supabase
      .from('detailsOrders')
      .insert([details])
      .select();

    return of(data);
  }
}
