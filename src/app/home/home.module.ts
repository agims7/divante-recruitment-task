import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CartComponent } from './cart/cart.component';
import { CartElementComponent } from './cart/cart-element/cart-element.component';
import { CustomPipesModule } from '@app/shared/custom-pipes/custom-pipes.module';
import { DetailsComponent } from './details/details.component';
import { DetailsRepository } from './details/details.repository';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { ListElementComponent } from './list/list-element/list-element.component';
import { ListRepository } from './list/list.repository';
import { SearchComponent } from './list/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPipesModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    CartComponent,
    CartElementComponent,
    DetailsComponent,
    HomeComponent,
    ListComponent,
    ListElementComponent,
    SearchComponent,
  ],
  providers: [
    DetailsRepository,
    ListRepository,
  ]
})
export class HomeModule { }
