import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starshipImage'
})
export class StarshipImagePipe implements PipeTransform {

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
  private defaultImageUrl = 'https://via.placeholder.com/';

  transform(imageName: string, imageWidth: number = 200): any {
    if (
      !!imageName &&
      this.availableImages.some((image: string) => image === imageName)
    ) {
      return `../../../assets/img/${imageName}.jpg`;
    }
    
    return this.defaultImageUrl + imageWidth
  }

}
