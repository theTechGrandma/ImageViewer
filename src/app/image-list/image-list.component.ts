import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;

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

  constructor(
    private _imageService : ImageService,
    private route: ActivatedRoute,
    private router: Router) { }

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
