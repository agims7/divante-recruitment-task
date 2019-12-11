import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,

    // Material
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    ContactComponent
  ],
})
export class ContactModule { }
