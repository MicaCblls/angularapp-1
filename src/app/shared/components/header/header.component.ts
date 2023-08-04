import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  //template in-line
  template: `<mat-toolbar color="primary">
    <a [routerLink]="['/']"><span>My Application</span></a>
    <div class="buttons">
      <a [routerLink]="['/products']" class="navbar-button"> Products </a>
      <a [routerLink]="['/checkout']" class="navbar-button">
        <app-cart></app-cart>
      </a>
    </div>
  </mat-toolbar>`,
  //template in-line
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {} // Inyecta el Router en el constructor
}
