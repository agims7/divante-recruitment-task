import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

import { ListService } from '../list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public search: FormControl = new FormControl(
    '',
    [
      Validators.maxLength(25)
    ]
  );

  private componentSubscription: Subscription = new Subscription();

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    const searchWatch: Subscription = this.watchSearchChange();

    this.componentSubscription.add(searchWatch);
  }

  ngOnDestroy(): void {
    this.componentSubscription.unsubscribe();
  }

  private watchSearchChange(): Subscription {
    return this.search.valueChanges
      .pipe(
        filter(
          (query: string) => (query.length > 2 || query.length === 0)
        ),
        debounceTime(500),
      )
      .subscribe(
        (query: string) => {
          this.listService.searchChange$.next(query);
        }
      );
  }
}
