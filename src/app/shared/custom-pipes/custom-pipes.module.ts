import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipImagePipe } from './starship-image.pipe';

@NgModule({
  declarations: [
    StarshipImagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarshipImagePipe
  ]
})
export class CustomPipesModule { }
