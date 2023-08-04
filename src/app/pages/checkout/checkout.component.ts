import { Component, OnInit } from '@angular/core';
import { Store } from './interface/store.interface';
import { CheckoutService } from './services/checkout.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Details } from './interface/order.interface';
import { Product } from '../products/interface/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  stores!: Store[];
  model = {
    store: '',
    name: '',
    shippingAddress: '',
    city: '',
  };
  cart: Product[] = [];
  detailsFormated: Details[] = [];
  isDelivery = true;
  currentUrl = '';
  constructor(
    private storeSvc: CheckoutService,
    private cartSvc: ShoppingCartService,
    private productsSvc: ProductsService,
    private router: Router
  ) {
    this.currentUrl = this.router.url;

    if (this.currentUrl !== '/checkout/thank-you-page') {
      this.checkIfCartIsEmpty();
    }
  }
  ngOnInit(): void {
    this.getStores();
    this.getProductsInCart();
    this.detailsFormated = this.formatDetails();
  }
  onPickupOrShipping(value: boolean): void {
    this.isDelivery = value;
  }

  private getStores(): void {
    this.storeSvc
      .getStores()
      .pipe(tap((res: Store[]) => (this.stores = res)))
      .subscribe();
  }
  onSubmit({ value: formData }: NgForm): void {
    console.log('submit', formData);
    const data = {
      ...formData,
      date: this.getCurrentDate(),
      isDelivery: this.isDelivery,
    };

    this.storeSvc
      .postOrder(data)
      .pipe(
        tap((res) => console.log(res)),
        switchMap(({ id: orderId }) => {
          return this.storeSvc.postDetailsOrder({
            details: this.detailsFormated,
            orderId,
          });
        }),
        tap(() => this.router.navigate(['/checkout/thank-you-page'])),
        delay(500),
        tap(() => this.cartSvc.resetCart())
      )
      .subscribe();
  }

  private getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  private formatDetails(): Details[] {
    const details: Details[] = [];
    this.cart.forEach((product: Product) => {
      const {
        id: productId,
        name: productName,
        qty: quantity,
        stock,
      } = product;
      const updateStock = stock - quantity;
      this.productsSvc
        .updateStock(productId, updateStock)
        .pipe(tap(() => details.push({ productId, productName, quantity })))
        .subscribe();
    });
    return details;
  }
  private getProductsInCart(): void {
    this.cartSvc.cartAction$
      .pipe(tap((products: Product[]) => (this.cart = products)))
      .subscribe();
  }
  private checkIfCartIsEmpty(): void {
    this.cartSvc.cartAction$
      .pipe(
        tap((products: Product[]) => {
          if (Array.isArray(products) && !products.length) {
            this.router.navigate(['/products']);
          }
        })
      )
      .subscribe();
  }
}
