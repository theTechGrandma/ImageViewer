import { Component, OnInit } from '@angular/core';
import { SqlDataService } from '../shared/sqldata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-sqlimages',
  templateUrl: './sqlimages.component.html',
  styleUrls: ['./sqlimages.component.css']
})

@Pipe({ name: 'safe' })
export class SqlimagesComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;

  constructor(
    private _imageService : SqlDataService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private router: Router) { }

    transform(url) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    

  handleSuccess(data){
    if (data) {
      //console.log(data);
      this.imagesFound = true;
      this.emptyData =false;
<<<<<<< HEAD
      console.log(data);
      this.images = data.images;
=======
      this.images = data;
>>>>>>> c4edc23103d3d630f7ae23019e6f46b09e90b15a
      //this.images = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      //            + data.recordset.base64string);
      console.log("It handled");
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
    console.log("Got to component");
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(console.log(data)),
      error => this.handleError,
      () => this.searching = false
    )
  }

  ngOnInit() {
    this.emptyData = false;
  }
}
