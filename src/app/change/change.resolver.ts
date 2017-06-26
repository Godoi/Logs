import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot,Resolve } from '@angular/router';

import { Meta } from '../models/meta.model';
import { ChangeService } from './change.service';

@Injectable()
export class ChangeResolver implements Resolve < Object >{

    constructor(private service: ChangeService){}

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Promise < Object > {

      return this.service
        .getPagination()
        .then(metas =>{
          return metas;
        });

    }
}