import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ImageListComponent } from './image-list/image-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'image-list', },
  { path: 'image-list', component:ImageListComponent },
  { path: 'image-carousel', component:ImageCarouselComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  ImageCarouselComponent,
  ImageListComponent
];
