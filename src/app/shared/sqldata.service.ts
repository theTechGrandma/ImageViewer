import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class SqlDataService {
    private query: string;
    private API_URL: string = environment.EXPRESS_URL;
    imageData: any;
    baseUrl: string = '/api/images/';
    
    constructor(private _http: Http) {}

    getImage(query){
      return this._http.get(this.API_URL + this.baseUrl + query)
       .map(res => res.json());
   }
}