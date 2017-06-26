import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionStorageRef } from './shared/SessionStorageRef';
import { NotifyModule } from './shared/notify/notify.module';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  apiUrl: string = '//192.168.3.152:8000/api/auth/login';

  //isLoggedIn = false;
  localStorage: any;
  sessionStorage: any;
  redirectUrl: string;
  isLoggedIn = new EventEmitter< boolean >();

  private header = new Headers(
    {
      'Content-Type': 'application/json'
    }
  );
  private helper = new JwtHelper();

  constructor(
    private router: Router,
    private ss: SessionStorageRef,
    private http: Http,
    private authHttp: AuthHttp,
    private notify: NotifyModule
  ) {
    this.sessionStorage = this.ss.nativeWindow();
  }

  isLogged(): boolean {
    let jwt = this.sessionStorage.getItem('token');
    if (!jwt) {
      return false;
    }
    if ( this.helper.isTokenExpired(jwt) ) {
      //this.isLoggedIn = false;
      this.isLoggedIn.emit(false);
      return false;
    }
    if (jwt) {
      //this.isLoggedIn = true;
      this.isLoggedIn.emit(true);
      return true;
    }
    return false;
  }

  login(username: string, password: string): Promise < boolean > {
    const url = `${this.apiUrl}`;
    return Promise.resolve(this.http
      .post(url, JSON.stringify({
        email: username,
        password: password
      }), { headers: this.header})
      .toPromise()
      .then( response => {
        const jwt = response.json().data['token'];
        if (jwt) {
          this.sessionStorage.setItem('token', jwt);
        }
        return this.isLogged();
      })
      .catch( err => this.handleError(err) ));
  }

  logout(): void {
    //this.isLoggedIn = false;
    this.isLoggedIn.emit(false);
    this.sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
  private handleError(error: any): Promise < any > {
    const statusCodeGroup = +error.status.toString()[0]
    switch (statusCodeGroup) {
      case 4: {
          this.notify.warning('Usuário ou senha inválidos', 'Erro no login');
        //console.warn('Usuário ou senha inválidos.', error.status);
        break;
      }
      case 5: {
          this.notify.warning('Falha interna. Tente novamente', 'Erro no login');
         //console.warn('Falha interna. Tente novamente.', error.status);
        break;
      }
      default: {
          this.notify.error('Erro desconhecido - ' + error.status, 'Erro no login');
        //console.warn('Erro desconhecido -', error.status);
      }
    }
      //this.notify.error('','');
    //console.warn('Ocorreu um erro no service de autenticação', error);
    return Promise.reject(error.message || error);
  }
}