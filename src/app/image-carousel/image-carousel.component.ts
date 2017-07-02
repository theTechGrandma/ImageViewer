import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert'


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})

export class ImageCarouselComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;

  constructor(
    private _imageService : ImageService,
    private route: ActivatedRoute,
    private router: Router) { }

  handleSuccess(data){
    if (data.hits && data.hits.length > 0) {
      this.imagesFound = true;
      this.emptyData =false;
      this.images = data.hits;
      console.log(data.hits);
    } else {
      this.imagesFound = false;
      this.emptyData =true;
      console.log("no images found");
    }
  }

  handleError(error){
    console.log(error);
  }

  //not being used - but keep for future use.
  popAlert(p: NgbAlert): void {
    p.close;
  }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError,
      () => this.searching = false
    )
  }
  ngOnInit() {
    this.emptyData = false;
  }
}


