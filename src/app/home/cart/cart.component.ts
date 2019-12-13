import { Component } from '@angular/core';

import { CartService } from '@app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    public cartService: CartService
  ) { }

  public trackByIndex(index): number {
    return index;
  }

}
