import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, finalize } from 'rxjs/operators';

import { ListRepository } from './list.repository';
import { ListService } from './list.service';
import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    ListService
  ]
})
export class ListComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public starships: Starship[] = [];

  private componentSubscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private listRepository: ListRepository,
    private listService: ListService,
  ) {
    this.fetchData();
  }

  ngOnInit() {
    const searchWatch: Subscription = this.watchSearchChange();

    this.componentSubscription.add(searchWatch);
  }

  ngOnDestroy(): void {
    this.componentSubscription.unsubscribe();
  }

  public trackByIndex(index): number {
    return index;
  }

  private watchSearchChange(): Subscription {
    return this.listService.searchChange$
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
        (query: string) => {
          this.getListData(query);
        }
      );
  }

  private getListData(query: string): void {
    this.isLoading = true;

    this.listRepository.getStarShips(query)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (starships: Starship[]) => {
          this.starships = starships;
        },
        () => {
          this.starships = [];
        }
      );
  }

  private fetchData(): void {
    this.starships = this.activatedRoute.snapshot.data['starships'];
  }

}
