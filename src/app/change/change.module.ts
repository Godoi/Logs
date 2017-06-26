import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SortableDirective } from '../shared/sortable.directive';

import { ChangeComponent } from './change.component';
import { ChangeService } from './change.service';


@NgModule({
  declarations: [
    ChangeComponent,
    SortableDirective
  ],
  imports: [
    CommonModule,
    NavbarModule,
    NgbModule
  ],
  providers: [ChangeService]
})
export class ChangeModule {}