import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Starship } from '@app/shared/models/starship.model';
import { environment } from '@env/environment';
import { GlobalMapperService } from '@app/shared/global-mapper.service';

@Injectable()
export class DetailsRepository {

  private starshipCache: Starship = null;

  constructor(
    private http: HttpClient,
    private globalMapperService: GlobalMapperService,
  ) { }

  public getStarShip(id: string): Observable<Starship> {
    if (
      !!this.starshipCache &&
      this.starshipCache.id === id) {
      return of(this.starshipCache);
    }

    return this.http.get(
      `${environment.url}/starships/${id}`,
    )
      .pipe(
        map((response: any): Starship => this.globalMapperService.mapToStarship(response))
      );
  }
}
