import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import * as data from '../../../../server/db.json';
import { commonEnvironment } from 'src/environments/environment.common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(
    private productsSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService
  ) {}
  async ngOnInit(): Promise<void> {
    console.log(commonEnvironment);

    (await this.productsSvc.getProducts())
      .pipe(tap((res: Product[]) => (this.products = res)))
      .subscribe();
  }
  addToCart(product: Product): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
