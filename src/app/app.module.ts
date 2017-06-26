import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import { SessionStorageRef } from './shared/SessionStorageRef';

import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { NavbarModule } from './shared/navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ChangeModule } from './change/change.module';

import { ChangeResolver } from './change/change.resolver';
import { AppRoutingModule } from './app-routing.module';

import { NotifyModule } from './shared/notify/notify.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    NavbarModule,
    ChangeModule,
    LoginModule,
    HomeModule,
    NgbModule.forRoot(),
    NotifyModule,
    AppRoutingModule
  ],
  providers: [
    BaseRequestOptions,
    SessionStorageRef,
    AuthService,
    AuthGuard,
    ChangeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
