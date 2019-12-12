import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListElementComponent implements OnInit {

  @Input()
  public starship: Starship = null;

  constructor( ) { }

  ngOnInit() {
  }

  public getStarshipImage(): string {
    return `../../../assets/img/${this.starship.name}.jpg`;
  }

  public setRedirectionUrl(): string {
    return `/home/details/${this.starship.id}`;
  }

}
