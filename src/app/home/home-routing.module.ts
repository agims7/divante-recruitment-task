import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { DetailsResolve } from './details/details.resolve';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { ListResolve } from './list/list.resolve';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'list'
          },
          {
            path: 'list',
            component: ListComponent,
            resolve: {
              starships: ListResolve
            }
          },
          {
            path: 'details/:id',
            component: DetailsComponent,
            resolve: {
              starship: DetailsResolve
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DetailsResolve,
    ListResolve,
  ]
})
export class HomeRoutingModule { }
