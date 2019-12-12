import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageLoaderModule } from '@dvs-angular/page-loader';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UiScrollerModule } from './ui/ui-scroller.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PageLoaderModule,
    SharedModule,
    UiScrollerModule,

    // Material
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
