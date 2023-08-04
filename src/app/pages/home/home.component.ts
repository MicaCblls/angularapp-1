import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="message">
      <h1>¡Welcome!</h1>
      <button (click)="redirectToProducts()">Products</button>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {} // Inyecta el Router en el constructor

  redirectToProducts() {
    this.router.navigate(['/products']); // Navega a la página de inicio (ruta vacía)
  }
}
