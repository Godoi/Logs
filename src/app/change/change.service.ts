import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { Observable }  from 'rxjs/Observable';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/toPromise';

import { Change } from '../models/change.model';
import { Meta } from '../models/meta.model';


@Injectable()
export class ChangeService {

    private api = 'http://192.168.3.152:8000/api/changelog';

    constructor(private http: AuthHttp,
                private authService: AuthService,) { }

    getChanges(): Promise < Change[] > {
        return this.http
                .get(this.api)
                .toPromise()
                .then( response => response.json().data as Change[])
                .catch( err => {
                    console.warn('erro->', err);
                    return false;
                });
    }

    getPagination(): Promise < Meta[] > {
        return this.http
                .get(this.api)
                .toPromise()
                .then(response => response.json().meta.pagination as Meta[])
                .catch(err => {
                  console.warn('erro->', err);
                  return false;
                });
    }

    getPage(id:number): Promise < Change[] >{
      const url = `${this.api}?page=${id}`;
      return this.http
              .get(url)
              .toPromise()
              .then( response => response.json().data as Change[])
              .catch( err => {
                  console.warn('erro->', err);
                  return false;
              });
    }

    setOrderBy(id:number, sortOrder:string): Promise < Change[] >{
      const url = `${this.api}?page=${id}&sort=${sortOrder}`;
      return this.http
              .get(url)
              .toPromise()
              .then( response => response.json().data as Change[])
              .catch( err => {
                  console.warn('erro->', err);
                  return false;
              });
    }

    search(term: string): Promise < Change[] > {
      const url = `${this.api}?fields=${term}`;
      console.log(url);
      return this.http
               .get(url)
               .toPromise()
               .then(response => response.json().data as Change[])
               .catch(err =>{
                  console.warn('error->',err);
                  return false;
               });
    }

}