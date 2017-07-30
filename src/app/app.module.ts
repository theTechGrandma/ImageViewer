import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MasonryModule} from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';
import { SqlDataService } from './shared/sqldata.service';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SqlimagesComponent } from './sqlimages/sqlimages.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    PageNotFoundComponent,
    SqlimagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MasonryModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [ImageService, SqlDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }