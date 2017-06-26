import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Change } from '../models/change.model';
import { Meta } from '../models/meta.model';
import { ChangeService } from './change.service';
import { SortableDirective } from '../shared/sortable.directive';

@Component({
  selector: 'app-root',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
    changes: Change[];
    metas: Meta;
    subscription: Subscription;
    sortBy: Array < any > = [];
    page: number = 0;
    opDetail: number;
    opFilter:boolean = false;
    operation: string = 'changed';
    //isLogged = false;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private service: ChangeService,
        private router: Router,
        private el: ElementRef
    ){
        //this.isLogged = this.authService.isLogged();
    }

    ngOnInit() {
      this.getPagination();
    }

    getPagination(){
        this.subscription = this.route.data
        .subscribe(
          data => {
            this.metas = data.fetchData as Meta;
          }
        )
    }

    search(term: string, name: string, id: number){
      let dataTable = [];
      let listTerm = [];
      dataTable = this.changes;
      /*
      listTerm.filter( listTerm => { });
      */
        this.changes =
          this.changes
            .filter( changes => {
              const exp = new RegExp(term,'ig');
              return changes[name].match(exp);
            });
        this.resetPagination(this.changes.length);
        //this.selectPage(1);
    }

    selectPage(pageNumber: number){
        this.opDetail = -1;
        this.service
          .getPage(pageNumber)
          .then(changes => {
              this.changes = changes;
          });
    }

    changeOrder(event: Object) {
      this.opDetail = -1;
      let sortOrder: string = event['orderBy'];
      if( event['sortOrder'] === 'desc' ){
          sortOrder = `-${event['orderBy']}`;
      }
      this.service
          .setOrderBy(this.page,sortOrder)
          .then(changes => {
              this.changes = changes;
      });
    }

    openDetail(id:number){
      if(this.opDetail === id){
        this.opDetail = -1;
      }else{
        this.opDetail = id;
      }
    }

    openFilter(){
      if(!this.opFilter){
        this.opFilter = true;
      }else{
        this.opFilter = false;
      }
    }

    resetPagination(total:number){
      this.metas.total = total;
    }

}