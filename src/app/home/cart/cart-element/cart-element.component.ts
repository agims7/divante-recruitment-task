import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { CartService } from '@app/shared/cart.service';
import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartElementComponent {

  @Input()
  public starship: Starship = null;

  @Input()
  public index: number = null;

  constructor(
    private cartService: CartService,
  ) { }

  public removeFromCart(): void {
    this.cartService.starships.splice(this.index, 1);
    this.cartService.onCartChange.next(null);
  }

}
