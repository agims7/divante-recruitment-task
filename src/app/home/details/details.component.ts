import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '@app/shared/cart.service';
import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public starship: Starship = null;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.fetchData();
  }

  ngOnInit() {
  }

  public getStarshipImage(): string {
    return `../../../assets/img/${this.starship.name}.jpg`;
  }

  public addToCart(): void {
    this.cartService.onCartChange.next(this.starship);
  }

  // Deprecated

  // public isInCart(): boolean {
  //   return this.cartService.starships.some((cartElement: Starship) => cartElement.id === this.starship.id);
  // }

  private fetchData(): void {
    this.starship = this.activatedRoute.snapshot.data['starship'];
  }

}
