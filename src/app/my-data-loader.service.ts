import { Injectable } from '@angular/core';
import dataJson from '../../server/db.json';
import supabase from '../supabase.config';

@Injectable({
  providedIn: 'root',
})
export class MyDataLoaderService {
  constructor() {}

  async loadData(): Promise<void> {
    const { data, error } = await supabase
      .from('products')
      .insert(dataJson.products)
      .select();

    if (error) {
      localStorage.setItem('productosCargados', 'false');
    } else {
      localStorage.setItem('productosCargados', 'true');
    }
  }
  async loadDataStores(): Promise<void> {
    const { data, error } = await supabase
      .from('stores')
      .insert(dataJson.stores)
      .select();

    if (error) {
      localStorage.setItem('tiendasCargadas', 'false');
    } else {
      localStorage.setItem('tiendasCargadas', 'true');
    }
  }
  dataLoaded(): void {
    if (
      !localStorage.getItem('productosCargados') ||
      localStorage.getItem('productosCargados') === 'false'
    ) {
      this.loadData(); // Función que carga los datos
    }
    if (
      !localStorage.getItem('tiendasCargadas') ||
      localStorage.getItem('tiendasCargadas') === 'false'
    ) {
      this.loadDataStores(); // Función que carga los datos
    }
  }
}
