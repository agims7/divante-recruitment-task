import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Starship } from '@app/shared/models/starship.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListElementComponent {

  @Input()
  public starship: Starship = null;

  private availableImages: string[] = [
    'Death Star',
    'EF76 Nebulon-B escort frigate',
    'Executor',
    'Imperial shuttle',
    'Millennium Falcon',
    'Sentinel-class landing craft',
    'Slave 1',
    'TIE Advanced x1',
    'X-wing',
    'Y-wing'
  ];

  constructor( ) { }

  public getStarshipImage(): string {
    if (this.availableImages.some((image: string) => image === this.starship.name)) {
      return `../../../assets/img/${this.starship.name}.jpg`;
    }

    return 'https://via.placeholder.com/200';
  }

  public setRedirectionUrl(): string {
    return `/home/details/${this.starship.id}`;
  }

}
