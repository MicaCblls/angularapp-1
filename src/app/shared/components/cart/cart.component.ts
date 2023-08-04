import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  template: `<ng-container
    *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart"
  >
    <ng-container *ngIf="dataCart.total">
      <mat-icon
        [matTooltipPosition]="'below'"
        matTooltip="Total: {{ dataCart.total | currency }}
      (Cantidad: {{ dataCart.quantity }})"
        aria-label="Button that displays a tooltip"
        >shopping_cart</mat-icon
      >
    </ng-container>
  </ng-container> `,
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit() {}
}
