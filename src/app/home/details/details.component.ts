import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '@app/shared/cart.service';
import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public starship: Starship = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.fetchData();
  }

  public addToCart(): void {
    this.cartService.onCartChange.next(this.starship);
  }

  private fetchData(): void {
    this.starship = this.activatedRoute.snapshot.data['starship'];
  }

}
