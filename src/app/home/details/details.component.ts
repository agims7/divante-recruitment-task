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
  private availableImages: string[] = [
    'Death Star',
    'EF76 Nebulon-B escort frigate',
    'Executor',
    'Imperial shuttle',
    'Millennium Falcon',
    'Sentinel-class landing craft',
    'Slave 1',
    'TIE Advanced x1',
    'X-wing',
    'Y-wing'
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.fetchData();
  }

  ngOnInit() {
  }

  public getStarshipImage(): string {
    if (this.availableImages.some((image: string) => image === this.starship.name)) {
      return `../../../assets/img/${this.starship.name}.jpg`;
    }

    return 'https://via.placeholder.com/800x400';
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
