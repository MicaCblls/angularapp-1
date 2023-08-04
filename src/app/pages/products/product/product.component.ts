import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../interface/product.interface';

/* Change detection: mecanismo/estrategia que utiliza Angulr para saber cuando debe actualizar un componente o toda la vista en caso de que la data haya cambiado. Existen dos tipos:
OnPush: establece la estrategia en CheckOnce (bajo demanda), solo cuando el input de la data cambie
Default: establece la estrategia en CheckAlways
Estos cambios pueden ser producidos por: Eventos del mouse, llamadas Ajax, setInterval, setTimeOut */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/* Decorador @Input() permite comunicacion entre un componente padre y un componente hijo
Parent --> data flow --> Child */
/* Decorador @Output() en un componente (o directiva) hijo permite que los datos fluyan del hijo al padre
Parent <-- data flow <-- Child*/
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.addToCartClick.emit(this.product);
  }
}
