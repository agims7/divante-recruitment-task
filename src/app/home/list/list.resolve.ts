import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ListRepository } from './list.repository';
import { Starship } from '@app/shared/models/starship.model';

@Injectable()
export class ListResolve implements Resolve<Starship[]> {

  constructor(
    private listRepository: ListRepository
  ) { }

  resolve(): Observable<Starship[]> {
    return this.listRepository.getStarShips()
    .pipe(
      catchError(
        () => of(null)
      )
    );
  }

}
