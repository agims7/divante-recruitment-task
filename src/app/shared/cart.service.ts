import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Starship } from './models/starship.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public starships: Starship[] = [];
  public finalCost = 0;
  public onCartChange: BehaviorSubject<Starship> = new BehaviorSubject<Starship>(null);

  constructor() {
    this.onCartChange.subscribe(
      (starship: Starship) => {
        if (!!starship) {
          this.starships.push(starship);
        }

        this.setFinalCost();
      });
  }

  private setFinalCost(): void {
    this.finalCost = this.starships.reduce((prev, current) => {
      return prev + current.costInCredits;
    }, 0);
  }


}
