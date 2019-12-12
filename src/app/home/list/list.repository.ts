import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Starship } from '@app/shared/models/starship.model';
import { environment } from '@env/environment';
import { GlobalMapperService } from '@app/shared/global-mapper.service';


@Injectable()
export class ListRepository {

  private _starshipListCache: Starship[] = null;

  constructor(
    private http: HttpClient,
    private globalMapperService: GlobalMapperService
  ) { }

  public getStarShips(): Observable<Starship[]> {
    if (!!this._starshipListCache) {
      return of(this._starshipListCache);
    }

    return this.http.get(
      `${environment.url}/starships`,
    )
      .pipe(
        map((response: any): Starship[] => {
          const starshipList: Starship[] = (response.results || []).map(
            (data: any): Starship => this.globalMapperService.mapToStarship(data)
          );

          this._starshipListCache = starshipList;

          return starshipList;
        })
      );
  }
}
