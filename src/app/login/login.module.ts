import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class LoginModule {}