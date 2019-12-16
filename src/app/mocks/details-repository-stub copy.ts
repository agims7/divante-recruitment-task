import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

import { Starship } from '@app/shared/models/starship.model';

export class DetailsRepositoryStub {
  public getStarShip(): Observable<Starship> {
    return of(new Starship());
  }
}
