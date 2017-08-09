import { Component, OnDestroy } from '@angular/core';
import { SqlDataService } from '../shared/sqldata.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import 'rxjs/add/operator/map';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-sqlimages',
  templateUrl: './sqlimages.component.html',
  styleUrls: ['./sqlimages.component.css']
})

export class SqlimagesComponent implements OnDestroy {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  emptyData: boolean = false;
  private SearchText : string;
  searchText: string;
  private sub: any;
  message: any;
  subscription: Subscription;

  constructor(
    private _imageService : SqlDataService,
    public route: ActivatedRoute,
    public router: Router,
    private messageService: MessageService) {
    //this.searchText = route.snapshot.params['id'];
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    console.log("Message = " + this.subscription);
    
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        //this.sub.unsubscribe();
    }
    
  handleSuccess(data){
    if (data.images.length > 0) {
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

  ngOnInit(): void {
     this.emptyData = false;
    }

  searchImages(query: string){
      this.searching = true;
      console.log("Got to component");
      
      return this._imageService.getImage(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError,
        () => this.searching = false
        )
  }
}
