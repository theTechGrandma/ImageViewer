import { Component, OnInit } from '@angular/core';
import { SqlDataService } from '../shared/sqldata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert'

@Component({
  selector: 'app-sqlimages',
  templateUrl: './sqlimages.component.html',
  styleUrls: ['./sqlimages.component.css']
})
export class SqlimagesComponent implements OnInit {images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;

  constructor(
    private _imageService : SqlDataService,
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
