import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CartComponent } from './cart/cart.component';
import { CartElementComponent } from './cart/cart-element/cart-element.component';
import { DetailsComponent } from './details/details.component';
import { DetailsRepository } from './details/details.repository';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { ListElementComponent } from './list/list-element/list-element.component';
import { ListRepository } from './list/list.repository';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    CartComponent,
    CartElementComponent,
    DetailsComponent,
    HomeComponent,
    ListComponent,
    ListElementComponent,
  ],
  providers: [
    DetailsRepository,
    ListRepository,
  ]
})
export class HomeModule { }
