import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  /*Observable: es un flujo de datos en el tiempo. Los observables representan una coleccion de futuros valores o data */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  updateStock(productId: number, stock: number): Observable<any> {
    const body = { stock: stock };
    return this.http.patch<any>(`${this.apiUrl}/products/${productId}`, body);
  }
}

/*Service: un servicio es una capa que añadimos para manejar los datos. Es un proveedor de datos que mantiene logica de acceso y logica de negocio. Los servicios seran consumidos por los componentes y tendran la responsabilidad de acceder a la informacion y manipularla. */
