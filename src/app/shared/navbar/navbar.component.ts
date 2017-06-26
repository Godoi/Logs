import {
  Component,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'rz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //isLogged = false;
  isLogged: Boolean = false;
  constructor(
    private authService: AuthService
  ){

  }

  logout() {
    this.authService.logout();
    //this.isLogged = this.authService.isLogged();
  }

  ngOnInit() {
    //this.isLogged = this.authService.isLogged();
    this.authService.isLoggedIn.subscribe(
      isLogged => this.isLogged = isLogged
    );
  }

}
