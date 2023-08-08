import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interface/product.interface';
import { supabase } from 'src/supabase.config';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  /*Observable: es un flujo de datos en el tiempo. Los observables representan una coleccion de futuros valores o data */
  async getProducts(): Promise<Observable<Product[]>> {
    let { data: products, error } = await supabase.from('products').select('*');

    return of(products as Product[]);
  }
  async updateStock(
    productId: string,
    stock: number
  ): Promise<Observable<any>> {
    /* 
    return this.http.patch<any>(`${this.apiUrl}/products/${productId}`, body); */
    const body = { stock: stock };
    const { data, error } = await supabase
      .from('products') // Nombre de tu tabla
      .update(body) // La columna y el nuevo valor
      .eq('id', productId); // Asume que 'id' es la clave para identificar el producto

    if (error) {
      console.error('Error updating product:', error);
    }

    return of(data);
  }
}

/*Service: un servicio es una capa que añadimos para manejar los datos. Es un proveedor de datos que mantiene logica de acceso y logica de negocio. Los servicios seran consumidos por los componentes y tendran la responsabilidad de acceder a la informacion y manipularla. */
