import { Injectable } from '@angular/core';

import { Starship } from './models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalMapperService {

  constructor() { }


  public mapToStarship(data: any): Starship {
    if (!this.hasData(data)) {
      return null;
    }

    const starshipUrlArray = data.url ? data.url.slice(0, -1).split("/") : [];
    const starshipId = starshipUrlArray.length ? starshipUrlArray[starshipUrlArray.length - 1] : null;

    return new Starship(
      starshipId,
      +data.cargo_capacity || 0,
      data.consumables || '',
      (+data.cost_in_credits)/100000 || 0,
      +data.crew || 0,
      +data.length || 0,
      data.model || '',
      data.name || '',
      +data.passengers || 0,
    );
  }

  private hasData(data: any): boolean {
    if (
      null === data ||
      undefined === data
    ) {
      return false;
    }

    return true
  }

}