import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DetailsRepository } from './details.repository';
import { Starship } from '@app/shared/models/starship.model';

@Injectable()
export class DetailsResolve implements Resolve<Starship> {

  constructor(
    private detailsRepository: DetailsRepository
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Starship> {
    const starshipId = route.params['id'];

    return this.detailsRepository.getStarShip(starshipId)
    .pipe(
      catchError(
        () => of(null)
      )
    );
  }

}
