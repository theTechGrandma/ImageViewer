import { Component } from '@angular/core';
import { SqlDataService } from '../shared/sqldata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sqlimages',
  templateUrl: './sqlimages.component.html',
  styleUrls: ['./sqlimages.component.css']
})

export class SqlimagesComponent {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;
  private SearchText : string;
  searchText: string;

  constructor(
    private _imageService : SqlDataService,
    public route: ActivatedRoute,
    public router: Router) {
      this.searchText = route.snapshot.params['id'];
      console.log("searchText = " + this.searchText)
     }
    
  handleSuccess(data){
    if (data.images.length > 0) {
      console.log(data);
      this.imagesFound = true;
      this.emptyData =false;
      this.images = data.images;
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
  
  ngOnInit() {
    this.emptyData = false;
    console.log("search reached")
        this.route.params
          .map(params => params['id'])
          .subscribe((SearchText) => {
             return this._imageService.getImage(SearchText).subscribe(
              data => this.handleSuccess(data),
              error => this.handleError,
              () => this.searching = false
            )
      });
  }
}
