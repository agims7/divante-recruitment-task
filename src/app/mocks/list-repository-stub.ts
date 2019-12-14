import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

import { Starship } from '@app/shared/models/starship.model';

export class ListRepositoryStub {
  public getStarShips(): Observable<Starship[]> {
    return of(<Starship[]>[
      new Starship(),
      new Starship
    ]);
  }

}