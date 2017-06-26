import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SessionStorageRef } from './shared/SessionStorageRef';

export function authHttpServiceFactory(http: Http, options: RequestOptions, sessionStorage: SessionStorageRef) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
		tokenGetter: (() => sessionStorage.nativeWindow().getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, SessionStorageRef]
    }
  ]
})
export class AuthModule {}
