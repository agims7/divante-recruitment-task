import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Starship } from '@app/shared/models/starship.model';
import { environment } from '@env/environment';
import { GlobalMapperService } from '@app/shared/global-mapper.service';


@Injectable()
export class ListRepository {

  private _starshipListCache: Starship[] = null;
  private _searchQueryCache: string = null;

  constructor(
    private http: HttpClient,
    private globalMapperService: GlobalMapperService
  ) { }

  public getStarShips(searchQuery: string = null): Observable<Starship[]> {
    if (
      !!this._starshipListCache &&
      this._searchQueryCache === searchQuery
      ) {
      return of(this._starshipListCache);
    }

    let options = {};

    if (!!searchQuery) {
      options = {
        params: new HttpParams().set('search', searchQuery)
      };
    }

    return this.http.get(
      `${environment.url}/starships`,
      options
    )
      .pipe(
        map((response: any): Starship[] => {
          const starshipList: Starship[] = (response.results || []).map(
            (data: any): Starship => this.globalMapperService.mapToStarship(data)
          );

          this._starshipListCache = starshipList;
          this._searchQueryCache = searchQuery;

          return starshipList;
        })
      );
  }

}
