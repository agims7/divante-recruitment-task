import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public starships: Starship[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.fetchData();
  }

  ngOnInit() {
  }

  public trackByIndex(index): number {
    return index;
  }

  private fetchData(): void {
    this.starships = this.activatedRoute.snapshot.data['starships'];
  }

}
