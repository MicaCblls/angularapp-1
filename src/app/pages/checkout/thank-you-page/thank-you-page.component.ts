import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  template: ` <div class="container">
    <h1 class="title">Thank you!</h1>
    <p class="content">Your order is on the way!</p>
    <button (click)="redirectToProducts()">Products</button>
  </div>`,
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent implements OnInit {
  currentUrl = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }

  redirectToProducts() {
    this.router.navigate(['/products']); // Navega a la página de inicio (ruta vacía)
  }
}
