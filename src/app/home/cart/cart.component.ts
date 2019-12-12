import { Component, OnInit } from '@angular/core';

import { CartService } from '@app/shared/cart.service';
import { Subscription } from 'rxjs';
import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
  }

  public trackByIndex(index): number {
    return index;
  }

}
