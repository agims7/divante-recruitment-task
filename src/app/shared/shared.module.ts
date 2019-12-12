import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { GlobalMapperService } from './global-mapper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CartService,
    GlobalMapperService,
  ]
})
export class SharedModule { }
