import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IImage } from '../shared/interfaces';

@Injectable()
export class SqlDataService {
  private query: string;

    baseUrl: string = '/api/image';
    
    constructor(private _http: Http) {
    }

    getImage(query){
        return this._http.get(query)
        .map(res => res.json());
    }
}