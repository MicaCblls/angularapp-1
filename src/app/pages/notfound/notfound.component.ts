import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-pagenotfound',
  template: `
    <div class="message">
      <h1>¡Página no encontrada!</h1>
      <p>Lo siento, la página que estás buscando no existe.</p>
      <button (click)="redirectToHome()">Volver al inicio</button>
    </div>
  `,
  styleUrls: ['./notfound.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private router: Router) {} // Inyecta el Router en el constructor

  redirectToHome() {
    this.router.navigate(['/']); // Navega a la página de inicio (ruta vacía)
  }
}
